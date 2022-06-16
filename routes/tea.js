const router = require('express').Router();

const Register = require('../views/Register');
const TeaView = require('../views/Tea');

const { User, Tea, Comment } = require('../db/models');

router.get('/:id', async (req, res) => {
  try {
    const { userId } = req.session;
    const user = userId && await User.findByPk(userId);
    const comments = await Comment.findAll({
      raw: true,
      where: { tea_id: req.params.id },
      include: [Comment.User],
    });
    let tea = await Tea.findOne({ where: { id: req.params.id } });
    tea = tea.dataValues;
    // const comments = await Comment.findAll({ where: { tea_id: req.params.id } });

    res.renderComponent(TeaView, { tea, user, comments });
  } catch (error) {
    res.renderErrorComponent();
  }
});

module.exports = router;
