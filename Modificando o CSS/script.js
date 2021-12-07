//com o Jquery conseguimos fazer com que o elemento html q n contem certo tipo de classe html passe a ter
$("h1").addClass("bg-blue");


//com o Jquery tmb podemos remover a class, nesse caso usamos o setTimeout para dar um tempo de 2seg
setTimeout(() => {
    $("h1").removeClass("bg-blue");
},2000)

//tmb existe a função toggleClass, que ela alterna dependendo da situação,exemplo:"se tiver tira,se n tiver coloque"
setTimeout(() => {
    $("h1").toggleClass("bg-blue");
},5000)

//Vamos fazer um pisca pisca usando o setInterval no h2
setInterval(() => {
    $("h2").toggleClass("bg-red");
}, 300);

//tmb é possivel modificar os elementos do nosso css:
//vamos pegar algum elemento do css,exemplo o font-size
console.log($("h1").css("font-size"))

//conseguimos modificar o mesmo pegando ele e depois passando o valor que queremos modificar
setTimeout(() => {
    console.log("Função para aumentar o font size: ") 
    console.log($("h1").css({"font-size":"50px" ,
                             "background-color":"yellow"}))

    console.log($("h1").css("font-size"))
}, 8000);
