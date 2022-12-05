let email = document.getElementById("email")
let error_text=document.getElementById("error_text")

document.getElementById("submit").addEventListener('click', validation);
const emailReg = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

function validation(e) {
    e.preventDefault();
    if (emailReg.test(email.value) === false) {
        error_text.classList.remove('hidden');
        email.classList.add('error');
    } else {
        error_text.classList.add('hidden');
        email.classList.remove('error');
    }

}


