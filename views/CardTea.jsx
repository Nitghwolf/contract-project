const React = require('react');

module.exports = function CardTea({ tea }) {
  return (
    <li className="admin-panel_item">
      <div className="card-tea-edit hidden">
        <label className="label" htmlFor="name">Название</label>
        <input type="text" className="form-control" name="name" id="name" value={tea.name_tea} placeholder="Название чая" />

        <label className="label" htmlFor="sort">Сорт</label>
        <input type="text" className="form-control" name="sort" id="sort" value={tea.variety} placeholder="Сорт чая" />

        <label className="label" htmlFor="location">Место культивации</label>
        <input type="text" className="form-control" name="location" id="location" value={tea.origin_country} placeholder="Укажите локацию" />

        <label className="label" htmlFor="picture">Картинка</label>
        <input type="text" className="form-control" name="picture" id="picture" value={tea.img} placeholder="Напишите url картинки" />

        <label className="label" htmlFor="descr">Описание</label>
        <textarea name="descr" className="form-control" id="descr" cols="30" rows="3" value={tea.description} placeholder="Описание чая" />
        <button className="btn-amazing btn-save" id={tea.id}>Сохранить</button>
        <button className="btn-amazing btn-cancel">Отменить</button>
      </div>
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
        <a className="card-tea_btn card-tea_btn-delete btn-amazing" href="#" id={tea.id}>Удалить позицию</a>
        <a className="card-tea_btn card-tea_btn-edit btn-amazing" href="#" id={tea.id}>Редактировать</a>
      </div>
    </li>
  );
};
