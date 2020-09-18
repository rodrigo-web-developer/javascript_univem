function carregarConteudo() {
    let path = window.location.pathname;
    let html = "";
    switch (path) { // verifica qual é a rota
        case "/":
            html = "formulario.html";
            break;
        case "/novaPagina":
            html = "novapagina.html";
            break;
        case "/primo":
            html = "primo.html";
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
            });
    }
}

function transitionTo(event, path) {
    event.preventDefault(); // impede que a tag "a" ao ser clicada redirecione a pagina
    window.history.pushState("", "", path); // troco apenas a url sem redirecionar
    carregarConteudo();
}

window.addEventListener("load", () => carregarConteudo());