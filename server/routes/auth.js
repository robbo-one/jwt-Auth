import { applyAuthRoutes } from 'authenticare/server'

const express = require('express')

const db = require('../db/users')

const router = express.Router()

applyAuthRoutes((router, {userExists: db.userExists, getUserByName: db.getUserByName, createUser: db.createUser}))


module.exports = router
