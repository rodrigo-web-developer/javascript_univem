function getHtml() {
    let path = window.location.pathname;
    switch (path) { // verifica qual é a rota
        case "/":
            return "/src/formulario.html";
        case "/novaPagina":
            return "/src/novapagina.html";
        case "/primo":
            return "/src/primo.html";
        case "/categoria":
            carregouPaginaCategoria();
            return "/src/categoria/list.html";
        case "/produto":
            carregouPaginaProduto();
            return "/src/produto/list.html";
    }
    if (isLoggedIn()) {
        switch (path) {
            case "/categoria/criar":
                return "/src/categoria/form.html";
            case "/produto/criar":
                carregouFormularioProduto();
                return "/src/produto/form.html";
            default:
                if (path.match(/^\/categoria\/edit\/\d+$/)) {
                    carregarFormularioEdit();
                    return "/src/categoria/form.html";
                }
                else if (path.match(/^\/produto\/edit\/\d+$/)) {
                    carregouFormularioProduto();
                    return "/src/produto/form.html";
                }
        }
    }
    else {
        switch (path) {
            case "/registrar":
                return "/src/register.html";
            case "/login":
                return "/src/login.html";
        }
    }


    return null;
}

function transitionTo(event, path) {
    event && event.preventDefault(); // impede que a tag "a" ao ser clicada redirecione a pagina
    window.history.pushState("", "", path); // troco apenas a url sem redirecionar
    return carregarConteudo();
}

function carregarConteudo() {
    console.log("pipipipopopo2");
    let html = getHtml();

    let container = document.getElementById("container");

    // if -> fetch() -> console.log()
    //       http request -> resposta.text()
    //                       serializa para texto -> container.innerHTML = texto
    if (html) {
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
    } else {
        window.dispatchEvent(new Event("carregoupagina"));
    }
}

window.addEventListener("popstate", () => carregarConteudo());

window.addEventListener("load", () => carregarConteudo());


// faz a função usada e joga ela no escopo da window, permitindo ser chamada via HTML
window.transitionTo = transitionTo;
window.getHtml = getHtml;
window.carregarConteudo = carregarConteudo;