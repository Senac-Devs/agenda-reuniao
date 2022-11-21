const labels = []; //17 posições
const horarioGrafico = ["07:00", "08:00", "09:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00", "18:00", "19:00", "20:00", "21:00", "22:00", "23:00"]; //17 posições

const data = {
    labels: labels,
    datasets: [{
        label: 'Hora X Participantes',
        backgroundColor: '#D5B27B',
        data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]//17 posições
    }
    ]
};

const config = {
    type: 'bar',
    data: data,
    options: {
        title: {
            display: true,
            fontSize: 20,
            text: "Relatório de dias X hora X participantes"
        },
        labels: {
            fontStyle: "bold"
        }
    }
};

const configOutro = {
    type: 'line',
    data: data,
    options: {
        title: {
            display: true,
            fontSize: 20,
            text: "Relatório de dias X hora X participantes"
        },
        labels: {
            fontStyle: "bold"
        }
    }
};

// 1- #11A9FC
// 2- #D519B8
// 3- #48D2AD
// 4- #D5B27B
// 5- #ADE04D
// 6- #2A105B
// 7- #6526DA
let d = 0

function ajusteGrafico() {
    for (let i = 0; i < updateData.length; i++) {
        if (!updateData[i] == 0) {
            d = i
        }
    }
    let p = 0
    for (let i = 1; i <= d; i++) {
        data.datasets.forEach((dataset) => {
            dataset.data.splice(p, 1, updateData[i]);

            labels.push(horarioGrafico[p]);
        });
        p++
    }
    const myChart = new Chart(
        document.getElementById('acompanhar'),
        config
    );
    const myChartOutro = new Chart(
        document.getElementById('acompanharOutro'),
        configOutro
    );
}


