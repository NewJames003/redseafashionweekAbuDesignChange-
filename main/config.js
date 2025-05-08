const firebaseconfig1 = { 
    apiKey: "AIzaSyCpyGybkDzb8vg6CLrq94Obr_6ocNW3I48",
    authDomain: "postandearn-913e7.firebaseapp.com",
    databaseURL: "https://postandearn-913e7-default-rtdb.firebaseio.com",
    projectId: "postandearn-913e7",
    storageBucket: "postandearn-913e7.appspot.com",
    messagingSenderId: "516981459091",
    appId: "1:516981459091:web:252fa231f2b08c8a752566",
    measurementId: "G-4J5FET99CL"
  }
  const firebaseApp1 = firebase.initializeApp(firebaseconfig1, "app1");
  const Primarydatabase = firebaseApp1.database();
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig2 = {
  apiKey: "AIzaSyDNBpkBychDKrkzEVjUfLTvrdicEaTZoDw",
  authDomain: "myfirstproject-e0716.firebaseapp.com",
  databaseURL: "https://myfirstproject-e0716-default-rtdb.firebaseio.com",
  projectId: "myfirstproject-e0716",
  storageBucket: "myfirstproject-e0716.firebasestorage.app",
  messagingSenderId: "264976954646",
  appId: "1:264976954646:web:801eff377ec77ad9920c37",
  measurementId: "G-TETN8019TY"
};
  const firebaseApp2 = firebase.initializeApp(firebaseConfig2, "app2");
  const Secondarydatabase = firebaseApp2.database();
  