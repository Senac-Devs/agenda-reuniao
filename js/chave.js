var tamanho = 6
var codigo = ""

function geraStringAleatoria(tamanho) {
    let stringAleatoria = "";
    let caracteres = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    for (let i = 0; i < tamanho; i++) {
        stringAleatoria += caracteres.charAt(
            Math.floor(Math.random() * caracteres.length)
        );
    }
    codigo = stringAleatoria
    document.getElementById("chave").innerText = `${codigo}`;
}
