const newUser = {
    firstName: undefined,
    lastName: undefined,
    email: undefined,
    password: undefined
};


document.getElementById("submitForm").addEventListener('click', validation);

function validation(e) {
    e.preventDefault();
    let check = 0;
    newUser.firstName = document.getElementById("firstName").value;
    newUser.lastName = document.getElementById("lastName").value;
    newUser.email = document.getElementById("email").value;
    newUser.password = document.getElementById("password").value;

    if (newUser.firstName.length < 1) {
        document.getElementById("firstNameError").classList.remove('hidden');
        document.getElementById("firstName").classList.add('error')
    } else {
        document.getElementById("firstNameError").classList.add('hidden');
        document.getElementById("firstName").classList.remove('error');
        check++;
    }

    if (newUser.lastName.length < 1) {
        document.getElementById("lastNameError").classList.remove('hidden');
        document.getElementById("lastName").classList.add('error')
    } else {
        document.getElementById("lastNameError").classList.add('hidden');
        document.getElementById("lastName").classList.remove('error');
        check++;
    }

    if (newUser.password.length < 1) {
        document.getElementById("passwordError").classList.remove('hidden');
        document.getElementById("password").classList.add('error')
    } else {
        document.getElementById("passwordError").classList.add('hidden');
        document.getElementById("password").classList.remove('error');
        check++;
    }

    if (newUser.password.length < 1) {
        document.getElementById("passwordError").classList.remove('hidden');
        document.getElementById("password").classList.add('error')
    } else {
        document.getElementById("passwordError").classList.add('hidden');
        document.getElementById("password").classList.remove('error');
        check++;
    }

    const emailReg = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (emailReg.test(newUser.email) === false) {
        document.getElementById("emailError").classList.remove('hidden');
        document.getElementById("email").classList.add('error')
    } else {
        document.getElementById("emailError").classList.add('hidden');
        document.getElementById("email").classList.remove('error');
        check++;
    }

    if (check = 5) {
        document.getElementById("firstName").value = "";
        document.getElementById("lastName").value = "";
        document.getElementById("email").value = "";
        document.getElementById("password").value = "";
    }
}
