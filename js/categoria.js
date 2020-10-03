async function listarCategorias() {
    let resposta = await sendRequest("/api/categoria");
    // fetch(urlApi + "/api/categoria").then(function(resposta){ });
    let json = await resposta.json();

    console.log(json);

    let table = document.getElementById("categorias");

    if (table == null) return;

    let tbody = table.getElementsByTagName("tbody")[0];

    if (tbody == null) return;

    tbody.innerHTML = "";

    json.forEach(categoria => {
        let linha = document.createElement("tr"); //<tr></tr>

        let colunaId = document.createElement("td"); //<td></td>
        colunaId.innerHTML = categoria.id; //<td> categoria.id </td>

        let colunaNome = document.createElement("td");
        colunaNome.innerHTML = categoria.nome;

        let colunaDescricao = document.createElement("td");
        colunaDescricao.innerHTML = categoria.descricao;

        linha.appendChild(colunaId); // <tr><td> categoria.id </td></tr>
        linha.appendChild(colunaNome); // adiciona coluna Nome
        linha.appendChild(colunaDescricao); // adiciona coluna descricao
        tbody.appendChild(linha);
    });
}

function carregouPaginaCategoria() {
    window.addEventListener("carregoupagina", listarCategorias, { once: true });
}

async function addCategoria(event) {
    event.preventDefault();
    let form = event.target;
    let json = formDataToJson(form);
    let jsonString = JSON.stringify(json);

    let token = getToken();

    let resposta = await sendRequest("/api/categoria", {
        method: "POST",
        body: jsonString,
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        }
    });

    if (resposta.status == 200) {
        alert("Categoria cadastrada com sucesso!");
        transitionTo(null, "/categoria");
    }
    else {
        alert("Houve erro na sua solicitação!");
    }
}