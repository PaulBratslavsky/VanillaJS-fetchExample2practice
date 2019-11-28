// console.log('USING FETCH');

const http = new easyHTTP();
console.log(http);

const rootUrl = 'https://jsonplaceholder.typicode.com/';
const usersUrl = 'users';

/*********************************
    EVENT LISTENERS
*********************************/
document.getElementById('getUsers')
.addEventListener('click', () => {
    getUsers( setUrl(rootUrl, usersUrl) );
});

document.getElementById('send-form')
.addEventListener('click', (e) => {
    e.preventDefault();
    // GET DATA
    let data = {};

    const name =     document.getElementById('name').value;
    const username = document.getElementById('username').value;
    const email =    document.getElementById('email').value;  
    
    data = { name, username, email };

    // SEND DATA
    addUser(setUrl(rootUrl, usersUrl), data);
    
    // RESET INPUT FIELDS
    clearInput();

    
});

/*********************************
    HTTP API CALL FUNCTIONS
*********************************/

// GET USERS FUNCTION
function getUsers(url) {
    http.get(url)
    .then( result => {
        console.log(result, "FROM RESULT"); 
        showUsers(result);
    })
    .catch( error => console.error(error, "DANGER"));
}

// POST USER FUNCTION
function addUser(url, data) {
    http.post(url, data)
    .then(data => console.log(data, "CONFIRM"))
    .catch(error => console.error(error, "From Error"));
    
    console.log(url, data, 'User Added');
}

// PUT USER FUNCTION 
function updateUser(url, data) {
    http.put(url, data)
    .then(data => console.log(data, "CONFIRM"))
    .catch(error => console.error(error, "From Error"));
    
    console.log(url, data, 'USER Updated');
}

// updateUser('https://jsonplaceholder.typicode.com/users/10', {name: 'test', username: 'test', email: 'test'});

// DELETE USER FUNCTION 
function deleteUser(url) {
    console.log(url);
    http.delete(url)
        .then( result => console.log(result, "WHERE"))
        .catch( error => console.error(error, "From Error"));
}

deleteUser('https://jsonplaceholder.typicode.com/users/10');



/*********************************
    HELPER FUCTIONS
*********************************/

// Creates URL string
function setUrl(rootURL, modifyer) {
    return `${rootURL}${modifyer}`;
}

// Displays users to output
function showUsers(users) {
    let output = '';

    users.forEach( (user) => {
        console.log(user.name);
        output += `<li class="ui list"><i class="users icon"></i> <span>${user.name}</span></li>`;
    });

    document.getElementById('output').innerHTML = output;
}

function clearInput() {
    document.getElementById('name').value = '';
    document.getElementById('username').value = '';
    document.getElementById('email').value = '';
}
