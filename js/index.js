var listaDias = [];

function registrarEvent() {
    window.location.href = "./html/preagenda.html"
}

function mudaStatusDia(id, nDia) {
    if (listaDias[nDia][nPeriodo]) {
        document.getElementById(id).style.backgroundColor = "white";
    } else {
        document.getElementById(id).style.backgroundColor = "green";
    }

    atualizaListaDias(nDia, nPeriodo);
}

function atualizaListaDias(nDia, nPeriodo) {
    listaDias[nDia][nPeriodo] = !listaDias[nDia][nPeriodo];
}