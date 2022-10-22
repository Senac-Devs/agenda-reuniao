
var tamanho = 6
var codigo = ""

function geraStringAleatoria(tamanho) {
    let stringAleatoria = "";
    let caracteres = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    for (let i = 0; i < tamanho; i++) {
        stringAleatoria += caracteres.charAt(
            Math.floor(Math.random() * caracteres.length)
        );
    }
    codigo = stringAleatoria
    document.getElementById("chave").innerText = `${codigo}`;
    let intervalo = "0"
    document.getElementById('intervalo').innerHTML = intervalo;
}

geraStringAleatoria(tamanho);

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
       }else {
        document.getElementById('intervalo').innerHTML = diferencaDias

      }
    }
  }

  function mudarTelaEvento() {
    window.location.href = './evento.html'
  
  }