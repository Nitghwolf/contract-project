const express = require('express');
const ReactDOMServer = require('react-dom/server');
const React = require('react');

const Main = require('../views/Main');
const { User, Tea } = require('../db/models');

const router = express.Router();

router.get('/', async (req, res) => {
  const { userId } = req.session;
  const user = userId && await User.findByPk(userId);
  const teas = await Tea.findAll();
  res.renderComponent(Main, { user, teas });
});

module.exports = router;
