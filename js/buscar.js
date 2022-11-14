var arg = decodeURIComponent(location.search)
var chaveAcesso = arg.split('=')[1]
var participantes = []
var participanteDia = []
var agendaDataUid = ""
var np = ""
var updateData = ""

checkarg()

function checkarg() {
    if (!arg == "") {
        document.getElementById("acessoBotaoChave").disabled = true;
        buscarEvento(chaveAcesso)
        agendaDataEvento(chaveAcesso)
    }
}
function buscar() {
    chaveAcesso = document.getElementById('acesso').value.toUpperCase().trim();
    if (chaveAcesso == '') {
        alert('Por favor, inserir a chave de acesso!')
    } else {
        buscarEvento();
        agendaDataEvento()

    }
}
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
function agendaDataUidUpdate(dataChaves) {
    dataChaves.forEach(dataChaves => {
        if (dataChaves.uid) {
            agendaDataUid = dataChaves.uid
        }
        if (dataChaves.numeroParticipantes == "") {
            np = 1
        } else {         
            np = dataChaves.numeroParticipantes + 1
        }
        if (dataChaves.data){
            updateData = dataChaves.data                      
        }
    })
};

function formatarDataInicial(dataInicial) {
    return new Date(dataInicial).toLocaleDateString('pt-br');
}
function formatarDataFinal(dataFinal) {
    return new Date(dataFinal).toLocaleDateString('pt-br');
}
function adicionarNaTela(chaves) {
    const ordenarChave = document.getElementById('chaves');
    chaves.forEach(chaves => {
        if (chaves.chave) {
            document.getElementById("chave").innerText = chaves.chave;
        }
        if (chaves.dataInicial) {
            console.log(dataInicial)
            document.getElementById("dataInicial").innerText = formatarDataInicial(chaves.dataInicial);
        }
        if (chaves.dataFinal) {
            console.log(dataFinal)
            document.getElementById("dataFinal").innerText = formatarDataFinal(chaves.dataFinal)
        }
        if (chaves.intervalo) {
            document.getElementById("intervalo").innerText = chaves.intervalo;
        }
        if (chaves.detalhesEvento) {
            document.getElementById("detalhesEvento").innerText = chaves.detalhesEvento;
        }
        if (chaves.local) {
            document.getElementById("local").innerText = chaves.local;
        }
        if (chaves.tempoEstimado) {
            document.getElementById("tempoEstimado").innerText = chaves.tempoEstimado;
        }
        if (chaves.nome) {
            document.getElementById("nomeResponsavel").innerText = chaves.nome;
        }
        if (chaves.email) {
            document.getElementById("emailResponsavel").innerText = chaves.email;
        }
        if (chaves.telefone) {
            document.getElementById("telefoneResponsavel").innerText = chaves.telefone;
        }
        if (chaves.uid) {
            let uid = document.getElementById("uid")
            if (!uid == "") {
                uid.innerText = chaves.uid;
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