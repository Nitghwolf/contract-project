const React = require('react');

module.exports = function Layout({ children}) {
  return (
    <html lang="en">

      <head>
        {/* <link rel="stylesheet" href="/stylesheets/normalize.css" /> */}
        {/* <link rel="stylesheet" href="/stylesheets/application.css" /> */}
        <meta charSet="utf-8" />

        {/* <script defer src="/js/application.js" /> */}

        <title>Broccoli Blog</title>
      </head>

      <body>
        <header role="banner" className="mar-t-5 pad-t-2 pad-b-4 pad-s-1 wrap-float bg-white">
          <div className="max-w-700 center wrap-float">

            <div className="logo-container">
              <h1>Чай и точка</h1>
            </div>
          </div>
        </header>
        <div className="bg-dk-green pad-t-2 pad-s-1 pad-b-8 mar-b-16 c-white">
          <div className="max-w-700 center">
            {children}
          </div>
        </div>
      </body>

    </html>
  );
};
