const React = require('react');

function NavBar({ user }) {
  return ((user && (
  <nav className="">
    <ul className="">
      <li className="">{user.user_name}</li>
      <li className=""><a href="/adminpanel">Личный кабинет</a></li>
      <li className=""><a href="/register/logout">Выход</a></li>
      <li className=""><a href="/">Домой</a></li>
    </ul>
  </nav>
  ))
|| (
<nav className="">
  <ul className="">
    <li className=""><a href="/register">Регистрация</a></li>
    <li className=""><a href="/register/login">Вход</a></li>
    <li className=""><a href="/">Домой</a></li>
  </ul>
</nav>
));
}

module.exports = NavBar;
