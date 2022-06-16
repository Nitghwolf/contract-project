const adminPanel = document.querySelector('.admin-panel');
const adminAddForm = document.querySelector('.contactForm');
const adminPanelList = document.querySelector('.admin-panel_list');
const commentForm = document.querySelector('form.comentDiv');
try {
  adminPanel.addEventListener('click', async (e) => {
    if (e.target.className === 'card-tea_btn-delete') {
      e.preventDefault();
      const responce = await fetch(`/adminpanel/${e.target.id}`, {
        method: 'DELETE',
      });
      e.target.closest('.admin-panel_item').remove();
    }
  });
} catch (e) {
  console.error(e);
}

try {
  adminAddForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const responce = await fetch('/adminpanel', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: e.target.name.value,
        sort: e.target.sort.value,
        location: e.target.location.value,
        picture: e.target.picture.value,
        descr: e.target.descr.value,
      }),
    });
    e.target.reset();
    const answerResponse = await responce.text();
    adminPanelList.insertAdjacentHTML('beforeend', answerResponse);
  });
} catch (e) {
  console.error(e);
}
try {
  commentForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const responce = await fetch(`/tea/${e.target.id}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        comment: e.target.comment.value,
      }),
    });
    e.target.reset();
    const answerResponse = await responce.text();
    // console.log(answerResponse, 'TEST');
    document.querySelector('.wrap').insertAdjacentHTML('afterbegin', answerResponse);
  });
} catch (e) {
  console.error(e);
}
console.log(document.querySelector('.wrap'));
