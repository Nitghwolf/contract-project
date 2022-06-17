const React = require('react');
const Layout = require('./Layout');

module.exports = function Main({ user, teas }) {
  return (
    <Layout user={user}>
      <section className="section-main">
        <div id="map" />
        <ul className="admin-panel_list">
          {teas.map((tea) => (
            <li className="admin-panel_item">
              <div className="card-tea">
                <a href={`/tea/${tea.id}`}>
                  <ul className="card-tea_item">
                    <li className="card-tea_item-name">{tea.name_tea}</li>
                    <li className="card-tea_item-sort">{tea.variety}</li>
                    <li className="card-tea_item-pic"><img src={tea.img} alt="pic tea" /></li>
                    <li className="card-tea_item-desc"><p>{tea.description}</p></li>
                    <li>{tea.origin_country}</li>
                  </ul>
                </a>
              </div>
            </li>
          ))}
        </ul>
      </section>
      <script defer src="https://api-maps.yandex.ru/2.1/?apikey=69e10893-2c84-42aa-89b4-4b684b720fad&lang=ru_RU" type="text/javascript" />
      <script defer src="/maps.js" type="text/javascript" />
    </Layout>
  );
};
