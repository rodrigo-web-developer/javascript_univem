async function logar(event) {
    event.preventDefault();
    let form = event.target;

    let jsonBody = formDataToJson(form);
    let jsonString = JSON.stringify(jsonBody);

    let res = await sendRequest("/api/usuario/login", {
        method: "POST",
        body: jsonString,
        headers: {
            "Content-Type": "application/json"
        }
    });

    if (res.status == 200) {
        alert("Login feito com sucesso!");
        let jsonResposta = await res.json();
        window.localStorage.setItem("token", jsonResposta.accessToken);
        window.localStorage.setItem("username", jsonResposta.userName);
        // window.dispatchEvent(new Event("loggedIn"));
        transitionTo(null, '/');
    } else {
        alert("Usuario ou senha invalidos")
    }
}

window.logar = logar;