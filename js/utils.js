function formDataToJson(form) {
    let data = new FormData(form);
    let jsonObj = {};

    for (const item of data.keys()) {
        let v = data.get(item);
        jsonObj[item] = v;
    }
    return jsonObj;
}

function sendRequest(path, options) {
    const urlApi = "https://javascriptunivem.azurewebsites.net";
    return fetch(urlApi + path, options);
}

function addColumn(name, data, line) {
    let coluna = document.createElement("td");
    coluna.innerHTML = data[name];
    line.appendChild(coluna);
    return coluna;
}

window.addColumn = addColumn;
window.sendRequest = sendRequest;
window.formDataToJson = formDataToJson;