const React = require('react');
const Layout = require('./Layout');

module.exports = function Login() {
  return (
    <Layout>
      <h1>Вход</h1>
      <form id="signupForm" method="POST" action="/register/login">
        <div className="form-group">
          <label htmlFor="username">Логин:
            <input
              id="username"
              className=""
              name="username"
              type="text"
              required
              pattern="[A-Za-z]\w+"
              minLength="4"
              title="Латинские буквы, цифры и _"
            />
          </label>
        </div>
        <div className="form-group">
          <label htmlFor="password">Пароль:
            <input id="password" className="" name="password" type="password" required minLength="4" />
          </label>
        </div>
        <button type="submit" className="">Войти</button>
      </form>

    </Layout>
  );
};