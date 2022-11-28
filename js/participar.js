const nomeDiaSemana = ["domingo", "segunda", "terça", "quarta", "quinta", "sexta", "sábado"]
const ordenarSemana = document.getElementById('semana');
let horarioData =[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]

function adicionarSemana(chaves) {
    document.querySelectorAll("[id='acessoBotaoEmailChave']").disabled = true;
    if (!ordenarSemana == "") {

        const d = (chaves[0].intervalo);
        chaves.forEach(semana => {
            const diaInicial = new Date(semana.dataInicial)
            let diaAtual = diaInicial
            for (let i = 0; i < d; i++) {
                diaAtual = new Date(diaAtual.setDate(diaInicial.getUTCDate()))

                const diaSemana = diaAtual.getDay()
                const diaMes = diaAtual.getDate()

                const tr = document.createElement('tr');
                ordenarSemana.appendChild(tr);

                let td = document.createElement('td');
                td.innerHTML = (nomeDiaSemana[diaSemana] + '&nbspdia')
                tr.appendChild(td)
                uidUpdate = document.getElementById('uid').textContent
                let tdDiaMes = document.createElement('td');
                tdDiaMes.id = ('diaMes' + i)
                tdDiaMes.innerHTML = diaMes
                tr.appendChild(tdDiaMes)

                let tdHorario = document.createElement('td');
                tdHorario.innerHTML =
                    `<select id=horaDia${i}>
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
}



function validaHoraVazia(hora) {
    if (hora == "") {
        alert("Por Favor, informe a hora")
    }
}


const form = document.querySelector('#formularioCadastroDataHora');
let dh = ""
form.addEventListener('submit', (event) => {
    event.preventDefault();
    var intervalo = document.getElementById("intervalo").textContent

    for (let i = 0; i < intervalo; i++) {
        let diaIntervalo = "diaMes" + i
        let horaIntervalo = "horaDia" + i
        let dia = document.getElementById(diaIntervalo).textContent;
        let hora = document.getElementById(horaIntervalo).value;
        validaHoraVazia(hora)

        if (hora == "0700") {
            dh = hora
            updateData.splice(1, 1, updateData[1] + 1)
            horarioData.splice(1, 1, horarioData[1] + 1) 
        } else if (hora == "0800") {
            dh = hora
            updateData.splice(2, 1, updateData[2] + 1)
            horarioData.splice(2, 1, horarioData[2] + 1)
        } else if (hora == "0900") {
            dh = hora
            updateData.splice(3, 1, updateData[3] + 1)
            horarioData.splice(3, 1, horarioData[3] + 1) 
        } else if (hora == "1000") {
            dh = hora
            updateData.splice(4, 1, updateData[4] + 1)
            horarioData.splice(4, 1, horarioData[4] + 1)
        } else if (hora == "1100") {
            dh = hora
            updateData.splice(5, 1, updateData[5] + 1)
            horarioData.splice(5, 1,horarioData[5] + 1)
        } else if (hora == "1200") {
            dh = hora
            updateData.splice(6, 1, updateData[6] + 1)
            horarioData.splice(6, 1, horarioData[6] + 1)
        } else if (hora == "1300") {
            dh = hora
            updateData.splice(7, 1, updateData[7] + 1)
            horarioData.splice(7, 1, horarioData[7] + 1)
        } else if (hora == "1400") {
            dh = hora
            updateData.splice(8, 1, updateData[8] + 1)
            horarioData.splice(8, 1, horarioData[8] + 1)
        } else if (hora == "1500") {
            dh = hora
            updateData.splice(9, 1, updateData[9] + 1)
            horarioData.splice(9, 1, horarioData[9] + 1)
        } else if (hora == "1600") {
            dh = hora
            updateData.splice(10, 1, updateData[10] + 1)
            horarioData.splice(10, 1, horarioData[10] + 1)
        } else if (hora == "1700") {
            dh = hora
            updateData.splice(11, 1, updateData[11] + 1)
            horarioData.splice(11, 1, horarioData[11] + 1)
        } else if (hora == "1800") {
            dh = hora
            updateData.splice(12, 1, updateData[12] + 1)
            horarioData.splice(12, 1, horarioData[12] + 1)
        } else if (hora == "1900") {
            dh = hora
            updateData.splice(13, 1, updateData[13] + 1)
            horarioData.splice(13, 1, horarioData[13] + 1)
        } else if (hora == "2000") {
            dh = hora
            updateData.splice(14, 1, updateData[14] + 1)
            horarioData.splice(14, 1, horarioData[14] + 1)
        } else if (hora == "2100") {
            dh = hora
            updateData.splice(15, 1, updateData[15] + 1)
            horarioData.splice(15, 1, horarioData[15] + 1)
        } else if (hora == "2200") {
            dh = hora
            updateData.splice(16, 1, updateData[16] + 1)
            horarioData.splice(16, 1, horarioData[16] + 1)
        } else {
            dh = hora
            updateData.splice(17, 1, updateData[17] + 1)
            horarioData.splice(17, 1, horarioData[17] + 1)
        }
    }
    updateDados = {
        data: updateData,
        numeroParticipantes: np
    }

    let novoParticipante = {
        chave: document.getElementById('chave').textContent,
        nome: document.getElementById('nome').value,
        email: document.getElementById('email').value,
        telefone: document.getElementById('telefone').value,
        data: horarioData,
        hora: dh,
        numeroParticipantes: np
    }
    agendaParticipante.add(novoParticipante);
    participanteAtualizar()
});


function participanteAtualizar(form) {
    let nomeAgradece = document.getElementById('nome').value
    firebase.firestore()
        .collection("agendaData")
        .doc(agendaDataUid)
        .update(updateDados)
        .then(doc => {
            alert('Prezado(a) ' + nomeAgradece + ' suas informações estão salvas, agora e so aguardar!!')
            window.location.href = "./acompanhar.html?chave=" + chaveAcesso
        });

}
