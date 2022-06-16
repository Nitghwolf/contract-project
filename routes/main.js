const ReactDOMServer = require('react-dom/server');
const React = require('react');
const indexRouter = require('express').Router();
const { Tea } = require('../db/models');

indexRouter.get('/', async (req, res) => {
  const teas = await Tea.findAll();
  console.log(teas);
  const elem = React.createElement(Tea, { teas });
  const html = ReactDOMServer.renderToStaticMarkup(elem);
  res.write('<!DOCTYPE html>');
  res.end(html);
});

module.exports = indexRouter;
