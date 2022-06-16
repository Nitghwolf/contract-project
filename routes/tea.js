const router = require('express').Router();

const Register = require('../views/Register');
const Tea = require('../views/Tea');

const { User } = require('../db/models');

router.get('/:id', (req, res) => {
    try{
      res.renderComponent(Tea, {tea, user, comment});
    }
    catch(error){
      res.renderErrorComponent();
    }
  });

  module.exports = router;