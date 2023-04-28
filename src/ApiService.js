import Connection from "./Connection";

function ApiService(path, params, responseCallback){

    const connection = Connection();

    fetch(connection + path)
        .then(response => response.json())
        .then(data => {
            responseCallback(data);
        })
        .catch((error) =>{
            console.log(error.message);
        });

}

export default ApiService;