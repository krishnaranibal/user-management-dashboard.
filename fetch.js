fetch("users.json")
.then(function (response) {
    return response.json();
}).then(function (obj) {
    console.log(obj);
    
}).catch(function(error) {
    console.error('something went wrong with retrieving the people!');
    console.error(error);   
});
    
