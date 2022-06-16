const React = require('react');
const Layout = require('./Layout');


function Tea({ comment }) {
  return (
 <Layout>
            
   <div class="card" style="width: 18rem;">
    <div class="card-body">
        <h5 class="Информация о чае">Card title</h5>
        <p class="card-text">Информация о чае. Описание.</p>
  </div>
  </div>       
{/* вывод коментов */}
      <div className="comments">
          {comment.map((comment) => (
            <Сomment key={comment.id} comment={comment} />
          ))}
      </div>   

{/* форма для ввода комента */}
    <form method="POST" action="input comment">
        <div className="mb-3">
          <label htmlFor="name-input" className="form-label">Name</label>
          <input type="text" className="form-control" id="name-input" name="name" />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
          <input type="password" className="form-control" id="exampleInputPassword1" name="password" />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
    </form>      
      
</Layout>
  );
}

module.exports = Tea;