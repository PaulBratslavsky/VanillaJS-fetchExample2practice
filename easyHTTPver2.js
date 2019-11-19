console.log('easyHTTPver2');

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


}