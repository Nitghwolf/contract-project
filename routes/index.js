const express = require('express');
const ReactDOMServer = require('react-dom/server');
const React = require('react');

const Main = require('../views/Main');

const router = express.Router();

router.get('/', (req, res) => {
  res.renderComponent(Main);
});

module.exports = router;
