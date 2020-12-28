let users =[];
const uri='api/User'

function getUsers() {
    fetch(uri)
      .then(response => response.json())
      .then(data => _displayUsers(data))
      .catch(error => console.error('Unable to get Users.', error));
  }
function _displayUsers(data) {
    users=data;
}

function deleteUserByCPF() {
    const CPF = document.getElementById('delete-by-cpf').value.trim();
    const user = users.find(User => User.cpf === CPF);
    fetch(`${uri}/${user.id}`, {
      method: 'DELETE'
    })
    .then(window.location.href='index.html')
    .catch(error => console.error('Unable to delete User.', error));
  }
  
  function deleteUserByRG() {
    const RG = document.getElementById('delete-by-rg').value.trim();
    const user = users.find(User => User.rg === RG);
    fetch(`${uri}/${user.id}`, {
      method: 'DELETE'
    })
    .then(window.location.href='index.html')
    .catch(error => console.error('Unable to delete User.', error));
  }