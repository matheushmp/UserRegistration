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

function addUser() {
    const addNameTextbox = document.getElementById('add-name');
    const addCPFTextbox = document.getElementById('add-cpf');
    const addRGTextbox = document.getElementById('add-rg');
    const addBirthDateTextbox = document.getElementById('add-birthdate');
    const addMotherNameTextbox = document.getElementById('add-mothername');
    const addFatherNameTextbox = document.getElementById('add-fathername');
    const User = {
      name: addNameTextbox.value.trim(),
      cpf: addCPFTextbox.value.trim(),
      rg: addRGTextbox.value.trim(),
      birthDate: addBirthDateTextbox.value.trim(),
      motherName: addMotherNameTextbox.value.trim(),
      fatherName: addFatherNameTextbox.value.trim(),
      registrationDate: new Date()
    };
    const copy = users.find(User => User.cpf===addCPFTextbox.value.trim());
    if(copy!=null){
      const error = document.getElementById('Error');
      error.innerText="CPF já cadastrado";
      return null;
    };
    copy2 = users.find(User => User.rg===addRGTextbox.value.trim());
    if(copy2!=null){
      const error = document.getElementById('Error');
      error.innerText="RG já cadastrado";
      return null;
    };
    fetch(uri, {
      
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(User)
    })
      .then(response => response.json())
      .then(() => {
        addNameTextbox.value = '';
        addCPFTextbox.value='';
        addRGTextbox.value='';
        addBirthDateTextbox.value=null;
        addMotherNameTextbox.value='';
        addFatherNameTextbox.value='';
        document.getElementById('Error').innerHTML='';
        window.location.href='index.html'
      })
      .catch(error => console.error('Não foi possível adicionar o usuário', error));
  
  }