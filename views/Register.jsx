const React = require('react');
const Layout = require('./Layout');

module.exports = function Register() {
  return (
    <Layout>
      <div>
        <h1>Регистрация</h1>
      </div>
      <form id="signupForm" method="POST" action="/register">
        <div className="form-group">
          <label htmlFor="username">
            <div>Логин:</div>
            <div>
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

            </div>
          </label>
        </div>
        <div className="form-group">
          <label htmlFor="password">
            <div>Пароль:</div>
            <div><input id="password" className="" name="password" type="password" required minLength="4" /></div>
          </label>
        </div>
        <div><button type="submit" className="btn">Зарегистрироваться</button></div>
      </form>
    </Layout>
  );
};
