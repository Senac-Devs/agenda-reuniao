function registrarEvent() {
    window.location.href = "./html/preagenda.html"
}

function queDiaEHoje() {
    dayName = new Array("Domingo","Segunda-Feira", "Terça-Feira", "Quarta-Feira", "Quinta-Feira", "Sexta-Feira", "Sábado")
    monName = new Array("Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro")
    now = new Date
    document.getElementById("hojeDia").innerText = (dayName[now.getDay()] + ", " + now.getDate() + " de " + monName[now.getMonth()] + " de " + now.getFullYear() + ".");
}

queDiaEHoje();