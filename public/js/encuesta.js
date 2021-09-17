const form = document.getElementById('form');
const nom = document.getElementById('name');
const surname = document.getElementById('surname');
const birth = document.getElementById('birth');
// gender 
// rating
const email = document.getElementById('email');


form.addEventListener('submit', e => {
    e.preventDefault();
    checkInputs();
});

function checkInputs(){
    const nameValue = nom.value.trim();
    const surnameValue = surname.value.trim();
    const emailValue = email.value.trim();

    if (nameValue === '') {
        setErrorFor(nom, 'El nombre no puede quedar vacio.');
    }else{
        setSuccessFor(nom);
    }

    if (surnameValue === '') {
        setErrorFor(surname, 'El apellido no puede quedar vacio.');
    }else{
        setSuccessFor(surname);
    }

    if (emailValue === '') {
        setErrorFor(email, 'El mail no puede quedar vacio.');
    }else if (!isEmail(emailValue)) {
        setErrorFor(email, 'No ingreso un mail valido.');
    }else{
        setSuccessFor(email);
    }
}

function setErrorFor(input, message){
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    formControl.className = 'form-control error';
    small.innerText = message;
}

function setSuccessFor(input){
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}

function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}


