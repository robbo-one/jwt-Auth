const express = require('express')
const { getTokenDecoder } = require('authenticare/server')
const db = require('../db/fruits')

const router = express.Router()

module.exports = router

// GET /api/v1/fruits
router.get('/', async (req, res) => {
  try {
    const fruits = await db.getFruits()
    res.json({ fruits })
  } catch (err) {
    res.status(500).send(err.message)
  }
})

// POST /api/v1/fruits
router.post('/', getTokenDecoder(), async (req, res) => {
  const newFruit = req.body
  // const user = { id: 1 }
  if (req.user) {
    console.log('username:', req.user.username)
  } else {
    console.log('authenication token not provided')
  }

  try {
    const fruits = await db.addFruit(newFruit)
    res.json({ fruits })
  } catch (err) {
    res.status(500).send(err.message)
  }
})

// PUT /api/v1/fruits
router.put('/', getTokenDecoder(), async (req, res) => {
  const newFruit = req.body
  // const user = { id: 1 }
  if (req.user) {
    console.log('username:', req.user.username)
  } else {
    console.log('authenication token not provided')
  }

  try {
    const fruits = await db.updateFruit(newFruit)
    res.json({ fruits })
  } catch (err) {
    if (err.message === 'Unauthorized') {
      return res.status(403).send(
        'Unauthorized: Only the user who added the fruit may update it'
      )
    }
    res.status(500).send(err.message)
  }
})

// DELETE /api/v1/fruits
router.delete('/:id', getTokenDecoder(), async (req, res) => {
  const id = Number(req.params.id)
  // const user = { id: 1 }
  if (req.user) {
    console.log('username:', req.user.username)
  } else {
    console.log('authenication token not provided')
  }

  try {
    const fruits = await db.deleteFruit(id)
    res.json({ fruits })
  } catch (err) {
    if (err.message === 'Unauthorized') {
      return res.status(403).send(
        'Unauthorized: Only the user who added the fruit may delete it'
      )
    }
    res.status(500).send(err.message)
  }
})
