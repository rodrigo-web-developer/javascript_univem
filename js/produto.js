async function listarProdutos() {
    const urlApi = "https://javascriptunivem.azurewebsites.net";

    let resposta = await fetch(urlApi + "/api/produto");
    // fetch(urlApi + "/api/categoria").then(function(resposta){ });
    let json = await resposta.json();

    let table = document.getElementById("produtos");

    if (table == null) return;

    let tbody = table.getElementsByTagName("tbody")[0];

    if (tbody == null) return;

    tbody.innerHTML = "";

    json.forEach(produto => {
        let linha = document.createElement("tr"); //<tr></tr>

        let colunaId = document.createElement("td"); //<td></td>
        colunaId.innerHTML = produto.id; //<td> produto.id </td>

        let colunaNome = document.createElement("td");
        colunaNome.innerHTML = produto.nome;

        let colunaPreco = document.createElement("td");
        colunaPreco.innerHTML = "R$ " + produto.preco.toFixed(2);

        let colunaCategoria = document.createElement("td");
        colunaCategoria.innerHTML = produto.categoria.nome;

        linha.appendChild(colunaId); // <tr><td> categoria.id </td></tr>
        linha.appendChild(colunaNome); // adiciona coluna Nome
        linha.appendChild(colunaPreco); // adiciona coluna preco
        linha.appendChild(colunaCategoria); // adiciona coluna categoria
        tbody.appendChild(linha);
    });
}

function carregouPaginaProduto() {
    window.addEventListener("carregoupagina", listarProdutos, { once: true });
}