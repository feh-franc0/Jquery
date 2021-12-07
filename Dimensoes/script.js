let box = $(".box");

//podemos mudar os valores do css usando o nome do que deseja mudar e o valor que deseja atribuir. (ao fazer isso ele ignora e desconsidera nosso box-sizing)
//box.width(600)


box.append("largura:", box.width(), "<br>",
        "largura + padding:",box.innerWidth(),"<br>",
        "largura + padding + borda:", box.outerWidth(), "<br>",
        "largura + padding + borda + margem:", box.outerWidth(true));