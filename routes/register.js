const Register = require('../views/Register');
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

module.exports = router;