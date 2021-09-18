const form = document.getElementById('form');
const nom = document.getElementById('name');
const surname = document.getElementById('surname');
const birth = document.getElementById('birth');
const gender = document.getElementById('gender');
const rating = document.getElementById('rating');
const email = document.getElementById('email');

const inputs = document.querySelectorAll('#form input');
const selects = document.querySelectorAll('#form select');

const btnCancel = document.getElementById('btn-cancel');
btnCancel.addEventListener('click', () =>{
    if (window.confirm("Desea volver a la pagina anterior?")) {
        window.open("index.html", "Thanks for Visiting!");
    }
});

inputs.forEach((input) =>{
    input.addEventListener('keyup', checkInputs);
    input.addEventListener('blur', checkInputs);
});

selects.forEach((select) =>{
    select.addEventListener('blur', checkInputs);
});

form.addEventListener('submit', e => {
    e.preventDefault();
    let isValid = checkInputs();
    sendForm(isValid);
    
});

function checkInputs(){
    const nameValue = nom.value.trim();
    const surnameValue = surname.value.trim();
    const birthValue = birth.value.trim();
    const genderValue = gender.value.trim();
    const emailValue = email.value.trim();
    const ratingValue = rating.value.trim();
    var valid = false;
    if (nameValue === '') {
        valid = setErrorFor(nom, 'El nombre no puede quedar vacio.');
        
    }else if (!onlyLetters(nameValue)) {
        valid = setErrorFor(nom, 'No se permiten numeros, ni caracteres especiales.');
        
    }else{
        valid = setSuccessFor(nom);
        
    }

    if (surnameValue === '') {
        valid = setErrorFor(surname, 'El apellido no puede quedar vacio.');
    }else if (!onlyLetters(surnameValue)) {
        valid = setErrorFor(surname, 'No se permiten numeros, ni caracteres especiales.');
    }
    else{
        valid = setSuccessFor(surname);
    }

    if (birthValue === '') {
        valid = setErrorFor(birth, 'La fecha de nacimiento no puede quedar vacia.');
    }else{
        valid = setSuccessFor(birth);
    }

    if (genderValue === '1') {
        valid = setErrorFor(gender, 'El sexo no puede quedar vacio');
    }
    else{
        valid = setSuccessFor(gender);
    }

    if (ratingValue === '1') {
        valid = setErrorFor(rating, 'Debe elegir una opcion.');
    }else{
        valid = setSuccessFor(rating);
    }

    if (emailValue === '') {
        valid = setErrorFor(email, 'El mail no puede quedar vacio.');
    }else if (!isEmail(emailValue)) {
        valid = setErrorFor(email, 'No ingreso un mail valido.');
    }else{
        valid = setSuccessFor(email);
    }
    return valid;
}

function setErrorFor(input, message){
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    formControl.className = 'form-control error';
    small.innerText = message;
    return false;
}

function setSuccessFor(input){
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
    return true;
}

function onlyLetters(input){
    return /^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(input);
}

function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}

function sendForm(isValid){
    if (isValid) {
        alert(`${nom}`);
    }
}


