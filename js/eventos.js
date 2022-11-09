const nomeDiaSemana = ["domingo", "segunda", "terça", "quarta", "quinta", "sexta", "sábado"]
var chaveAcesso = "";
var emailAcesso = "";

function buscar() {
  chaveAcesso = document.getElementById('acesso').value.toUpperCase().trim();
  if (chaveAcesso == '') {
    alert('Por favor, inserir a chave de acesso!')
  } else {
    document.getElementById("acessoBotao").disabled = true;
    buscarEvento();
  }
}

function buscarEmail() {
  emailAcesso = document.getElementById('acessoEmail').value.trim();
  if (emailAcesso == '') {
    alert('Por favor, inserir um email valido!')
  } else {
    document.getElementById("acessoBotao").disabled = true;
    buscarEventoEmail();
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
      }
      adicionarNaTela(chaves);
      adicionarSemana(chaves);
    })
};

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
      }
      adicionarNaTelaEmail(chaves)
    })
};

function formatarDataInicial(dataInicial) {
  return new Date(dataInicial).toLocaleDateString('pt-br');
}

function formatarDataFinal(dataFinal) {
  return new Date(dataFinal).toLocaleDateString('pt-br');
}

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

    if (chaves.chave) {
      let tr = document.createElement('tr');
      ordenarChave.appendChild(tr);
      let button = document.createElement('button')
      button.addEventListener('click', () => {
        document.getElementById("acessoBotao").disabled = true;
        chaveAcesso = chaves.chave
        buscarEvento(chaveAcesso)
      })
      button.id = 'acessoBotao'
      button.className = 'registrar'
      button.innerHTML = 'Buscar'
      tr.appendChild(button)
    }
    let tr = document.createElement('tr');
    ordenarChave.appendChild(tr);
    let espaco = document.createElement('td');
    espaco.innerHTML = '&nbsp';
    tr.appendChild(espaco);
  });
}

function adicionarNaTela(chaves) {
  const ordenarChave = document.getElementById('chaves');
  chaves.forEach(chaves => {
    if (chaves.chave) {
      let tr = document.createElement('tr');
      ordenarChave.appendChild(tr);
      let chave = document.createElement('td');
      chave.innerHTML = 'Chave de registro.';
      tr.appendChild(chave);
      let td = document.createElement('td');
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
      td.innerHTML = formatarDataFinal(chaves.dataFinal)
      tr.appendChild(td);
    }
    if (chaves.intervalo) {
      let tr = document.createElement('tr');
      ordenarChave.appendChild(tr);
      let intervalo = document.createElement('td');
      intervalo.innerHTML = 'Número de dias.';
      tr.appendChild(intervalo);
      let td = document.createElement('td');
      td.innerHTML = chaves.intervalo;
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
    if (chaves.tempoEstimado) {
      let tr = document.createElement('tr');
      ordenarChave.appendChild(tr);
      let tempoEstimado = document.createElement('td');
      tempoEstimado.innerHTML = 'Duração em horas.';
      tr.appendChild(tempoEstimado);
      let td = document.createElement('td');
      td.innerHTML = chaves.tempoEstimado;
      tr.appendChild(td);
    }
    if (chaves.nome) {
      let tr = document.createElement('tr');
      ordenarChave.appendChild(tr);
      let nome = document.createElement('td');
      nome.innerHTML = 'Responsável.';
      tr.appendChild(nome);
      let td = document.createElement('td');
      td.innerHTML = chaves.nome;
      tr.appendChild(td);
    }
    if (chaves.email) {
      let tr = document.createElement('tr');
      ordenarChave.appendChild(tr);
      let email = document.createElement('td');
      email.innerHTML = 'Email.';
      tr.appendChild(email);
      let td = document.createElement('td');
      td.innerHTML = chaves.email;
      tr.appendChild(td);
    }
    if (chaves.telefone) {
      let tr = document.createElement('tr');
      ordenarChave.appendChild(tr);
      let telefone = document.createElement('td');
      telefone.innerHTML = 'Contato.';
      tr.appendChild(telefone);
      let td = document.createElement('td');
      td.innerHTML = chaves.telefone;
      tr.appendChild(td);
    }
  });
}



function adicionarSemana(chaves) {

  console.log(chaves)
  const ordenarSemana = document.getElementById('semana');
  const d = (chaves[0].intervalo);


  chaves.forEach(semana => {
    const diaInicial = new Date(semana.dataInicial)
    let diaAtual = diaInicial
    for (let i = 0; i < d; i++) {
      diaAtual = new Date(diaAtual.setDate(diaInicial.getDate() + i))
      const diaSemana = diaAtual.getDay()
      const diaMes = diaAtual.getDate()

      const tr = document.createElement('tr');
      ordenarSemana.appendChild(tr);

      let td = document.createElement('td');
      td.innerHTML = (nomeDiaSemana[diaSemana] + '&nbsp dia')
      tr.appendChild(td)


      let tdDiaMes = document.createElement('td');
      tdDiaMes.id = ('diaMes' + diaMes)
      tdDiaMes.innerHTML = diaMes
      tr.appendChild(tdDiaMes)

      let tdHorario = document.createElement('td');
      tdHorario.innerHTML =
        `<select id=horaDia${diaMes}>
          <option value=""></option>
          <option value="0700">0700</option>
          <option value="0800">0800</option>
          <option value="0900">0900</option>
          <option value="1000">1000</option>
          <option value="1100">1100</option>
          <option value="1200">1200</option>
          <option value="1300">1300</option>
          <option value="1400">1400</option>
          <option value="1500">1500</option>
          <option value="1600">1600</option>
          <option value="1700">1700</option>
          <option value="1800">1800</option>
          <option value="1900">1900</option>
          <option value="2000">2000</option>
          <option value="2100">2100</option>
          <option value="2200">2200</option>
          <option value="2300">2300</option>
        </select>`
      tr.appendChild(tdHorario)
    }
  });
}


