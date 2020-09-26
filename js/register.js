async function buscarCep(event) {
    // o target do event é o elemento que está disparando o evento, ou seja, o input
    let input = event.target.value; // 17500-100
    let cep = input.match(/\d+/g).join(''); // 17500100

    let res = await fetch("https://viacep.com.br/ws/" + cep + "/json");
    if (res.status == 200) {
        let endereco = await res.json();

        let cidade = document.querySelector("form input[name=cidade]");
        cidade.value = endereco.localidade;

        let bairro = document.querySelector("form input[name=bairro]");
        bairro.value = endereco.bairro;

        let uf = document.querySelector("form input[name=uf]");
        uf.value = endereco.uf;

        let logradouro = document.querySelector("form input[name=logradouro]");
        logradouro.value = endereco.logradouro;

        let numero = document.querySelector("form input[name=numero]");
        numero.focus();
    }
}

function formDataToJson(form) {
    let data = new FormData(form);
    let jsonObj = {};

    for (const item of data.keys()) {
        let v = data.get(item);
        jsonObj[item] = v;
    }
    return jsonObj;
}

async function registrar(event) {
    event.preventDefault();
    let form = event.target;

    let jsonBody = formDataToJson(form);
    console.log(jsonBody);

    let jsonString = JSON.stringify(jsonBody);

    const urlApi = "https://javascriptunivem.azurewebsites.net";

    let res = await fetch(urlApi + "/api/usuario", {
        method: "POST",
        body: jsonString,
        headers: {
            "Content-Type": "application/json"
        }
    });

    if (res.status == 200) {
        alert("Cadastrado com sucesso! Vá para a pagina de login");
    } else {
        alert("Houve erro na criacao do usuario")
    }
}