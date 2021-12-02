//se voce tentar adicionar umm novo elemento usando o html, o elemento nao sera adicionado e sim ira substituir todo o elemento html que contem no mesmo escopo onde foi inserido
$("#lista1").html("<li>Teste</li>")

//para adicionar um novo item depois de todos os outros que ja estava contido no nosso html,iremos fazer dda seguinte forma:
let lista1 = $("#lista1");
let items = lista1.html()
lista1.html(items + "<li>Teste</li>")

//tem uma forma muito melhor e mais simples de adicionar um elemnto depois do conteudo que ja estava contido no nosos html pra isso usamos o metodo chamado append(),vejam:
let lista1 = $("#lista1");
lista1.append("<li>Teste</li>")

//para adicionar um elemento novo antes dos item,usamos outra função, cujo o nome é prepend(),vejam:
let lista1 = $("#lista1");
lista1.prepend("<li>Novo teste</li>")

//tambem existe o after() e o before(), que ao inves que ser feito dentro de onde selecionamos(antes visto na #lista1) agora sera fora dela,exemplo: se selecionarmos o #lista1 e usarmos o after, depois que a lista #lista1 e seu elementos forem feitos ira ser criado um novo li dps da ul #lista1, vejam:
let lista1 = $("#lista1")
lista1.after("<li>Novo teste</li>")

//e para ser criado um li antes da ul #lista1 use o before,vejam:
let lista1 = $("#lista1")
lista1.before("<li>Novo teste</li>")


//TODOS ESSES METODOS VISTOS ACEITAM MAIS DE UM ARGUMENTO;