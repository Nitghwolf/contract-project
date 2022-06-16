const React = require('react');
const NavBar = require('./NavBar');

module.exports = function Layout({ user, children }) {
  return (
    <html lang="ru">

      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <script defer type="text/javascript" charSet="utf-8" async src="https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3Ab9995fbed6a999c101253389d1ca33b684e884cd1644cd9984fe98a360eed1bd&amp;lang=ru_RU&amp;scroll=true" />

        <title>Чай и точка</title>
        <script src="https://use.fontawesome.com/releases/v6.1.0/js/all.js" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css?family=Varela+Round" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css?family=Nunito:200,200i,300,300i,400,400i,600,600i,700,700i,800,800i,900,900i" rel="stylesheet" />
        <link href="/css/bootstrap.css" rel="stylesheet" />
        <link href="/css/style.css" rel="stylesheet" />
        <link rel="shortcut icon" href="/img/icon.ico" type="image/x-icon" />
        <script defer src="/js/application.js" />
      </head>

      <body>
        <header role="banner" className="">
          <div className="">
            <NavBar user={user} />

          </div>
        </header>
        <div className="content">
          <div className="max-w-700 center">
            {children}
          </div>
        </div>

      </body>

    </html>
  );
};
