const express = require('express');

const Main = require('../views/Main');
const { User, Tea } = require('../db/models');

const router = express.Router();

router.get('/', async (req, res) => {
  const teas = await Tea.findAll();
  res.send(teas);
});

module.exports = router;