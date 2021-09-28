$(document).ready(function() {

    // Click en icono del "carrito"
    $('.cta').click(function(e) {
        e.preventDefault();
        $('.modal-container').css({
            "opacity": "1",
            "visibility": "visible"
        });
        $('.modal').toggleClass('modal-close');
    });

    $('.close').click(function() {
        $('.modal').toggleClass('modal-close');
        setTimeout(function() {
            $('.modal-container').css({
                "opacity": "0",
                "visibility": "hidden"
            })
        }, 850);
    });
});
