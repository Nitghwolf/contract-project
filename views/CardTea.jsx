const React = require('react');

module.exports = function CardTea({ tea }) {
  return (
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
        <a className="card-tea_btn-delete" href="#" id={tea.id}>Удалить позицию</a>
      </div>
    </li>
  );
};
