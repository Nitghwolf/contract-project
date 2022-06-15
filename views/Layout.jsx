const React = require('react');
const NavBar = require('./NavBar');

module.exports = function Layout({ children}) {
  return (
    <html lang="en">

      <head>
        {/* <link rel="stylesheet" href="/stylesheets/normalize.css" /> */}
        {/* <link rel="stylesheet" href="/stylesheets/application.css" /> */}
        <meta charSet="utf-8" />

        {/* <script defer src="/js/application.js" /> */}

        <title>Чай и точка</title>
      </head>

      <body>
        <header role="banner" className="">
          <div className="">
              <NavBar />
              <h1>Чай и точка</h1>
          </div>
        </header>
        <div className="">
          <div className="max-w-700 center">
            {children}
          </div>
        </div>
      </body>

    </html>
  );
};
