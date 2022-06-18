const React = require('react');

module.exports = function CardTeaEdit({ updateRow }) {
  return (
    <>
      <a href={`/tea/${updateRow.id}`}>
        <ul className="card-tea_item">
          <li className="card-tea_item-name">{updateRow.name_tea}</li>
          <li className="card-tea_item-sort">{updateRow.variety}</li>
          <li className="card-tea_item-pic"><img src={updateRow.img} alt="pic tea" /></li>
          <li className="card-tea_item-desc"><p>{updateRow.description}</p></li>
          <li>{updateRow.origin_country}</li>
        </ul>
      </a>
      <a className="card-tea_btn card-tea_btn-delete btn-amazing" href="#" id={updateRow.id}>Удалить позицию</a>
      <a className="card-tea_btn card-tea_btn-edit btn-amazing" href="#" id={updateRow.id}>Редактировать</a>
    </>
  );
};
