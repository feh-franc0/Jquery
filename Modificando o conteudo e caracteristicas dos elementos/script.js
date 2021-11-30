//Ira modificar o texto que esta contido dentro de h1
console.log($("h1").text("Lista de Compras"));

//usando o html() eu faço contem um h2 dentro do h1,nao modificando so o conteudo mas tmb podendo adicionar tags em html 
console.log($("h1").html("<h2>LISTA !!!</h2> <p> usando o html()</p>"));

//para voce adicionar um elemento do mesmo tipo dentro de uma lista por exemplo vc n podera usar o html() nem o text()



//para mudar o valor que esta dentro do input,use o val()
console.log($("#novo").val("Mudei o valor do input"));

//podemos pegar um atributo e modificalo, usamos o attr() e botamos o atributo que queremos pegar e uma ",(virgula)" para modificar o mesmo
console.log($("#novo").attr("name", "Item de compra"));

//podemos tmb adicionar caso nao exista o attr()
/**console.log($("li").attr("name", function(index) {
        return "Item "+index;
}))*/

//podemos modificar o atributo usando funcoes tmb,nesse caso vamos por os atributos enumerador pelo proprio index
$("li").attr("name", (index,originalValue) => {
    return originalValue + index;
})//originalValue é o valor que já estava lá anteriormente

//tambem podemos usar o attr() com uma função que ele tem chamada maxlenght que define o maximo decaracteres que pode por dentro daquele input,e modificar o tipo do input para password.Ainda usamos um setTimeout para esperar 3 segundo para fazer o comando que foi ordenado
setTimeout(() =>{
    $("#novo").val("12345");
    $("input").attr("maxlength", 5).attr("type", "password");
},3000);
