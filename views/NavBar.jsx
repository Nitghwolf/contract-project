const React = require('react');


function NavBar({ user }) {
  return ((user && (
    <div className="navBar">
      <div className="logoAndTitle">
        <div className="navBarTitle">ЧАЙ И ТОЧКА</div>
        <div><img className="logo" src="/img/logo.png" alt="logo" /></div>
      </div>
      <div className="navBarLink">
        <div className="navBarElem">{user.user_name}</div>
        <div className="navBarElem"><a href="/register">Личный кабинет</a></div>
        <div className="navBarElem"><a href="/register/logout">Выход</a></div>
        <div className="navBarElem"><a href="/">Домой</a></div>
      </div>
    </div>
  ))
    || (
      <div className="navBar">
        <div className="logoAndTitle">
          <div className="navBarTitle">ЧАЙ И ТОЧКА</div>
          <div><img className="logo" src="/img/logo.png" alt="logo" /></div>
        </div>
        <div className="navBarLink">
          <div className="navBarElem"><a href="/register">Регистрация</a></div>
          <div className="navBarElem"><a href="/register/login">Вход</a></div>
          <div className="navBarElem"><a href="/">Домой</a></div>
        </div>
      </div>
    ));
}

module.exports = NavBar;