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
      const chaves = snapshot.docs.map(doc => doc.data())
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
      const chaves = snapshot.docs.map(doc => doc.data())
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
  const ordenarChave = document.getElementById('chavesPorEmail');
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
    if (chaves.email) {
      let tr = document.createElement('tr');
      ordenarChave.appendChild(tr);
      let espaco = document.createElement('td');
      espaco.innerHTML = '_______________________';
      tr.appendChild(espaco);
    }
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

function formatarDiaInicial(dataInicial) {
  dataInicial.setHours(dataInicial.getHours() + 3);
  let diaNome = ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"]
  let weekDate = new Date(dataInicial).getDay();
  return diaNome[weekDate]
}



function adicionarSemana(chaves) {
  const ordenarSemana = document.getElementById('semana');
  chaves.forEach(semana => {

    if (semana.dataInicial) {
      let tr = document.createElement('tr');
      ordenarSemana.appendChild(tr);
      let td = document.createElement('td');
      td.innerHTML = formatarDiaInicial(semana.dataInicial);
      tr.appendChild(td);
    }
  });

}



var listaDias = [];
for (let dias = 0; dias < 7; dias++) {
  listaDias.push([false, false, false]);
}
function mudaStatusDia(id, dia, periodo) {
  if (listaDias[dia][periodo]) {
    document.getElementById(id).style.backgroundColor = "hsl(0, 64%, 57%)";
  } else {
    document.getElementById(id).style.backgroundColor = "#CCC";
  }
  atualizaListaDias(dia, periodo);
}
function atualizaListaDias(dia, periodo) {
  listaDias[dia][periodo] = !listaDias[dia][periodo];
}


