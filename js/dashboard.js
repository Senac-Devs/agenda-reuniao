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
            participant.appendChild(tr)
            
            let td = document.createElement('td');
            tr.appendChild(td);
            
            let numeroParticipantes = document.createElement('td');
            numeroParticipantes.innerHTML = p.numeroParticipantes;
            td.appendChild(numeroParticipantes)

            let hora = document.createElement('td');
            hora.innerHTML = p.hora;
            td.appendChild(hora)

            let nome = document.createElement('td');
            nome.innerHTML = p.nome;
            td.appendChild(nome)
            

            let email = document.createElement('td');
            email.innerHTML = p.email;
            td.appendChild(email)

            let telefone = document.createElement('td');
            telefone.innerHTML = p.telefone;
            td.appendChild(telefone)
        }



    });

    let tr = document.createElement('tr');
      participant.appendChild(tr);
      let td = document.createElement('td');
      tr.appendChild(td);
      let buttonAcesso = document.createElement('button')
      buttonAcesso.addEventListener('click', () => {
        relatorioParticipantes(dataParticipantes)
      })
      buttonAcesso.className = 'registrar'
      buttonAcesso.innerHTML = 'Relatorio CSV'
      td.appendChild(buttonAcesso)     

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
