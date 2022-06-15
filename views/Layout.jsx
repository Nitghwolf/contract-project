const React = require('react');
const NavBar = require('./NavBar');

module.exports = function Layout({ user, children }) {
  return (
    <html lang="ru">

      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Чай и точка.</title>
        <script src="https://use.fontawesome.com/releases/v6.1.0/js/all.js" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css?family=Varela+Round" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css?family=Nunito:200,200i,300,300i,400,400i,600,600i,700,700i,800,800i,900,900i" rel="stylesheet" />
        <link href="css/styles.css" rel="stylesheet" />
      </head>

      <body>
        <header role="banner" className="">
          <div className="">
              <NavBar user={user}/>
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
