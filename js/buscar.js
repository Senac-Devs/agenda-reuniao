var arg = decodeURIComponent(location.search)
var chaveAcesso = arg.split('=')[1]
var participantes = []
var participanteDia = []
var agendaDataUid = ""
var np = ""
var updateData = ""
var horariosEscolhidos = []

checkarg()

function checkarg() {
    if (!arg == "") {
        document.getElementById("acessoBotaoChave").disabled = true;
        buscarEvento(chaveAcesso)
        agendaDataEvento(chaveAcesso)
    }
}

// * Buscar em Reuniões *
function buscar() {
    chaveAcesso = document.getElementById('acesso').value.toUpperCase().trim();
    if (chaveAcesso == '') {
        alert('Por favor, inserir a chave de acesso!')
    } else {
        buscarEvento();
        agendaDataEvento(chaveAcesso)
    }
}

// -------------faz select na coleção (AGENDA) no banco para buscar reunião através da chave.
function buscarEvento() {
    firebase.firestore()
        .collection('agenda')
        .where('chave', '==', chaveAcesso)
        .get()
        .then(snapshot => {
            const chaves = snapshot.docs.map(doc => ({
                ...doc.data(),
                uid: doc.id
            }));
            if (chaves == "") {
                alert(`Chave - ${chaveAcesso} não encontrado!`);
            } else {
                document.getElementById("acessoBotaoChave").disabled = true;
                adicionarNaTela(chaves);
            }
        })
};

// faz um select na agendaData para pegar UID e fazer atualizacao
function agendaDataEvento() {
    firebase.firestore()
        .collection('agendaData')
        .where('chave', '==', chaveAcesso)
        .get()
        .then(snapshot => {
            const dataChaves = snapshot.docs.map(doc => ({
                ...doc.data(),
                uid: doc.id
            }));
            if (chaves == "") {
                alert(`Chave - ${chaveAcesso} não encontrado!`);
            } else {
                agendaDataUidUpdate(dataChaves)
            }
        })
};

let diaG = ""
function agendaDataUidUpdate(dataChaves) {
    dataChaves.forEach(dataChaves => {
        if (dataChaves.dataInicial) {
            diaG = dataChaves.dataInicial
        }
        if (dataChaves.uid) {
            agendaDataUid = dataChaves.uid
        }
        if (dataChaves.numeroParticipantes == "") {
            np = 1
        } else {
            np = dataChaves.numeroParticipantes + 1
        }
        if (dataChaves.data) {
            updateData = dataChaves.data
        }
        if (dataChaves.numeroParticipantes) {
            let numeroParticipantes = document.getElementById("numeroParticipantes")
            if (!numeroParticipantes == "") {
                horariosEscolhidos = updateData
                document.getElementById("numeroParticipantes").innerText = dataChaves.numeroParticipantes;
            }
        }
    })
    ajusteGrafico()
};
function formatarDataInicial(dataInicial) {
    return new Date(dataInicial).toLocaleDateString('pt-BR', { timeZone: 'UTC' });
}
function formatarDataFinal(dataFinal) {
    return new Date(dataFinal).toLocaleDateString('pt-BR', { timeZone: 'UTC' });
}
function adicionarNaTela(chaves) {
    const ordenarChave = document.getElementById('chaves');
    chaves.forEach(chaves => {
        if (chaves.chave) {
            document.getElementById("chave").innerText = chaves.chave;
        }
        if (chaves.dataInicial) {
            document.getElementById("dataInicial").innerText = formatarDataInicial(chaves.dataInicial);
        }
        if (chaves.dataFinal) {
            document.getElementById("dataFinal").innerText = formatarDataFinal(chaves.dataFinal)
        }
        if (chaves.intervalo) {
            let intervalo = document.getElementById("intervalo")
            if (!intervalo == "") {
                document.getElementById("intervalo").innerText = chaves.intervalo;
            }
        }
        if (chaves.detalhesEvento) {
            document.getElementById("detalhesEvento").innerText = chaves.detalhesEvento;
        }
        if (chaves.local) {
            let local = document.getElementById("local")
            if (!local == "") {
                document.getElementById("local").innerText = chaves.local;
            }
        }
        if (chaves.tempoEstimado) {
            let tempoEstimado = document.getElementById("tempoEstimado")
            if (!tempoEstimado == "") {
                document.getElementById("tempoEstimado").innerText = chaves.tempoEstimado;
            }
        }
        if (chaves.nome) {
            document.getElementById("nomeResponsavel").innerText = chaves.nome;
        }
        if (chaves.email) {
            let emailResponsavel = document.getElementById("emailResponsavel")
            if (!emailResponsavel == "") {
                document.getElementById("emailResponsavel").innerText = chaves.email;
            }
        }
        if (chaves.telefone) {
            let telefoneResponsavel = document.getElementById("telefoneResponsavel")
            if (!telefoneResponsavel == "") {
                document.getElementById("telefoneResponsavel").innerText = chaves.telefone;
            }
        }
        if (chaves.uid) {
            let uid = document.getElementById("uid")
            if (!uid == "") {
                uid.innerText = chaves.uid;
            }
        }
        if (chaves.numeroParticipante) {
            let uid = document.getElementById("participantes")
            if (!uid == "") {
                uid.innerText = chaves.participantes;
            }
        }
    });
    checkIdOrdenaSemana(chaves);
}
function checkIdOrdenaSemana(chaves) {
    let ordenarSemana = document.getElementById('semana');
    if (!ordenarSemana == "") {
        adicionarSemana(chaves);
    }
}