const React = require('react');
const Layout = require('./Layout');

module.exports = function Login() {
  return (
    <Layout>
      <h1 className="title_login">Вход</h1>
      <form id="signupForm" method="POST" action="/register/login">
        <div className="form-group">
          <div>Логин:</div>
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
          <div>Пароль:</div>
          <input id="password" className="" name="password" type="password" required minLength="4" />
        </div>
        <button type="submit" className="btn btn-amazing btn-reg-log">Войти</button>
      </form>
    </Layout>
  );
};
