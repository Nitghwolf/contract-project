const router = require('express').Router();
const React = require('react');
const ReactDOMServer = require('react-dom/server');
const TeaView = require('../views/Tea');
const CommentView = require('../views/CommentView');

const { User, Tea, Comment } = require('../db/models');

router.get('/:id', async (req, res) => {
  try {
    const { userId } = req.session;
    const user = userId && await User.findByPk(userId);
    const comments = await Comment.findAll({
      raw: true,
      where: { tea_id: req.params.id },
      include: [Comment.User],
      order: [
        ['createdAt', 'DESC'],
      ],
    });
    let tea = await Tea.findOne({ where: { id: req.params.id } });
    tea = tea.dataValues;

    res.renderComponent(TeaView, { tea, user, comments });
  } catch (error) {
    res.renderErrorComponent();
  }
});

router.post('/:id', async (req, res) => {
  const { userId } = req.session;
  const user = userId && await User.findByPk(userId);
  const { comment } = req.body;
  const commentRes = await Comment.create({
    user_id: userId,
    content: comment,
    tea_id: req.params.id,
  });
  const element = React.createElement(CommentView, { commentRes, user });
  const html = ReactDOMServer.renderToStaticMarkup(element);
  res.send(html);
});

module.exports = router;
