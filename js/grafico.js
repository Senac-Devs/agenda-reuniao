const labels = ["07:00", "08:00", "09:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00", "18:00", "19:00", "20:00", "21:00", "22:00", "23:00"]; //17 posições


const data = {
    labels: labels,
    datasets: [{
        label: 'Melhor Horário 23',
        backgroundColor: '#D5B27B',
        data: [0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0]//17 posições
    },
    {
        label: 'Melhor Horário 24',
        backgroundColor: '#48D2AD',
        data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 0, 0, 0, 0, 0]//17 posições
    }
    /*,
    {
        label: 'Melhor Horário 25',
        backgroundColor: '#11A9FC',
        data: [0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1]//17 posições
    },
    {
        label: 'Melhor Horário 26',
        backgroundColor: '#D519B8',
        data: [1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0]//17 posições
    },
    {
        label: 'Melhor Horário 27',
        backgroundColor: '#ADE04D',
        data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0]//17 posições
    },
    {
        label: 'Melhor Horário 28',
        backgroundColor: '#2A105B',
        data: [0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 2, 0, 0]//17 posições
    },
    {
        label: 'Melhor Horário 29',
        backgroundColor: '#6526DA',
        data: [0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0]//17 posições
    }
    */
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
        labels:{
            fontStyle: "bold"
        }
    }
};


const myChart = new Chart(
    document.getElementById('acompanhar'),
    config
);
// 1- #11A9FC
// 2- #D519B8
// 3- #48D2AD
// 4- #D5B27B
// 5- #ADE04D
// 6- #2A105B
// 7- #6526DA


