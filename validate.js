function validarNome() {
    console.clear();

    var nome = document.getElementById("txtNome").value;
    var sobrenome = document.getElementById("txtSobrenome").value;

    var padrao =
        /\b[A-Za-zÀ-ú][A-Za-zÀ-ú]+,?\s[A-Za-zÀ-ú][A-Za-zÀ-ú]{2,19}\b/gi;

    var valida_nome = nome.match(padrao);
    var valida_sobrenome = sobrenome.match(padrao);

    if (valida_nome || !nome) {
        alert("Nome possui caracteres inválidos ou é vazio");
    } else {
        alert("Nome está Válido");
    }

    if (valida_sobrenome || !sobrenome) {
        alert("Sobrenome possui caracteres inválidos ou é vazio");
    } else {
        alert("Sobrenome está Válido");
    }
}
