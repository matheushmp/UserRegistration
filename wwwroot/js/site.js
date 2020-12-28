const uri = 'api/User';
let users = [];

function getUsers() {
  fetch(uri)
    .then(response => response.json())
    .then(data => _displayUsers(data))
    .catch(error => console.error('Unable to get Users.', error));
}

function createUserPage(id) {
  const User = users.find(User => User.id === id);
  sessionStorage.setItem("user",JSON.stringify(User));
  window.location.href='showuser.html'

}


function _displayUsers(data) {
  const tBody = document.getElementById('users');
  tBody.innerHTML = '';

  const button = document.createElement('button');

  data.forEach(User => {

    let viewButton = button.cloneNode(false);
    viewButton.innerText = 'Visualizar';
    viewButton.setAttribute('onclick', `createUserPage(${User.id})`);

  //  let editButton = button.cloneNode(false);
  //  editButton.innerText = 'Editar';
 //   editButton.setAttribute('onclick', `displayEditForm(${User.id})`);

  //  let deleteButton = button.cloneNode(false);
   // deleteButton.innerText = 'Deletar';
  //  deleteButton.setAttribute('onclick', `deleteUser(${User.id})`);

    let tr = tBody.insertRow();
    
    let td1 = tr.insertCell(0);
    let textNode1 = document.createTextNode(User.name);
    td1.appendChild(textNode1);
    let td2 = tr.insertCell(1);
    td2.appendChild(viewButton);
  });

  users = data;
}