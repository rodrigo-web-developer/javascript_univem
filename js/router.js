function carregarConteudo() {
    let path = window.location.pathname;
    let html = "";
    switch (path) { // verifica qual é a rota
        case "/":
            html = "/src/formulario.html";
            break;
        case "/novaPagina":
            html = "/src/novapagina.html";
            break;
        case "/primo":
            html = "/src/primo.html";
            break;
        case "/categoria":
            html = "/src/list_categoria.html";
            carregouPaginaCategoria();
            break;
        case "/produto":
            html = "/src/list_produto.html";
            carregouPaginaProduto();
            break;
        case "/registrar":
            html = "/src/register.html";
            break;
    }

    let container = document.getElementById("container");

    // if -> fetch() -> console.log()
    //       http request -> resposta.text()
    //                       serializa para texto -> container.innerHTML = texto
    if (html != "") {
        fetch(html) // Promise
            .then(
                // quando o servidor retornar a resposta HTTP
                resposta => resposta.text() // Segunda Promise
            )
            // quando a resposta for transformada em string
            .then(function (texto) {
                container.innerHTML = texto;
                window.dispatchEvent(new Event("carregoupagina"));
            });
    }
}

function transitionTo(event, path) {
    event.preventDefault(); // impede que a tag "a" ao ser clicada redirecione a pagina
    window.history.pushState("", "", path); // troco apenas a url sem redirecionar
    carregarConteudo();
}

window.addEventListener("popstate", () => carregarConteudo());

window.addEventListener("load", () => carregarConteudo());