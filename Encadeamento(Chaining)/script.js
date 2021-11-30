/**
 * let jq = $("#lista1");
 * console.log(jq);
*/

//como o jquery retorna o proprio jquery é possivel fazermos um encadeamento(Chaining).

/**
let jq = $("#lista1").slideUp(2000);
jq.slideDown(2000);
console.log(jq);
*/

//logo como o jquery faz um encadeamento podemos simplesmente juntar os dois comandos usando ".",veja:

let jq = $("#lista1").slideUp(2000).slideDown(2000).fadeOut(1000);
console.log(jq);

//Jquery funciona mais ou menos dessa forma abaixa,onde veremos um objeto que faz diversas funçoes se referindo a ele mesmo:
//O jquery é simplesmente um conjunto de funcoes que a maioria das funcoes retorna o proprio objeto.

let objeto = {
    print10: function(){
        console.log(10);
        return this;
    },
    print20: function(){
        console.log(20);
        return this;
    }
}
objeto.print10().print10().print20().print10();