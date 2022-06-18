const adminPanel = document.querySelector('.admin-panel');
const adminAddForm = document.querySelector('.contactForm');
const adminPanelList = document.querySelector('.admin-panel_list');
const commentForm = document.querySelector('form.comentDiv');
try {
  adminPanel.addEventListener('click', async (e) => {
    if (e.target.classList.contains('card-tea_btn-delete')) {
      e.preventDefault();
      const responce = await fetch(`/adminpanel/${e.target.id}`, {
        method: 'DELETE',
      });
      e.target.closest('.admin-panel_item').remove();
    }
  });
} catch (e) {}

try {
  adminPanel.addEventListener('click', async (e) => {
    if (e.target.classList.contains('card-tea_btn-edit')) {
      e.preventDefault();
      e.target.closest('.card-tea').classList.toggle('hidden');
      e.target.closest('.admin-panel_item').querySelector('.card-tea-edit').classList.toggle('hidden');
    }
    if (e.target.classList.contains('btn-save')) {
      const inputs = e.target.closest('.admin-panel_item').querySelectorAll('.form-control');
      const responce = await fetch(`/adminpanel/${e.target.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: inputs[0].value,
          sort: inputs[1].value,
          location: inputs[2].value,
          picture: inputs[3].value,
          descr: inputs[4].value,
        }),
      });
      const answerResponse = await responce.text();
      e.target.closest('.admin-panel_item').querySelector('.card-tea').innerHTML = answerResponse;
      e.target.closest('.admin-panel_item').querySelector('.card-tea').classList.toggle('hidden');
      e.target.closest('.card-tea-edit').classList.toggle('hidden');
    }
    if (e.target.classList.contains('btn-cancel')) {
      e.target.closest('.admin-panel_item').querySelector('.card-tea').classList.toggle('hidden');
      e.target.closest('.card-tea-edit').classList.toggle('hidden');
    }
  });
} catch (e) {

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
    document.querySelector('.wrap').insertAdjacentHTML('afterbegin', answerResponse);
  });
} catch (e) {

}
