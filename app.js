console.log('USING FETCH');

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

