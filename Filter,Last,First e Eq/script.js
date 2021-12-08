//vamos ver mais alguns emtodos de selecao do jquery

//vamor usar o filter() para filtrar o que a gente deseja pegar
/*let selected = $("div").filter(".div2")
console.log(selected)
*/

//agora vamos filtrar e pegar apenas os elementos que estao contidos no #container2 e que sejam do tipo .div2
/*let selected = $("#container2").children().filter(".div2")
console.log(selected)
*/

//usando apenas o children() iriamos pegar todos os elementos que sao filhos do #container2

//caso quisessemos apenas o primeiro elemento dos filhos do #container2, iremos usar o first()
/*let selected = $("#container2").children().first()
console.log(selected)
*/

//tambem temos como pegar o ultimo elemento filho contido dentro de #container2, usando o last()
/*let selected = $("#container2").children().last()
console.log(selected)*/

//temos tambem o not() ,permite que a gente pege todos os elementos que nao seja aquele que passamos dentro do not. exemplo: se voce quiser todos os filhos de #container2 menos o #div8, use:
/*let selected = $("#container2").children().not("#div8")
console.log(selected)*/

//tambem temos o eq(), o no eq() voce ira passar o equivalente ao index dentro do array que foi retornado.
let selected = $("#container2").children().eq(2);
console.log(selected)
