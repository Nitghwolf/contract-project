const router = require('express').Router();

const Register = require('../views/Register');
const TeaView = require('../views/Tea');

const { User, Tea, Comment } = require('../db/models');

router.get('/:id', async (req, res) => {
    try{
        const { userId } = req.session;
        const user = userId && await User.findByPk(userId);

        let tea = await Tea.findOne({ where: { id: req.params.id } });
        tea = tea.dataValues;

        let comment = await Comment.findOne({ where: { tea_id: req.params.id } });


        res.renderComponent(TeaView, {tea, user, comment});
    }
    catch(error){
        res.renderErrorComponent();
    }
  });

  module.exports = router;