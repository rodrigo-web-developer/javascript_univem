function verificarNodes() {
    if (isLoggedIn()) {
        let elements = document.getElementsByClassName("is-not-logged");
        for (let node of elements) {
            node.style.display = "none";
        }
        let elementsOn = document.getElementsByClassName("is-logged");
        for (let node of elementsOn) {
            node.style.display = "block";
        }
        let welcome = document.getElementById("welcome");
        let userName = window.localStorage.getItem("username");
        welcome.innerText = `Bem-vindo, ${userName}!`; // interpolate string
    } else {
        let elements = document.getElementsByClassName("is-not-logged");
        for (let node of elements) {
            node.style.display = "block";
        }
        let elementsOn = document.getElementsByClassName("is-logged");
        for (let node of elementsOn) {
            node.style.display = "none";
        }
    }
}

function getToken() {
    return window.localStorage.getItem("token");
}

function isLoggedIn() {
    let token = getToken();
    return token;
}

function logout() {
    window.localStorage.removeItem("token");
    window.localStorage.removeItem("username");
    transitionTo(null, '/');
}

async function getDadosUsuario() {
    let token = getToken();
    if (!token) {
        return;
    }
    let resposta = await sendRequest("/api/usuario/myAccount", {
        headers: {
            "Authorization": "Bearer " + token
        }
    });
    if (resposta.status != 200) {
        return logout();
    }
    else {
        let dados = await resposta.json();
        window.localStorage.setItem("username", dados.perfil.nome);
    }
}

window.addEventListener("carregoupagina", () => verificarNodes());
window.addEventListener("load", () => getDadosUsuario());


window.logout = logout;
window.isLoggedIn = isLoggedIn;
window.getToken = getToken;
window.verificarNodes = verificarNodes;
window.getDadosUsuario = getDadosUsuario;