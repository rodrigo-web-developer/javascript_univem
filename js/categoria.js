async function getAllCategoria(){
    let resposta = await sendRequest("/api/categoria");
    // fetch(urlApi + "/api/categoria").then(function(resposta){ });
    let json = await resposta.json();
    return json;
}

async function listarCategorias() {
    let json = await getAllCategoria();
    
    let table = document.getElementById("categorias");

    if (table == null) return;

    let tbody = table.getElementsByTagName("tbody")[0];

    if (tbody == null) return;

    tbody.innerHTML = "";

    json.forEach(categoria => {
        let linha = document.createElement("tr"); //<tr></tr>
        addColumn("id", categoria, linha);
        addColumn("nome", categoria, linha);
        addColumn("descricao", categoria, linha);

        let colunaOperacoes = document.createElement("td");
        let id = categoria.id;
        colunaOperacoes.innerHTML = `<button onclick="transitionTo(event, '/categoria/edit/${id}')"` +
            'class="btn btn-warning">' +
            'Editar</button>' +
            `<button class="btn btn-danger" onclick="excluirCategoria(${id})">Excluir</button>`;
        colunaOperacoes.className = "is-logged";

        linha.appendChild(colunaOperacoes); // adiciona coluna descricao
        tbody.appendChild(linha);
    });

    verificarNodes();
}

function carregouPaginaCategoria() {
    window.addEventListener("carregoupagina", listarCategorias, { once: true });
}

function carregarFormularioEdit() {
    window.addEventListener("carregoupagina", preencherComDados, { once: true });
}

async function preencherComDados() {
    let id = window.location.pathname.match(/\d+$/)[0];
    let resposta = await sendRequest("/api/categoria/" + id);
    // fetch(urlApi + "/api/categoria").then(function(resposta){ });
    let categoria = await resposta.json();
    let inputNome = document.querySelector("input[name=nome]");
    inputNome.value = categoria.nome;
    let inputDescricao = document.querySelector("input[name=descricao]");
    inputDescricao.value = categoria.descricao;
}

async function saveCategoria(event) {
    event.preventDefault();
    let form = event.target;
    let json = formDataToJson(form);

    let id = window.location.pathname.match(/\d+$/);
    if (id) {
        id = id[0];
        json.id = id;
    }

    let jsonString = JSON.stringify(json);

    let token = getToken();

    let resposta = await sendRequest("/api/categoria", {
        method: id == null ? "POST" : "PUT",
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

async function excluirCategoria(id) {
    let token = getToken();
    let confirmou = confirm("Tem certeza de que deseja excluir esse registro?");
    if (confirmou) {
        let resposta = await sendRequest("/api/categoria/" + id, {
            method: "DELETE",
            headers: {
                "Authorization": `Bearer ${token}`
            }
        });
        if (resposta.status == 200) {
            listarCategorias();
        }
        else {
            alert("Não foi possível excluir o registro");
        }
    }
}


window.excluirCategoria = excluirCategoria;
window.saveCategoria = saveCategoria;
window.getAllCategoria = getAllCategoria;
window.listarCategorias = listarCategorias;
window.carregarFormularioEdit = carregarFormularioEdit;
window.carregouPaginaCategoria = carregouPaginaCategoria;
window.preencherComDados = preencherComDados;