
// database
var agendaTestDB = firebase.database().ref("agendaTest");

document.getElementById('agendaTest').addEventListener('submit', submitForm);

function submitForm(e) {
    e.preventDefault();
    var nome = getElementVal('nome');
    var email = getElementVal('email');
    var telefone = getElementVal('telefone');
    var chave = document.getElementById("chave").textContent;

    salvarNoBD(nome, email, telefone, chave);
}

const salvarNoBD = (nome, email, telefone, chave) => {
    var novoEvento = agendaTestDB.push();

    novoEvento.set({
        nome: nome,
        email: email,
        telefone: telefone,
        chave:chave
    });
};

const getElementVal = (id) => {
    return document.getElementById(id).value
};

