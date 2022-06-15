const express = require('express');
const ReactDOMServer = require('react-dom/server');
const React = require('react');

const Main = require('../views/Main');
const { User } = require('../db/models');

const router = express.Router();

router.get('/', async (req, res) => {
  const { userId } = req.session;
  const user = userId && await User.findByPk(userId);
  res.renderComponent(Main, {user});
});

module.exports = router;
