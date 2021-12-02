//vai sumir os dois item que contem a class .item2
//$(".item2").hide();

//vai sumir o elemento q possui a class .item2 que esta dentro do id #lista1
//$("#lista1 > .item2").hide():


//A fução find() permite que dentro do elemento que foi selecionado a gente busque por um descendente pode ser um "filho,neto,bisneto e etc"

/**Ira sumir o .item2 que esta dentro da #lista1
 * let lista1 = $("#lista1");
 * lista1.find(".item2").hide():
 * console.log(lista1);
 */

//A função children() mostra todos os filhos do elemento que voce selecionou,o children vai mostrar apenas os filhos

/** Ira sumiur todos os filhos do elemento #lista1
 * let lista1 = $("#lista1");
 * lista1.children().dafeOut();
 * //Tambem podemos usar seletores na função children();
 */


//find(); Vamos selecionar o body e pegar dois dos "netos" dele
 let body = $("body");
 console.log(body.find(".item2"));
 