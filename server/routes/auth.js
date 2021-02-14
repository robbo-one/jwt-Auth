const express = require('express')
const { applyAuthRoutes } = require('authenticare/server')

const {
  userExists,
  getUserByName,
  createUser } = require('../db/users')

const router = express.Router()

applyAuthRoutes(router, {
  userExists,
  getUserByName,
  createUser
})

// router.get('/', (req, res) => {
//   userExists()
// })

// // GET if user exists
// router.get('/', async (req, res) => {
//   try {
//     const user = await userExists()
//     res.json({ user })
//   } catch (err) {
//     res.status(500).send(err.message)
//   }
// })

// // POST /api/v1/fruits
// router.post('/', async (req, res) => {
//   const newFruit = req.body
//   const user = { id: 1 }
//   try {
//     const fruits = await db.addFruit(newFruit, user)
//     res.json({ fruits })
//   } catch (err) {
//     res.status(500).send(err.message)
//   }
// })

module.exports = router

