const section = document.querySelector('section');
const heading = document.querySelector('h3');
const server = 'https://jsonplaceholder.typicode.com'
const todo1URL = server + '/todos/1';
function createApiURL(path) {
    return server + path;
}

fetch(createApiURL('/todos/1'))
      .then(response => response.json())
      .then(json => console.log(json))

async function getUser(id) {
    const userURL = server + '/users/' + id;
    const user = await fetch(userURL).then(response => response.json());
    return user;
}

async function getToDo(id, callback) {
    const todoURL = createApiURL('/todos/' + id);
    fetch(todoURL)
     .then(response => response.json())
     .then(json => callback(json));
 }
async function printUser(callback) {
    let userTwo = await getUser(2);
    heading.textContent = userTwo.name;
    section.appendChild(callback(userTwo.address));
}

function createAddressBlock(address) {
    const elem = document.createElement('div');
    elem.innerHTML = `<p class='address'>
    ${address.street} </br> ${address.suite} <br>
    ${address.city}</p>`;
    return elem;
}

printUser(createAddressBlock);