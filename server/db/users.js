const { generateHash } = require('authenticare/server')
const connection = require('./connection')

module.exports = {
  userExists,
  getUserByName,
  createUser
}

function userExists (username, db = connection) {
  return db('users')
    .count('id as n')
    .where('username', username)
    .then(count => {
      return count[0].n > 0
    })
}

function getUserByName (username, db = connection) {
  return db('users')
    .select()
    .where('username', username)
    .first()
}

function createUser (user, db = connection) {
  // you'll need to write this one
  return userExists(user.username, db)
    .then(exists => {
      if(exists) {
        return Promise.reject(new Error('user exists'))
      }
    })
    .then(() => {
      generateHash(user.password)
    })
    .then((passwordHash) => {
      return db('users')
      .insert({username: user.username, hash: passwordHash})
    })

}
