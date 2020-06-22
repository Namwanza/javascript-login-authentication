var button = document.querySelector("#button");
var username = document.querySelector("#username");
var password = document.querySelector("#password");
var errors = document.querySelector("#errors");
var success = document.querySelector("#success");

button.addEventListener('click', function() {
    if (username.value === 'admin@gmail.com' && password.value === 'admin') {
        success.value = "logged in successfully !";
    } else {
        errors.value = "Username or Password is incorrect"
    } 
})