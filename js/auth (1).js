const firebaseConfig = {
    apiKey: "AIzaSyBA5Ags5_bGq94FdaLYfHU2RlhRaX_QrjE",
    authDomain: "agendatest-32fc0.firebaseapp.com",
    projectId: "agendatest-32fc0",
    storageBucket: "agendatest-32fc0.appspot.com",
    messagingSenderId: "847568347797",
    appId: "1:847568347797:web:948f15d174d9cf3b85b19c"
};

// inicializando firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const agenda = db.collection('agenda');
const agendaData = db.collection('agendaData');
const agendaParticipante = db.collection('agendaParticipante');
