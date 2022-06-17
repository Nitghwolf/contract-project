const express = require('express');

const { Tea } = require('../db/models');

const router = express.Router();

router.get('/', async (req, res) => {
  const teas = await Tea.findAll();
  res.send(teas);
});

module.exports = router;