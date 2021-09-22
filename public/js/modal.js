let closeModal = document.querySelectorAll('.close')[0];
let openModal = document.querySelectorAll('.cta')[0];
let modal = document.querySelectorAll('.modal')[0];
let modalC = document.querySelectorAll('.modal-container')[0];

openModal.addEventListener('click', function(e){
    e.preventDefault();
    modalC.style.opacity = "1";
    modalC.style.visibility = "visible";
    modal.classList.toggle('modal-close');
});

closeModal.addEventListener('click', function(){
    modal.classList.toggle('modal-close');

    setTimeout(function(){
        modalC.style.opacity = "0";
        modalC.style.visibility = "hidden";
    }, 850);
});

window.addEventListener('click', function(e){
    if (e.target == modalC) {
        modal.classList.toggle('modal-close');

        setTimeout(function(){
            modalC.style.opacity = "0";
            modalC.style.visibility = "hidden";
        }, 850);
    }
});