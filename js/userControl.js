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
    transitionTo(null, '/');
}

window.addEventListener("carregoupagina", () => verificarNodes());