const ReactDOMServer = require('react-dom/server');
const React = require('react');

function renderErrorComponent(options = { doctype: true }) {
    const errorPage = React.createElement(Error, {
        message: 'Не удалось получить записи.',
        error: {},
      });
      const html = ReactDOMServer.renderToStaticMarkup(errorPage);
      res.write('<!DOCTYPE html>');
      res.end(html);
  }
  
  function reactSsrError(req, res, next) {
    res.renderErrorComponent = renderErrorComponent;
    next();
  }

  module.exports = reactSsrError;