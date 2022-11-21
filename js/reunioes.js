const nomeDiaSemana = ["domingo", "segunda", "terça", "quarta", "quinta", "sexta", "sábado"]
var chaveAcesso = "";
var emailAcesso = "";
var uid = "";
var participar = []

function buscarEmail() {
  emailAcesso = document.getElementById('acessoEmail').value.trim();
  if (emailAcesso == '') {
    alert('Por favor, inserir um email valido!')
  } else {
    buscarEventoEmail();
  }
}

function buscarEventoEmail() {
  firebase.firestore()
    .collection('agenda')
    .where('email', '==', emailAcesso)
    .get()
    .then(snapshot => {
      const chaves = snapshot.docs.map(doc => ({
        ...doc.data(),
        uid: doc.id
      }));
      if (chaves == "") {
        alert(`Email - ${emailAcesso} não encontrado!`);
      } else {
        document.getElementById("acessoBotaoEmail").disabled = true;
        adicionarNaTelaEmail(chaves)
      }
    })
};

function adicionarNaTelaEmail(chaves) {
  const ordenarChave = document.getElementById('chaves');
  chaves.forEach(chaves => {
    if (chaves.chave) {
      let tr = document.createElement('tr');
      ordenarChave.appendChild(tr);
      let chave = document.createElement('td');
      chave.innerHTML = 'Chave de registro.';
      tr.appendChild(chave);
      let td = document.createElement('td');
      td.id = "chave"
      td.innerHTML = chaves.chave;
      tr.appendChild(td);
    }
    if (chaves.dataInicial) {

      let tr = document.createElement('tr');
      ordenarChave.appendChild(tr);
      let dataInicial = document.createElement('td');
      dataInicial.innerHTML = 'Data inicial sugestiva.';
      tr.appendChild(dataInicial);
      let td = document.createElement('td');
      td.id = "dataInicial"
      td.innerHTML = formatarDataInicial(chaves.dataInicial);
      tr.appendChild(td);
    }
    if (chaves.dataFinal) {
      let tr = document.createElement('tr');
      ordenarChave.appendChild(tr);
      let dataFinal = document.createElement('td');
      dataFinal.innerHTML = 'Data final sugestiva.';
      tr.appendChild(dataFinal);
      let td = document.createElement('td');
      td.id = "dataFinal"
      td.innerHTML = formatarDataFinal(chaves.dataFinal);
      tr.appendChild(td);
    }
    if (chaves.detalhesEvento) {
      let tr = document.createElement('tr');
      ordenarChave.appendChild(tr);
      let detalhesEvento = document.createElement('td');
      detalhesEvento.innerHTML = 'Detalhes do Encontro.';
      tr.appendChild(detalhesEvento);
      let td = document.createElement('td');
      td.innerHTML = chaves.detalhesEvento;
      tr.appendChild(td);
    }
    if (chaves.local) {
      let tr = document.createElement('tr');
      ordenarChave.appendChild(tr);
      let local = document.createElement('td');
      local.innerHTML = 'Local.';
      tr.appendChild(local);
      let td = document.createElement('td');
      td.innerHTML = chaves.local;
      tr.appendChild(td);
    }
    if (chaves.uid) {
      let tr = document.createElement('tr');
      ordenarChave.appendChild(tr);
      let uid = document.createElement('td');
      uid.innerHTML = 'uid';
      tr.appendChild(uid);
      let td = document.createElement('td');
      td.id = "uid"
      td.innerHTML = chaves.uid;
      tr.appendChild(td);
    }
    if (chaves.chave) {
      let tr = document.createElement('tr');
      ordenarChave.appendChild(tr);
      let td = document.createElement('td');
      tr.appendChild(td);
      let buttonAcesso = document.createElement('button')
      buttonAcesso.addEventListener('click', () => {
        participarEvento(chaves)
      })
      buttonAcesso.id = 'acessoBotaoEmailChave'
      buttonAcesso.className = 'registrar'
      buttonAcesso.innerHTML = 'Participar'
      td.appendChild(buttonAcesso)     
      let button = document.createElement('button')
      button.addEventListener('click', () => {
        acompanharEvento(chaves)
      })
      button.id = 'acessoBotaoEmailChave'
      button.className = 'registrar'
      button.innerHTML = 'Acompanhar'
      tr.appendChild(button)
    }
    let tr = document.createElement('tr');
    ordenarChave.appendChild(tr);
    let espaco = document.createElement('td');
    espaco.innerHTML = '&nbsp';
    tr.appendChild(espaco);
  });
}
  
function participarEvento(chaves) { 
    const form = document.querySelector('#participarEvento');
    form.addEventListener('submit', (event) => {
      event.preventDefault();
      window.location.href="./participar.html?chave="+chaves.chave+"=uid="+chaves.uid;
    });
    
}

function acompanharEvento(chaves) { 
  const form = document.querySelector('#participarEvento');
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    window.location.href="./acompanhar.html?chave="+chaves.chave+"=uid="+chaves.uid;
  });
  
}



