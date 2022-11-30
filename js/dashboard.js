let dataParticipantes = []

function btnRelatorioTela() {
    agendaSelectParticipante()
    relatorioTela(dataParticipantes)
}

function btnRelatorioCSV() {
    agendaSelectParticipante()
    relatorioParticipantes(dataParticipantes)
}

function agendaSelectParticipante() {
    firebase.firestore()
        .collection('agendaParticipante')
        .where('chave', '==', chaveAcesso)
        .get()
        .then(snapshot => {
            dataParticipantes = snapshot.docs.map(doc => ({
                ...doc.data(),
                uid: doc.id
            }));
            if (chaves == "") {
                alert(`Chave - ${chaveAcesso} não encontrado!`);
            }
            dataParticipantes.sort((a, b) => (a.numeroParticipantes > b.numeroParticipantes) ? 1 : -1)
            relatorioTela(dataParticipantes)
        })
};

function relatorioTela(dataParticipantes) {
    let p = dataParticipantes[0]
    let i = 0

    const participant = document.getElementById('listParticipant');
    dataParticipantes.forEach(p => {
        if (p.chave) {
            let tr = document.createElement('tr');
            tr.class = "active-row"
            participant.appendChild(tr)


            let numeroParticipantes = document.createElement('td');
            numeroParticipantes.className = 'numeroParticipantes'
            numeroParticipantes.innerHTML = p.numeroParticipantes;
            tr.appendChild(numeroParticipantes)

            let hora = document.createElement('td');
            hora.className = 'hora'
            hora.innerHTML = p.hora;
            tr.appendChild(hora)

            let nome = document.createElement('td');
            nome.className = 'nome'
            nome.innerHTML = p.nome;
            tr.appendChild(nome)


            let email = document.createElement('td');
            email.className = 'email'
            email.innerHTML = p.email;
            tr.appendChild(email)

            let telefone = document.createElement('td');
            telefone.className = 'telefone'
            telefone.innerHTML = p.telefone;
            tr.appendChild(telefone)
        }
    });

    let tr = document.createElement('tr');
    tr.class = "active-row"
    participant.appendChild(tr)

    let attribute = document.createAttribute("colspan");
    attribute.value = "5";
    let td = document.createElement('td');
    td.setAttributeNode(attribute)
    tr.appendChild(td)


    let divCSV = document.createElement('div')
    divCSV.className = 'divBTNcsv'
    td.appendChild(divCSV)

    let buttonAcesso = document.createElement('button')
    buttonAcesso.addEventListener('click', () => {
        relatorioParticipantes(dataParticipantes)
    })
    buttonAcesso.className = 'registrar'
    buttonAcesso.innerHTML = 'Relatorio CSV'
    divCSV.appendChild(buttonAcesso)

}

function relatorioParticipantes(dataParticipantes) {
    var csv = 'Chave, N.º Participante, Hora Escolhida, Nome, Email, Telefone\n';
    dataParticipantes.forEach(function (row) {
        csv += ',' + row.chave;
        csv += ',' + row.numeroParticipantes;
        csv += ',' + row.hora;
        csv += ',' + row.nome;
        csv += ',' + row.email;
        csv += ',' + row.telefone;
        csv += '\n';
    });
    var hiddenElement = document.createElement('a');
    hiddenElement.href = 'data:text/csv;charset=utf-8,' + encodeURI(csv);
    hiddenElement.target = '_blank';
    hiddenElement.download = 'participantes.csv';
    alert('Relatorio em CSV gerado com sucesso,consulte sua pasta de downloads.')
    hiddenElement.click();
}
