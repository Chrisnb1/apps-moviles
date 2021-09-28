// Variables
const cards = $("#cards");
const items = $("#items");
const addButtom = $(".addCart");

// Lista del carrito
let cart = [];

// Jquery evento agregar a carrito/botones
$(document).ready(function() {

    addButtom.click(addButtomCart);
    cleanButtom.click(cleanCart);
});

// Click en boton "añadir a carrito"
function addButtomCart() {
    //Agrego un clase para añadir y quitar los efectos al hacer click
    var addClass = $(this).hasClass("test");

    //Si existe, quito clases y efectos
    if (addClass) {
        $(this).removeClass("test");
        $(this).parent("div").css("background-color", "");
        $(this).siblings("img").css("opacity", 1);
        $(this).siblings("h1").css("opacity", 1);
        $(this).siblings("p").css("opacity", 1);
        //$(this).siblings("button").css("opacity", 1);
        $(this).css("opacity", 1);
    } else {
        //Sino, agrego clase y efectos
        $(this).addClass("test");
        $(this).parent("div").css("background-color", "	ghostwhite");
        $(this).siblings("img").css("opacity", 0.4);
        $(this).siblings("h1").css("opacity", 0.4);
        $(this).siblings("p").css("opacity", 0.4);
        //$(this).siblings("button").css("opacity", 0.4);
        $(this).css("opacity", 0.4);
    }

    //Accion dentro del modal
    addActionCart(this);
}

// Añade item al carrito
function addActionCart(item) {
    let id = $(item).attr("data-id");

    // var long = cart.longht;

    // Si existe, es decir, si se clickea nuevamente en el producto
    if (exists(id)) {
        console.log("Ya Existe");
        cart = notDuplicate(cart, id);
        eliminateItemCart(id);
    } else if (!exists(id)) { // sino
        console.log("Nuevo producto");
        product = createProduct(item);
        cart.push(product);
        setCart(product);
    }

    console.log(cart);


}

// Verifica si existe el item en el carrito
function exists(id) {
    let num = 0;
    // debugger
    cart.forEach((product) => {
        if (product.id === id) {
            num = 1;
        }
    });

    return num === 1;
}

// Discrimina el item por id
function notDuplicate(array, id) {
    return array.filter(function(product) {
        return product.id !== id;
    });
}

// Crea el objeto producto referido al item clickeado
function createProduct(item) {
    let id = $(item).attr("data-id");
    let parent = $(item).parent("div");
    let product = {
        img: parent.find("img").attr("src"),
        title: parent.find("h1").text(),
        precio: parent.find("p").text(),
        id: id,
    };

    return product;
}

// Muestra en el carrito
function setCart(product) {

    if (searchItemCart(product.id)) {
        console.log("Entro aca");
        return;
    } else {
        var newRow =
            `<tr id=${product.id}> ` +
            "<td>" +
            '<img src=" ' + product.img + '" width="75px" height="75px"/>' +
            "</td>" +
            "<td>" +
            product.title +
            "</td>" +
            "<td>" +
            product.precio +
            "</td>" +
            "</tr>";

        $(newRow).appendTo(items);
        calculateTotal();
    }

}

// Busca item en el carrito (ventana modal)
function searchItemCart(id) {
    return $('tr#' + id).lenght;
}

// Elimina item en el carrito (ventana modal)
function eliminateItemCart(id) {
    $('tr#' + id).remove();
    calculateTotal();
}

// Calcula el precio total
function calculateTotal() {
    let total = 0;
    cart.forEach((product) => {
        price = product.precio.replace("$", "");
        total += parseInt(price);
    });

    $('#total').text('$ ' + total);
    return total;
}
