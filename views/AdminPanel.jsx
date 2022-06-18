const React = require('react');
const Layout = require('./Layout');

module.exports = function AdminPanel({ user, teas, comments }) {
  return (
    <Layout user={user}>
      <div className="admin-panel">
        <h2 className="admin-panel_title">Личный кабинет</h2>
        {user.admin ? (
          <>
            <ul className="admin-panel_list">
              {teas.map((tea) => (
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
              ))}
            </ul>
            <section className="ftco-section">
              <div className="container">
                <div className="row justify-content-center">
                  <div className="col-md-12">
                    <div className="wrapper">
                      <div className="row no-gutters mb-5">
                        <div className="col-md-12">
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
                                <div className="col-md-12 mb-4">
                                  <div className="form-group">
                                    <label className="label" htmlFor="descr">Описание</label>
                                    <textarea name="descr" className="form-control" id="descr" cols="30" rows="4" placeholder="Описание чая" />
                                  </div>
                                </div>
                                <div className="col-md-12">
                                  <div className="form-group d-flex">
                                    <button type="submit" className="btn-amazing">Добавить чай</button>
                                  </div>
                                </div>
                              </div>
                            </form>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </>
        ) : (
          <>
            <h3 className="my_comments">Мои коментарии:</h3>
            <div className="comentDivBody">
              <div className="wrap">
                {comments.map((comment) => (
                  <div className="card">
                    <div className="itemIncoment1">{user.user_name}</div>
                    <div className="commentText">{comment.content}</div>
                    <div className="itemIncoment2">{` ${new Date(comment.createdAt).getDate()}.${new Date(comment.createdAt).getMonth()}.${new Date(comment.createdAt).getFullYear()} ${new Date(comment.createdAt).getHours()}:${new Date(comment.createdAt).getMinutes()}`}</div>
                  </div>
                ))}
              </div>
            </div>
          </>
        )}
      </div>
    </Layout>
  );
};
