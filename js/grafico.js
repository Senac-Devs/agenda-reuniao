const labels = []; //17 posições
const horarioGrafico = ["07:00", "08:00", "09:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00", "18:00", "19:00", "20:00", "21:00", "22:00", "23:00"]; //17 posições

const data = {
    labels: labels,
    datasets: [{
        label: 'Hora X Participantes',
        backgroundColor: [
            'rgba(222,184,135,1)',
            'rgba(0,255,255,1)',
            'rgba(95,158,160,1)',
            'rgba(127,255,0,1)',
            'rgba(210,105,30,1)',
            'rgba(100,149,237,1)',
            'rgba(0,0,139,1)',
            'rgba(184,134,11,1)',
            'rgba(169,169,169,1)',
            'rgba(0,100,0,1)',
            'rgba(255,140,0,1)',
            'rgba(233,150,122,1)'   
        ],
        borderColor: [
            'rgba(222,184,135,1)',
            'rgba(0,255,255,1)',
            'rgba(95,158,160,1)',
            'rgba(127,255,0,1)',
            'rgba(210,105,30,1)',
            'rgba(100,149,237,1)',
            'rgba(0,0,139,1)',
            'rgba(184,134,11,1)',
            'rgba(169,169,169,1)',
            'rgba(0,100,0,1)',
            'rgba(255,140,0,1)',
            'rgba(233,150,122,1)'
        ],
        data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]//17 posições
    }]
};


const configBar = {
    type: 'bar',
    data: data,
    options: {
        responsive: true,
        title: {
            display: true,
            fontSize: 40,
            text: "Relatório de dias X hora X participantes"
        },
        labels: {
            fontStyle: "bold",
        }
    }
};

const configLine = {
    type: 'line',
    data: data,
    options: {
        animations: {
            tension: {
                duration: 3000,
                easing: 'linear',
                from: 1,
                to: 0,
                loop: true
            }
        },
    }
};

const configDoughnut = {
    type: 'doughnut',
    data: data,
    options: {
        parsing: {
            key: 'nested.value'
        }
    }
}

const configPie = {
    type: 'pie',
    data: data,
    options: {
        parsing: {
            key: 'nested.value'
        }
    }
}


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
        document.getElementById('bar'),
        configBar
    );

    const myChartDoughnut = new Chart(
        document.getElementById('doughnut'),
        configDoughnut
    );

    const myChartLine = new Chart(
        document.getElementById('line'),
        configLine
    );

    const myChartPie = new Chart(
        document.getElementById('pie'),
        configPie
    );

}



