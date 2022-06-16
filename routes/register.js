const router = require('express').Router();
const bcrypt = require('bcrypt');
const Register = require('../views/Register');
const Login = require('../views/Login');

const { User } = require('../db/models');

router.get('/', (req, res) => {
  try {
    res.renderComponent(Register);
  } catch (error) {
    res.renderErrorComponent();
  }
});

router.post('/', async (req, res) => {
  try {
    const { username, password } = req.body;
    const existingUser = await User.findOne({ where: { user_name: username } });
    if (existingUser) {
      res.send('Такой пользователь уже есть');
      return;
    }

    const user = await User.create({
      user_name: username,
      password: await bcrypt.hash(password, 10),
    });
    req.session.userId = user.id;
    res.redirect('/');
  } catch (error) {
    res.renderErrorComponent();
  }
});

router.get('/login', async (req, res) => {
  try {
    res.renderComponent(Login);
  } catch (error) {
    res.renderErrorComponent();
  }
});

router.post('/login', async (req, res) => {
  try {
    const { username, password } = req.body;
    const existingUser = await User.findOne({ where: { user_name: username } });

    if (existingUser && await bcrypt.compare(password, existingUser.password)) {
      req.session.userId = existingUser.id;
      res.redirect('/');
    } else {
      res.send('Такого пользователя нет либо пароли не совпадают');
    }
  } catch (error) {
    res.renderErrorComponent();
  }
});

router.get('/logout', async (req, res) => {
  try {
    req.session.destroy();
    res.redirect('/');
  } catch (error) {
    res.renderErrorComponent();
  }
});

module.exports = router;
 