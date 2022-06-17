const ReactDOMServer = require('react-dom/server');
const React = require('react');
const Error = require('../views/Error');


function renderErrorComponent(options = {doctype: true, message:'Не удалось обратиться к базе данных'}) {
  const errorPage = React.createElement(Error, {
    message: options.message,
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
