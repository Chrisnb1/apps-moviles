// Archivo JavaScript para la implementacion del carrito de compras

const cards = document.getElementById('cards');
const items = document.getElementById('items');
const footerTable = document.getElementById('footer');
const templateFooter = document.getElementById('template-footer').content;
const templateCarrito = document.getElementById('template-carrito').content;

/*
const cards = $('#cards');
const items = $('#items');
const footerTable = $('#footer');
const templateFooter = $('#template-footer').content;
const templateCarrito = $('#template-carrito').content;
*/
const fragment = document.createDocumentFragment();

let carrito = {}

// Eventos con jquery
/*
$(document).ready(function(){
    cards.click(e => { addCarrito(e)});
    items.click(e => { btnAumentarDisminuir(e)});
});
*/

// eventos
cards.addEventListener('click', e => { addCarrito(e) });
items.addEventListener('click', e => { btnAumentarDisminuir(e) });

// Agregar al carrito
const addCarrito = e => {
    if (e.target.classList.contains('addCarrito')) {
        setCarrito(e.target.parentElement);
    }
    e.stopPropagation();
}

const setCarrito = item => {
    const producto = {
        title: item.querySelector('.description').textContent,
        precio: item.querySelector('.prc').textContent,
        id: item.querySelector('.addCarrito').dataset.id,
        cantidad: 1
    }
    console.log(producto)
    if (carrito.hasOwnProperty(producto.id)) {
        producto.cantidad = carrito[producto.id].cantidad + 1
    }
    carrito[producto.id] = {...producto };

    pintarCarrito();
}

const pintarCarrito = () => {
    items.innerHTML = '';
    Object.values(carrito).forEach(producto => {
        //$('#template-carrito td').eq(0).textContent = producto.title;
        //$('#template-carrito td').eq(1).textContent = producto.title;
        //$('#template-carrito #precioTotal').textContent = producto.precio * producto.cantidad;
        templateCarrito.querySelectorAll('td')[0].textContent = producto.title;
        templateCarrito.querySelectorAll('td')[1].textContent = producto.cantidad;
        templateCarrito.querySelector('#precioTotal').textContent = producto.precio * producto.cantidad;

        // Botones
        //$('#template-carrito .btn-add').dataset.id = producto.id;
        //$('#template-carrito .btn-remove').dataset.id = producto.id;

        templateCarrito.querySelector('.btn-add').dataset.id = producto.id;
        templateCarrito.querySelector('.btn-remove').dataset.id = producto.id;

        const clone = templateCarrito.cloneNode(true);
        fragment.appendChild(clone);
    });
    items.appendChild(fragment);

    pintarFooter();
}

const pintarFooter = () => {
    footerTable.innerHTML = '';

    if (Object.keys(carrito).length === 0) {
        footer.innerHTML = `
        <th scope="row" colspan="5">Carrito vacío - comience a comprar! js</th>
        `
        return
    }

    // Sumar cantidad y sumar totales 
    const nCantidad = Object.values(carrito).reduce((acc, { cantidad }) => acc + cantidad, 0);
    const nPrecio = Object.values(carrito).reduce((acc, { cantidad, precio }) => acc + cantidad * precio, 0);

    templateFooter.querySelectorAll('td')[0].textContent = nCantidad;
    templateFooter.querySelector('span').textContent = nPrecio;

    const clone = templateFooter.cloneNode(true);
    fragment.appendChild(clone);

    footerTable.appendChild(fragment);

    /*const vaciarTodo = $('#vaciar-carrito');
    vaciarTodo.click(function(){
        carrito = {};
        pintarCarrito();
    });*/

    const vaciarTodo = document.getElementById('vaciar-carrito');
    vaciarTodo.addEventListener('click', () => {
        carrito = {};
        pintarCarrito();
    })

}

const btnAumentarDisminuir = e => {
    if (e.target.classList.contains('btn-add')) {
        const producto = carrito[e.target.dataset.id];
        producto.cantidad++;
        carrito[e.target.dataset.id] = {...producto }
        pintarCarrito();
    }

    if (e.target.classList.contains('btn-remove')) {
        const producto = carrito[e.target.dataset.id];
        producto.cantidad--;
        if (producto.cantidad === 0) {
            delete carrito[e.target.dataset.id];
        } else {
            carrito[e.target.dataset.id] = {...producto }
        }
        pintarCarrito();
    }
    e.stopPropagation();
}


// Jquery evento agregar a carrito/botones
$(document).ready(function() {

    // Click en boton "añadir a carrito"
    $('.addCarrito').click(function(e) {
        e.preventDefault();

        //Agrego un clase para añadir y quitar los efectos al hacer click
        var addClass = $(this).hasClass('test');

        //Si existe, quito clases y efectos
        if (addClass) {
            $(this).removeClass('test');
            $(this).parent('div').css('background-color', '');
            $(this).siblings('img').css('opacity', 1);
            $(this).siblings('h1').css('opacity', 1);
            $(this).siblings('p').css('opacity', 1);
            $(this).css('opacity', 1);
        } else { //Sino, agrego clase y efectos
            $(this).addClass('test');
            $(this).parent('div').css('background-color', '	ghostwhite');
            $(this).siblings('img').css('opacity', 0.4);
            $(this).siblings('h1').css('opacity', 0.4);
            $(this).siblings('p').css('opacity', 0.4);
            $(this).css('opacity', 0.4);
        }
    })
})
