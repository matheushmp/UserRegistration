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

function searchByCPF() {
    const CPF = document.getElementById('search-by-cpf').value.trim();
    const user = users.find(User => User.cpf === CPF);
    if(user!=null){
        let candidate = [user];
        showUser(candidate);
    } else {
        let error = document.getElementById("error")
        error.innerHTML = 'Nenhum usuário encontrado';
        error.style.display='initial';
        hideTable();
    }

  }
  
  function searchByRG() {
    const RG = document.getElementById('search-by-rg').value.trim();
    const user = users.find(User => User.rg === RG);
    if(user!=null){
        let candidate = [user];
        showUser(candidate);

    } else {
        let error = document.getElementById("error")
        error.innerHTML = 'Nenhum usuário encontrado';
        error.style.display='initial';
        hideTable();
    }

  }
  function searchByName() {
    const name = document.getElementById('search-by-name').value.trim();
    let candidates=[];
    users.forEach(user => {
        if(user.name===name){
            candidates.push(user);
        }
    })
    if(candidates.length!=0){
        showUser(candidates);
    } else {
        let error = document.getElementById("error")
        error.innerHTML = 'Nenhum usuário encontrado';
        error.style.display='initial';
        hideTable();
    }

  }
  function hideTable(){
      document.getElementById('table-user').style.display='none'
  }
  function showUser(candidates) {
    document.getElementById('error').style.display='none';
    const tBody = document.getElementById('user');
    document.getElementById('table-user').style.display='initial';
    tBody.innerHTML = '';
    
    const button = document.createElement('button');
    candidates.forEach(User =>{
        let editButton = button.cloneNode(false);
        editButton.innerText = 'Editar';
        editButton.setAttribute('onclick', `displayEditForm(${User.id})`);
  
    let tr = tBody.insertRow();

    let td1 = tr.insertCell(0);
    let textNode1 = document.createTextNode(User.name);
    td1.appendChild(textNode1);
  
    let td2 = tr.insertCell(1);
    let textNode2 = document.createTextNode(User.cpf);
    td2.appendChild(textNode2);

    let td3 = tr.insertCell(2);
    let textNode3 = document.createTextNode(User.rg);
    td3.appendChild(textNode3);

    let td4 = tr.insertCell(3);
    var dateArray=User.birthDate.split("-");
    let textNode4 = document.createTextNode(dateArray[0]+"-"+dateArray[1]+"-"+dateArray[2].split("T")[0]);
    td4.appendChild(textNode4);

    let td5 = tr.insertCell(4);
    let textNode5 = document.createTextNode(User.motherName);
    td5.appendChild(textNode5);

    let td6 = tr.insertCell(5);
    let textNode6 = document.createTextNode(User.fatherName);
    td6.appendChild(textNode6);

    let td7 = tr.insertCell(6);
    let textNode7 = document.createTextNode(User.registrationDate);
    td7.appendChild(textNode7);    
  })}