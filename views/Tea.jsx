const React = require('react');
const Layout = require('./Layout');

function Tea({
  comments, user, tea, users,
}) {
  return (
    <Layout user={user}>
      <div className="container">
        <div className="headerInfo">Информация о сорте чая</div>
        <div className="containerTeaPage">
          <div className="imgTea">
            <div className="admin-panel_item"><img src={tea.img} alt="pic tea" /></div>
          </div>
          <div className="descriptionTeaAll">
            <div className="descriptionTea">Название</div>
            <div className="itemFont">{tea.name_tea}</div>
            <div className="descriptionTea">Сорт</div>
            <div className="itemFont">{tea.variety}</div>
            <div className="descriptionTea">Место культивации</div>
            <div className="itemFont">{tea.origin_country}</div>
            <div className="descriptionTea">Описание</div>
            <div className="itemFont"><p>{tea.description}</p></div>
          </div>
          <hr />
        </div>
        <div className="headerInfo">Коментарии</div>
        {(user && (
          <form className="comentDiv" id={tea.id}>
            <input className="coment" type="text" name="comment" placeholder="Добавить коментарий" />
            <button type="submit" className="btn btn-amazing">Добавить</button>
          </form>
        ))}
        <div className="comentDivBody">
          <div className="wrap">
            {comments.map((com) => (
              <div className="card">
                <div className="itemIncoment1">{com['User.user_name']}</div>
                <div className="commentText">{com.content}</div>
                <div className="itemIncoment2">{` ${new Date(com.createdAt).getDate()}.${new Date(com.createdAt).getMonth()}.${new Date(com.createdAt).getFullYear()} ${new Date(com.createdAt).getHours()}:${new Date(com.createdAt).getMinutes()}`}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}

module.exports = Tea;
