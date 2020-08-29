Math.sqrt(9);

function carregarConteudo() {
    let path = window.location.pathname;
    let html = "";
    switch (path) {
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
            .then(function (resposta) { // quando o servidor retornar a resposta HTTP
                return resposta.text(); // Segunda Promise
            })
            .then(function (texto) { // quando a resposta for transformada em string
                container.innerHTML = texto;
            });
    }
    console.log()
}

function transitionTo(event, path) {
    event.preventDefault(); // impede que a tag "a" ao ser clicada redirecione a pagina
    window.history.pushState("", "", path);
    carregarConteudo();
}

window.addEventListener("load", function () {
    carregarConteudo();
});