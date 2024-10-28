const express = require('express')
const router = express.Router()

router.post('/', (req, res) => {
  const { leftValue } = req.body
  const rightValue = leftValue * 2

  res.json({ rightValue })
})

module.exports = router;