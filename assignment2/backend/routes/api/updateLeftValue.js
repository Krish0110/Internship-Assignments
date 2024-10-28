const express = require('express')
const router = express.Router()

router.post('/', (req, res) => {
  const {rightValue} = req.body
  const leftValue = rightValue / 2


  res.json({ leftValue })
})

module.exports = router;