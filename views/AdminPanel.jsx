const React = require('react');
const Layout = require('./Layout');

module.exports = function AdminPanel({ user, teas }) {
  return (
    <Layout user={user}>
      <div className="container">

        <div className="admin-panel">
          <h2 className="admin-panel_title">Личный кабинет</h2>
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
          {/* <form className="admin-panel_form" action="" method="POST">
          <label htmlFor="tea-name">Название</label>
          <input type="text" id="tea-name" />
          <label htmlFor="tea-location">Место культивации</label>
          <input type="text" id="tea-location" />
          <label htmlFor="tea-pic">Картинка</label>
          <input type="text" id="tea-pic" />
          <label htmlFor="tea-descr">Описание</label>
          <input type="text" id="tea-descr" />
          <button type="submit">Добавить чай</button>
        </form> */}
          <section className="ftco-section">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-md-12">
                  <div className="wrapper">
                    <div className="row no-gutters mb-5">
                      <div className="col-md-7">
                        <div className="contact-wrap w-100 p-md-5 p-4">
                          <h3 className="mb-4">Форма добавления чая</h3>
                          <form action="/adminpanel" method="POST" id="contactForm" name="contactForm" className="contactForm">
                            <div className="row">
                              <div className="col-md-6">
                                <div className="form-group">
                                  <label className="label" htmlFor="name">Название</label>
                                  <input type="text" className="form-control" name="name" id="name" placeholder="Название чая" />
                                </div>
                              </div>
                              <div className="col-md-6">
                                <div className="form-group">
                                  <label className="label" htmlFor="sort">Сорт</label>
                                  <input type="text" className="form-control" name="sort" id="sort" placeholder="Сорт чая" />
                                </div>
                              </div>
                              <div className="col-md-6">
                                <div className="form-group">
                                  <label className="label" htmlFor="location">Место культивации</label>
                                  <input type="text" className="form-control" name="location" id="location" placeholder="Укажите локацию" />
                                </div>
                              </div>
                              <div className="col-md-6">
                                <div className="form-group">
                                  <label className="label" htmlFor="picture">Картинка</label>
                                  <input type="text" className="form-control" name="picture" id="picture" placeholder="Напишите url картинки" />
                                </div>
                              </div>
                              <div className="col-md-12">
                                <div className="form-group">
                                  <label className="label" htmlFor="descr">Описание</label>
                                  <textarea name="descr" className="form-control" id="descr" cols="30" rows="4" placeholder="Описание чая" />
                                </div>
                              </div>
                              <div className="col-md-12">
                                <div className="form-group">
                                  <input type="submit" value="Добавить чай" className="btn btn-primary" />
                                  <div className="submitting" />
                                </div>
                              </div>
                            </div>
                          </form>
                        </div>
                      </div>
                      <div className="col-md-5 d-flex align-items-stretch">
                        <div id="mymap" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
      <script />
    </Layout>
  );
};
