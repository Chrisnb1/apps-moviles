const urlProducts = "https://api.json-generator.com/templates/hjdeGyXd8i95/data?access_token=lbt08h6xyc66l4romj9whfhybyqi92ovxt4f11qo";

const articleFutbol = $('#art-futbol');
const articleBasquet = $('#art-basquet');
const articleTenis = $('#art-tenis');
const articleNatacion = $('#art-natacion');

$(document).ready(function(){
    $.ajax({
        url: urlProducts,
        type: "GET",
        dataType: "json",
        success: function(datos){
            console.log(datos);
            $.each(datos, function(index, obj){
                let producto = 
                `<div class="card card-${obj.section}">
                    <a class="addCart" data-id="${obj.id}"><img src="${obj.img}" alt="${obj.name}"/></a>
                    <h1 class="description">${obj.name}</h1>
                    <p class="price"><span class="prc">${obj.price}</span></p>
                </div>`;
                
                switch(obj.section){
                    case 'futbol':
                        $(producto).appendTo(articleFutbol);
                        break;
                    
                    case 'basquet':
                        $(producto).appendTo(articleBasquet);
                        break;
                    
                    case 'tenis':
                        $(producto).appendTo(articleTenis);
                        break;

                    case 'natacion':
                        $(producto).appendTo(articleNatacion);
                        break;
                }
                
            });
        },
        error: function(xhr, status, error){
            console.log(xhr);
            console.log(status);
            console.log(error);
        }
    })
});