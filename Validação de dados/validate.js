function validarNome() {
    var nome = formcontato.nome.value;
    if (nome == "") {
        alert("Campo nome é obrigatorio");
        formcontato.nome.focus();
        return false;
    }
}

function validarEmail() {
    var email = formcontato.email.value;
    if (email == "") {
        alert("Campo email é obrigatorio");
        formcontato.email.focus();
        return false;
    }
}

function validarMensagem() {
    var mensagem = formcontato.mensagem.value;
    if (mensagem == "") {
        alert("Campo mensagem é obrigatorio");
        formcontato.mensagem.focus();
        return false;
    }
}
