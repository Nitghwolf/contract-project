const React = require('react');
const Layout = require('./Layout');

module.exports = function Register() {
  return (
    <Layout>
      <div>
        <h1 className="title_login">Регистрация</h1>
      </div>
      <form id="signupForm" method="POST" action="/register">
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
        <button type="submit" className="btn btn-amazing btn-reg-log">Зарегистрироваться</button>
      </form>
    </Layout>
  );
};
