const Register = require('../views/Register');
const Login = require('../views/Login');
const router = require('express').Router();
const bcrypt = require('bcrypt');

const { User } = require('../db/models');

router.get('/', (req, res) => {
  res.renderComponent(Register);
});

router.post('/', async (req, res) => {
    try {
        const { username, password } = req.body;
        const existingUser = await User.findOne({ where: { user_name:  username} });
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
        console.log(error);
      }
});

router.get('/login', async (req, res) => {
  try {
    res.renderComponent(Login);
  } catch (error) {
    console.log(error);
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
    console.log(error);
  }
});

module.exports = router;