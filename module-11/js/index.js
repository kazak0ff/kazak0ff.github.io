let baseUrl = "http://fecore.net.ua/rest";
let details = document.querySelector(".detail");

const onClick = (event) => {
  if (event.target.className == "get") {
    debugger
    getUsers();
  } else if (event.target.className == "add") {
    debugger
    addUser(document.getElementById('addName').value, document.getElementById('addScore').value);
  } else if (event.target.className == "update") {
    updateUser(document.getElementById('updateId').value, 
    document.getElementById('updateName').value, 
    document.getElementById('updateScore').value);
  } else if (event.target.className == "remove") {
    removeUser(document.getElementById('removeId').value);
  }
}
document.addEventListener("click", onClick);

function fillDetails(array) {
  debugger
  details.innerHTML = "";
  for (const service of array) {
    debugger
    let detailTitle = document.createElement('p');
    detailTitle.classList.add('details__name');
    detailTitle.textContent = "Details of select Service";
    details.append(detailTitle);
    let keys = Object.keys(service);
    for (const key of keys) {
      debugger
      if (Array.isArray(service[key])) {
        for (const subService of service[key]) {
          let keys = Object.keys(subService);
          for (const key of keys) {
            debugger
            createKeyParamDivs(key, subService);
          }
        }
      }
      createKeyParamDivs(key, service);
    }
  }
}

function createKeyParamDivs(key, service) {
  debugger
  let keyParam = document.createElement('div');
  keyParam.classList.add('info-table__details__params__bold')
  keyParam.textContent = key;
  let valueParam = document.createElement('div');
  valueParam.classList.add('info-table__details__params')
  valueParam.textContent = service[key];
  details.append(keyParam);
  details.append(valueParam);
}

function getUsers() {
  debugger
  fetch('http://fecore.net.ua/rest', {
    method: 'get',
    headers: new Headers({
      'Content-Type': 'application/json',
      'X-Custom-Header': 'custom value'
    })
  })
    .then(dataWrappedByPromise => dataWrappedByPromise.json())
    .then(data => {
      debugger
      futureArray = JSON.parse(JSON.stringify(data));
      fillDetails(futureArray);
    })
}

function addUser(name, score) {
  debugger
  fetch(`${baseUrl}/?action=1&name=${name}&score=${score}`, {
    method: "post",
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'mode': 'no-cors'
    }
  })
    .then(dataWrappedByPromise => dataWrappedByPromise.json())
    .then(data => {
      futureArray = JSON.parse(JSON.stringify(data));
      fillDetails(futureArray);
    })
}


function updateUser(id, name, score) {
  fetch(`${baseUrl}/?action=2&id=${id}&name=${name}&score=${score}`, {
    method: "put",
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'mode': 'no-cors'
    }
  })
    .then(dataWrappedByPromise => dataWrappedByPromise.json())
    .then(data => {
      futureArray = JSON.parse(JSON.stringify(data));
      fillDetails(futureArray);
    })
}

function removeUser(id) {
  fetch(`${baseUrl}/?action=3&id=${id}`, {
    method: "delete",
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'mode': 'no-cors'
    }
  })
    .then(dataWrappedByPromise => dataWrappedByPromise.json())
    .then(data => {
      futureArray = JSON.parse(JSON.stringify(data));
      fillDetails(futureArray);
    })
}