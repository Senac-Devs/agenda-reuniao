
function registrarEvent() {
    window.location.href = "./html/preagenda.html"
}

function mudarTelaEvento() {
    window.location.href = "./evento.html"
}

var data = new Date();
var dia = String(data.getDate()).padStart(2, '0');
var mes = String(data.getMonth() + 1).padStart(2, '0');
var ano = data.getFullYear();
dataAtual = dia + '/' + mes + '/' + ano;
console.log(dataAtual);

var calendario = []
    
function inserirData() {
   
    
    let dInicial = document.getElementById("dataInicial").value;
    let dFinal = document.getElementById("dataFinal").value;
   
    dataAtual = dia + '/' + mes + '/' + ano;
    
    if (dFinal == "" || dInicial == "") {
        alert('Por favor, inserir a data inicial e final!')
    } else if (dFinal < dInicial) {
        alert('Por favor, corrigir a data final!')
    }else if(dInicial < dFinal){
    alert('data menor que atual')
    } else {
        let data1 = new Date(dInicial);
        data1.setHours(data1.getHours() + 3);

        let data2 = new Date(dFinal);
        data2.setHours(data2.getHours() + 3);

        let diferencaHora = Math.abs(data2.getTime() - data1.getTime());
        let diferencaDias = Math.ceil(diferencaHora / (1000 * 3600 * 24));
        document.getElementById("intervalo").innerHTML = (diferencaDias)



    }

}


const agendaDatabase = {};

let agenda_id = false;


function newAgenda(participante, calendario) {
    const agenda_data = {
        participante: participante,
        calendario: calendario,
        chave: document.getElementById("chave").textContent,
        dataInicial: document.getElementById("dataInicial").value,
        dataFinal: document.getElementById("dataFinal").value,
        intervalo: document.getElementById("intervalo").textContent,
        detalhesEvento: document.getElementById("detalhesEvento").value,
        local: document.getElementById("local").value,
        tempoEstimado: document.getElementById("tempoEstimado").value,
        nome: document.getElementById("nome").value,
        email: document.getElementById("email").value,
        telefone: document.getElementById("telefone").value,
        agendaover: false,
        createdat: firebase.database.ServerValue.TIMESTAMP,
    };

    if (!agenda_id) {
        agenda_id = firebase.database().ref().child('chave').push().key;
    }

    let updates = {};
    updates['/agenda/' + agenda_id] = agenda_data;

    let agenda_ref = firebase.database().ref();

    agenda_ref.update(updates)
        .then(function () {
            return { success: true, message: 'Agenda criada' };
        })
        .catch(function (error) {
            return { success: false, message: 'Falha na criação: ${error.message}' };
        });

}
function removeAgenda() {
    if (!agenda_id) return { success: false, message: 'Agenda invalida' };

    let agenda_ref = firebase.database().ref('/agenda/' + agenda_id);

    agenda_ref.remove()
        .then(function () {
            return { success: true, message: 'Agenda removida' };
        })
        .catch(function (error) {
            return { success: false, message: 'Falha na remoção da agenda: ${error.message}' };
        });
}


agendaDatabase.new = newAgenda;
agendaDatabase.remove = removeAgenda;





function salvarDados() {
    let chave = document.getElementById("chave").textContent;
    let dataInicial = document.getElementById("dataInicial").value;
    let dataFinal = document.getElementById("dataFinal").value;
    let intervalo = document.getElementById("intervalo").textContent;
    let detalhesEvento = document.getElementById("detalhesEvento").value;
    let local = document.getElementById("local").value;
    let tempoEstimado = document.getElementById("tempoEstimado").value;
    let nome = document.getElementById("nome").value;
    let email = document.getElementById("email").value;
    let telefone = document.getElementById("telefone").value;

    if (intervalo == "") {
        inserirData()
    } else if (detalhesEvento == "") {
        alert('Por favor, informar os detalhes do evento!')
    } else if (local == "") {
        alert('Por favor, informar local!')
    } else if (tempoEstimado == "00:00") {
        alert('Por favor, informar o tempo estimado do evento!')
    } else if (nome == "") {
        alert('Por favor, informar o nome do responsável!')
    } else if (email == "") {
        alert('Por favor, informar o email do responsável!')
    } else if (nome == "") {
        alert('Por favor, informar o nome do responsável!')
    } else if (telefone == "") {
        alert('Por favor, informar o telefone do responsável!')
    } else {
        for (let i = 0; i < intervalo; i++) {
            let d = new Date(dataInicial);
            d.setHours(d.getHours() + 3);
            d.setDate(d.getDate() + i);
            calendario.push(d)
        }
        agendaDatabase.new(nome, calendario);
    }
//     mudarTelaEvento()
}




//agendaDatabase.new('teste',['','','','','','']);
//agendaDatabase.remove();
//agendaDatabase.update(['1','1','','','','']);
//agendaDatabase.listen();

/*
<script src="https://www.gstatic.com/firebasejs/8.10.1/firebase-app.js"></script>
<script src="https://www.gstatic.com/firebasejs/8.10.1/firebase-database.js"></script>
<script src="../js/auth.js"></script>
*/