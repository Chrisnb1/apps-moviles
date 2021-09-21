// formulario
const form = document.getElementById("form");

// Campos
const nom = document.getElementById("name");
const surname = document.getElementById("surname");
const birth = document.getElementById("birth");
const gender = document.getElementById("gender");
const rating = document.getElementById("rating");
const email = document.getElementById("email");
const comment = document.getElementById("comment");

// Botones
const btnSend = document.getElementById("btn-send");
const btnCancel = document.getElementById("btn-cancel");
const btnReset = document.getElementById("btn-reset");

// Eventos
eventListeners();

function eventListeners() {
    //Inicio de app
    document.addEventListener("DOMContentLoaded", startApp);

    // Campos del formulario
    nom.addEventListener("blur", validate);
    surname.addEventListener("blur", validate);
    birth.addEventListener("blur", validate);
    gender.addEventListener("blur", validate);
    rating.addEventListener("blur", validate);
    email.addEventListener("blur", validate);
    comment.addEventListener("blur", validate);

    // Boton enviar
    btnSend.addEventListener("click", sendForm);

    // Boton cancelar
    btnCancel.addEventListener("click", cancelForm);

    // Boton reestrablecer
    btnReset.addEventListener("click", resetForm);
}

//Funciones
function startApp() {
    //deshabilitar el envio
    btnSend.disabled = true;
}

//Valida que el campo no este vacio
function validate() {
    //Se valida la longitud del texto y que no este vacio
    validateLong(this);

    // Lista de errores
    let mistakes = document.querySelectorAll(".error");

    // habilitamos el boton cuando esten todos los campos llenos
    if (
        nom.value !== "" &&
        surname.value !== "" &&
        birth.value !== "" &&
        gender.value !== "" &&
        rating.value !== "" &&
        email.value !== "" &&
        comment.value !== ""
    ) {
        if (mistakes.length === 0) {
            btnSend.disabled = false;
        }
    }
}

// Verifica la longitud del texto en los campos
function validateLong(input) {
    if (input.value.length > 0) {
        //Validar solo carácteres
        if (
            input.name === "name" ||
            input.name === "surname" ||
            input.name === "comment"
        ) {
            validateCharacter(input);
        } else if (input.name === "birth" || input.name === "gender" || input.name === "rating") { //Validar solo opciones
            validateOption(input);
        } else if (input.name === "email") { //Validar solo email
            validateEmail(input);
        }
    } else {
        setError(input, "campo vacio invalido");
        input.classList.add("error");
    }
}

// Verifica los carácteres
function validateCharacter(input) {
    let message = input.value;

    if (!onlyLetters(message)) {
        setError(input, "Carácteres inválidos.");
        input.classList.add("error");
    } else {
        setSuccess(input);
        input.classList.remove("error");
    }
}

// Verifica las opciones
function validateOption(input) {
    let message = input.value;

    if (message === "1" || message === "") {
        setError(input, "Debe elegir una opción");
    } else {
        setSuccess(input);
        input.classList.remove("error");
    }
}

// Verifica que el email sea correcto
function validateEmail(input) {
    let message = input.value;

    if (!isEmail(message)) {
        setError(email, "No ingreso un email valido.");
    } else {
        setSuccess(input);
        input.classList.remove("error");
    }
}

// Se envia el formulario
function sendForm(e) {
    e.preventDefault();
    swal(
        "Se envio el formulario",
        `
    Nombre: ${nom.value}
    \n Apellido: ${surname.value}
    \n Fecha de nacimiento: ${birth.value}
    \n Sexo: ${gender.value}
    \n Valoracion de la pagina: ${rating.value}
    \n Email: ${email.value}
    \n Comentario: ${comment.value}
        `,
        "success"
    ).then(() => {
        backPage("index.html");
    });
}

// Cancela el formulario
function cancelForm(e) {
    e.preventDefault();
    swal({
        title: "Cancelar",
        text: "Desea volver a la pagina anterior?",
        icon: "warning",
        buttons: { yes: "Si", no: "No" },
    }).then((value) => {
        if (value === "yes") {
            backPage("index.html");
        }
    });
}

// Mostrar error
function setError(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector("small");
    formControl.className = "form-control error";
    small.innerText = message;
    return false;
}

// Mostrar correcto
function setSuccess(input) {
    const formControl = input.parentElement;
    formControl.className = "form-control success";
    return true;
}

//Resetea el formulario
function resetForm(e) {
    e.preventDefault();
    form.reset();
    btnSend.disabled = true;
}

// Vuelve a la pagina anterior
function backPage(route) {
    window.location.href = route;
}

// Solo letras
function onlyLetters(input) {
    return /^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(input);
}

// Solo Email
function isEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
        email
    );
}
