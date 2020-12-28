const uri = 'api/User';
User = JSON.parse(sessionStorage.getItem("user"));
registrationDate = User.registrationDate;
function getUser() {
  fetch(uri)
    .then(response => response.json())
    .then(_displayUser(User))
    .catch(error => console.error('Unable to get Users.', error));
}
function _displayUser(User) {
  const tBody = document.getElementById('user');
  tBody.innerHTML = '';

  const button = document.createElement('button');

  let editButton = button.cloneNode(false);
  editButton.innerText = 'Editar';
  editButton.setAttribute('onclick', `displayEditForm(${User.id})`);

  let tr1 = tBody.insertRow();
  let td1 = tr1.insertCell(0);
  let textNode1 = document.createTextNode("Nome:");
  td1.appendChild(textNode1);

  let td2 = tr1.insertCell(1);
  let textNode2 = document.createTextNode(User.name);
  td2.appendChild(textNode2);

  let tr2 = tBody.insertRow();
  let td3 = tr2.insertCell(0);
  let textNode3 = document.createTextNode("CPF:");
  td3.appendChild(textNode3);

  let td4 = tr2.insertCell(1);
  let textNode4 = document.createTextNode(User.cpf);
  td4.appendChild(textNode4);

  let tr3 = tBody.insertRow();
  let td5 = tr3.insertCell(0);
  let textNode5 = document.createTextNode("RG:");
  td5.appendChild(textNode5);

  let td6 = tr3.insertCell(1);
  let textNode6 = document.createTextNode(User.rg);
  td6.appendChild(textNode6);

  let tr4 = tBody.insertRow();
  let td7 = tr4.insertCell(0);
  let textNode7 = document.createTextNode("Data de nascimento:");
  td7.appendChild(textNode7);

  let td8 = tr4.insertCell(1);
  var dateArray=User.birthDate.split("-");
  let textNode8 = document.createTextNode(dateArray[0]+"-"+dateArray[1]+"-"+dateArray[2].split("T")[0]);
  td8.appendChild(textNode8);

  let tr5 = tBody.insertRow();
  let td9 = tr5.insertCell(0);
  let textNode9 = document.createTextNode("Nome da mãe:");
  td9.appendChild(textNode9);

  let td10 = tr5.insertCell(1);
  let textNode10 = document.createTextNode(User.motherName);
  td10.appendChild(textNode10);

  let tr6 = tBody.insertRow();
  let td11 = tr6.insertCell(0);
  let textNode11 = document.createTextNode("Nome do pai:");
  td11.appendChild(textNode11);

  let td12 = tr6.insertCell(1);
  let textNode12 = document.createTextNode(User.fatherName);
  td12.appendChild(textNode12);

  let tr7 = tBody.insertRow();
  let td13 = tr7.insertCell(0);
  let textNode13 = document.createTextNode("Data de registro");
  td13.appendChild(textNode13);

  let td14 = tr7.insertCell(1);
  let textNode14 = document.createTextNode(User.registrationDate);
  td14.appendChild(textNode14);

  let tr8 = tBody.insertRow();
  let td15 = tr8.insertCell(0);
  td15.appendChild(editButton);
}

function displayEditForm() {
  document.getElementById('edit-name').value = User.name;
  document.getElementById('edit-id').value = User.id;
  document.getElementById('edit-cpf').value = User.cpf;
  document.getElementById('edit-rg').value = User.rg;
  var dateArray=User.birthDate.split("-");
  document.getElementById('edit-birthdate').value = dateArray[0]+"-"+dateArray[1]+"-"+dateArray[2].split("T")[0];
  document.getElementById('edit-mothername').value = User.motherName;
  document.getElementById('edit-fathername').value = User.fatherName;
  document.getElementById('editForm').style.display = 'block';
}

function updateUser() {
  const UserId = document.getElementById('edit-id').value;
  const User = {
    id: parseInt(UserId, 10),
    name: document.getElementById('edit-name').value.trim(),
    cpf: document.getElementById('edit-cpf').value.trim(),
    rg: document.getElementById('edit-rg').value.trim(),
    birthDate: document.getElementById('edit-birthdate').value.trim(),
    motherName: document.getElementById('edit-mothername').value.trim(),
    fatherName: document.getElementById('edit-fathername').value.trim(),
    registrationDate: registrationDate
  };
  this.User=User
  fetch(`${uri}/${UserId}`, {
    method: 'PUT',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(User)
  })
  
  .then(() => getUser(User))
  .catch(error => console.error('Unable to update User.', error));
  sessionStorage.setItem("user",JSON.stringify(User));
  closeInput();

  return false;
}

function closeInput() {
  div = document.getElementById('editForm').style.display = 'none';
}
