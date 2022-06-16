const React = require('react');
const Layout = require('./Layout');

module.exports = function Main({ teas, user }) {
  return (
    <Layout user={user}>

      <div className="tea list-group">
        <div>{teas}</div>
      </div>

    </Layout>
  );
};
