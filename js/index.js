function queDiaEHoje() {
    dayName = new Array("Domingo", "Segunda-Feira", "Terça-Feira", "Quarta-Feira", "Quinta-Feira", "Sexta-Feira", "Sábado")
    monName = new Array("Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro")
    now = new Date
    document.getElementById("hojeDia").innerText = (dayName[now.getDay()] + ", " + now.getDate() + " de " + monName[now.getMonth()] + " de " + now.getFullYear() + ".");
}

queDiaEHoje();


function registrarEvent() {
    window.location.href = "./html/preagenda.html"
}

function inserirData() {
    let dInicial = document.getElementById('dataInicial').value
    let dFinal = document.getElementById('dataFinal').value
    if (dFinal == '' || dInicial == '') {
        alert('Por favor, inserir a data inicial e final!')
    } else if (dFinal < dInicial) {
        alert('Por favor, corrigir a data final!')
    } else {
        let data1 = new Date(dInicial)
        data1.setHours(data1.getHours() + 3)

        let data2 = new Date(dFinal)
        data2.setHours(data2.getHours() + 3)

        let diferencaHora = Math.abs(data2.getTime() - data1.getTime())
        let diferencaDias = Math.ceil(diferencaHora / (1000 * 3600 * 24))
        diferencaDias = diferencaDias + 1

        if (diferencaDias > 7) {
            alert('O numero de dias e superior a 7. Por favor, corrigir a data final!')
        } else {
            document.getElementById('intervalo').innerHTML = diferencaDias

        }
    }
}


