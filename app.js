const form = document.getElementById('form')
const password = document.getElementById('password'); 
const passwordConfirm = document.getElementById('password-confirm');
const formMessageContainer = document.querySelector('.form-message')
const formMessage = document.getElementById('message'); 

let isValid = false; 
let passwordMatch = false; 

// Form Validation function 
function formValidation() {
    
    isValid = form.checkValidity();

    if(!isValid) {
        formMessage.textContent = 'Fill fields correctly!';
        formMessage.style.color = 'red';
        formMessageContainer.style.borderColor = 'red';
        return;
    }

    if (password.value === passwordConfirm.value) {
        passwordMatch = true; 
        password.style.borderColor = 'lightgreen';
        passwordConfirm.style.borderColor = 'lightgreen';
    } else {
        passwordMatch = false; 
        message.textContent = "Passwords don't match";
        formMessage.style.color = 'red';
        formMessageContainer.style.borderColor = 'red';
        password.style.borderColor = 'red';
        passwordConfirm.style.borderColor = 'red';
    }

    if(isValid && passwordMatch) {
        formMessage.textContent = "Registered!"
        formMessage.style.color = 'lightgreen';
        formMessageContainer.style.borderColor = 'lightgreen';
    }
}

// Collect user details in an object to be stored
function storeData() {
    const user = {
        email: form.email.value,
        username: form.username.value, 
        password: form.password.value, 
    };
    console.log(user);
}

// Call validation function, if data is valid, call data storage function
function processForm(e) {
    e.preventDefault();
    formValidation();
    if(isValid && passwordMatch) {
        storeData();
    }
}

// Event Listener / Submit Event
form.addEventListener('submit', processForm);