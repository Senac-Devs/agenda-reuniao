const agendaDatabase = {};

let agenda_id = false;

function newAgenda(participante, calendario) {
  const agenda_data = {
        chave: document.getElementById("chave").textContent,
        participante: participante,
        calendario: calendario,
        agendaover: false,
        createdat: firebase.database.ServerValue.TIMESTAMP,
    };

    if (!agenda_id) {
        agenda_id = firebase.database().ref().child('chave').push().key;
    }

    let updates = {};
    updates['/agenda/' + agenda_id] = agenda_data;

    let agenda_ref = firebase.database().ref();g

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

function updateAgenda(calendario) {
    if (!agenda_id) return { success: false, message: 'Agenda invalida' };

    let agenda_ref = firebase.database().ref('/agenda/' + agenda_id);

    let updates = {};
    updates['/calendario'] = calendario;
    updates['/lastupdate'] = firebase.database.ServerValue.TIMESTAMP;

    agenda_ref.update(updates)
        .then(function () {
            return { success: true, message: 'Agenda atualizada' };
        })
        .catch(function (error) {
            return { success: false, message: 'Falha na atualização da agenda: ${error.message}' };
        });
}

function resetAgenda() {
    if (!agenda_id) return { success: false, message: 'Agenda invalida' };

    agenda_id = false;
    return { success: true, message: 'Agenda redefinida' };

}

async function listenAgenda() {
    if (!agenda_id) return { success: false, message: 'Agenda invalida' };

    let agenda_ref = firebase.database().ref('/agenda/' + agenda_id);

    agenda_ref.once('child_changed')
        .then(function (snapshot) {

            if (snapshot.key == 'calendario') {
                console.log('calendario change', snapshot.val());
                return { success: true, message: 'calendario update', data: snapshot.val() };
            } else if (snapshot.key == 'agendaover') {
                console.log('agenda over', snapshot.val());
                return { success: true, message: 'agenda over', data: snapshot.val() };
            }
        })
        .catch(function (error) {
            return { success: false, message: 'Invalid data: ${error.message}' };
        });

}
agendaDatabase.new = newAgenda;
agendaDatabase.remove = removeAgenda;
agendaDatabase.update = updateAgenda;
agendaDatabase.reset = resetAgenda;
agendaDatabase.listen = listenAgenda;


//agendaDatabase.new('teste',['','','','','','']);
//agendaDatabase.remove();
//agendaDatabase.update(['1','1','','','','']);
//agendaDatabase.listen();

