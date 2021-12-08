//Vamos ver o que o JQuery faz de melhor que é selecionar os elementos lá do nosso DOM,vamos ver uma maneira de selecionar os elementos que fazem parte da mesma div, ou estao dentro do mesmo elemento que a gente ja selecionou

//Nos temos um metodo no Jquery que permite selecionar todos os irmaos do nosso elementos selecionado,usando o siblings() podendo ate mesmo filtrar qual voce deseja pegar 
//vai pegar os irmãos mas não a #div3.
//let selected = $("#div3").siblings();
//console.log(selected)

//temos tambem como pegar apenas os irmao que estao declarados depois dele,usando o nextAll(),tmb pode filtrar 
//let selected = $("#div3").nextAll();
//console.log(selected)

//temos o next() , que vai trazer apenas o irmao que vem em seguida

//para pegar todos os antecessores, basta usar o metodo prevAll() e se quiser apenas antecessor use o prev()
let selected = $("#div3").prev();
console.log(selected)

//temos o nextUntil() que vai pegar todos os irmao que vierem depois e so vai parar quando chegar no que voce por como filtro $("#comecaaqui").nextUntil("#pareatesdaqui")

//tmb temos o prevUntil() , que vai pegar os sucessores ate onde desejarmos que pare antes