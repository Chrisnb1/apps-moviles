const form = document.getElementById('form');
const nom = document.getElementById('name');
const surname = document.getElementById('surname');
const birth = document.getElementById('birth');
const gender = document.getElementById('gender');
const rating = document.getElementById('rating');
const email = document.getElementById('email');

form.addEventListener('submit', e => {
    e.preventDefault();
    checkInputs();
});

function checkInputs(){
    const nameValue = nom.value.trim();
    const surnameValue = surname.value.trim();
    const birthValue = birth.value.trim();
    const genderValue = gender.value.trim();
    const emailValue = email.value.trim();
    const ratingValue = rating.value.trim();

    if (nameValue === '') {
        setErrorFor(nom, 'El nombre no puede quedar vacio.');
    }else if (!onlyLetters(nameValue)) {
        setErrorFor(nom, 'No se permiten numeros, ni caracteres especiales.');
    }else{
        setSuccessFor(nom);
    }

    if (surnameValue === '') {
        setErrorFor(surname, 'El apellido no puede quedar vacio.');
    }else if (!onlyLetters(surnameValue)) {
        setErrorFor(surname, 'No se permiten numeros, ni caracteres especiales.');
    }
    else{
        setSuccessFor(surname);
    }

    if (birthValue === '') {
        setErrorFor(birth, 'La fecha de nacimiento no puede quedar vacia.');
    }else{
        setSuccessFor(birth);
    }

    if (genderValue === '1') {
        setErrorFor(gender, 'El sexo no puede quedar vacio');
    }
    else{
        setSuccessFor(gender);
    }

    if (ratingValue === '1') {
        setErrorFor(rating, 'Debe elegir una opcion.');
    }else{
        setSuccessFor(rating);
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

function onlyLetters(input){
    return /^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(input);
}

function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}


