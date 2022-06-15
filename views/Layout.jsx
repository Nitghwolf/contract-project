const React = require('react');

module.exports = function Layout({ username, children }) {
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
        <ul className="nav">
          <li className="nav-item">
            <a className="nav-link" href="/">Главная</a>
          </li>
          {username
            ? (
              <>
                <li className="nav-item">
                  <a className="nav-link" href="/auth">{username}</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/logout">Выйти</a>
                </li>
              </>
            )
            : (
              <>
                <li className="nav-item">
                  <a className="nav-link" href="/login">Войти</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/register">Зарегистрироваться</a>
                </li>
              </>
            )}
        </ul>
        <div className="container-fluid">
          {children}
        </div>

      </body>

    </html>
  );
};
