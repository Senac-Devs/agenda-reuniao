let dataParticipantes = []

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
            relatorioParticipantes(dataParticipantes)

        })
};


function relatorioParticipantes(dataParticipantes) {
    console.log(dataParticipantes)
    var csv = 'chave, email, nome, numeroParticipantes, telefone\n';
    dataParticipantes.forEach(function (row) {
        csv += row.chave;
        csv += ',' + row.email;
        csv += ',' + row.nome;
        csv += ',' + row.numeroParticipantes;
        csv += ',' + row.telefone;
        csv += '\n';
    });

    var hiddenElement = document.createElement('a');
    hiddenElement.href = 'data:text/csv;charset=utf-8,' + encodeURI(csv);
    hiddenElement.target = '_blank';
    hiddenElement.download = 'participantes.csv';
    alert('Relatorio em CSV gerado com sucesso,consultar sua pasta de downloads.')
    hiddenElement.click();
}
//agendaSelectParticipante()
