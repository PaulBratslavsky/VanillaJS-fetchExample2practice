// console.log('easyHTTPver2');

class easyHTTP {

    // Make http get request
    get(url) {
        // wrap get in promise
        return new Promise((resolve, reject) => {
            fetch(url)
            .then(result => result.json())
            .then( data => resolve(data))
            .catch( error => reject(error));
        });
    }

    // Make http POST request
    post(url, data) {
        return new Promise((resolve, reject) => {
            // when adding data need to add object with stuff
            fetch(url, {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(data)
            })
            .then(result => result.json())
            .then( data => resolve(data))
            .catch( error => reject(error));
        });
    }

    // Make http POST request
    put(url, data) {
        return new Promise((resolve, reject) => {
            fetch(url, {
                method: 'PUT',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(data)
            })
            .then(result => result.json())
            .then( data => resolve(data))
            .catch( error => reject(error));
        });
    }

    // Make http DELETE request
    delete(url) {
        return new Promise( (resolve, reject) => {
            fetch(url, {
                method: 'DELETE',
                headers: {
                    'Content-type': 'application/json'
                }
            })
            .then(result => result.json())
            .then( () => { 
                resolve('USER DELETED');
            })
            .catch( error => reject(error));
        })
        
    }

}

