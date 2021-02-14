const express = require('express')
// import { applyAuthRoutes } from 'authenticare/server'
const { applyAuthRoutes } = require('authenticare/server')

const db = require('../db/users')

const router = express.Router()
console.log(db.getUserByName)
applyAuthRoutes(router, {
  userExists: db.userExists, 
  getUserByName: db.getUserByName, 
  createUser: db.createUser
})


module.exports = router
