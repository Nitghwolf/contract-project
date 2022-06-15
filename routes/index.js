const Layout = require('../views/Layout');

const router = require('express').Router();

router.get('/', (req, res) => {
  res.renderComponent(Layout);
});

module.exports = router;