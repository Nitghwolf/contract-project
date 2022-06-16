const router = require('express').Router();
const React = require('react');
const ReactDOMServer = require('react-dom/server');

const AdminPanel = require('../views/AdminPanel');
const CardTea = require('../views/CardTea');
const { Comment, User, Tea } = require('../db/models');

router.get('/', async (req, res) => {
  const { userId } = req.session;
  const user = userId && await User.findByPk(userId);
  const teas = await Tea.findAll();
  const comments = await Comment.findAll({
    where: {
      user_id: userId,
    },
  });
  try {
    res.renderComponent(AdminPanel, { user, teas, comments });
  } catch (error) {
    res.renderErrorComponent();
  }
});

router.post('/', async (req, res) => {
  try {
    const {
      name, location, picture, descr, sort,
    } = req.body;
    const tea = await Tea.create({
      name_tea: name,
      variety: sort,
      img: picture,
      description: descr,
      origin_country: location,
    });
    const element = React.createElement(CardTea, { tea });
    const html = ReactDOMServer.renderToStaticMarkup(element);
    res.send(html);
    // res.redirect('/adminpanel');
  } catch (error) {
    res.renderErrorComponent();
  }
});

router.delete('/:id', async (req, res) => {
  try {
    await Tea.destroy({ where: { id: req.params.id } });
    res.json({ isDeleteSuccessful: true });
    // const {
    //   name, location, picture, descr, sort,
    // } = req.body;
    // const teas = await Tea.create({
    //   name_tea: name,
    //   variety: sort,
    //   img: picture,
    //   description: descr,
    //   origin_country: location,
    // });
    // res.redirect('/adminpanel');
  } catch (error) {
    res.renderErrorComponent();
  }
});

module.exports = router;
