const ReactDOMServer = require('react-dom/server');
const React = require('react');
const Error = require('../views/Error');


function renderErrorComponent(options = { doctype: true }) {
  const errorPage = React.createElement(Error, {
    message: 'Не удалось получить записи.',
    error: {},
  });
  const html = ReactDOMServer.renderToStaticMarkup(errorPage);
  this.write('<!DOCTYPE html>');
  this.end(html);
}

function reactSsrError(req, res, next) {
  res.renderErrorComponent = renderErrorComponent;
  next();
}

module.exports = reactSsrError;
