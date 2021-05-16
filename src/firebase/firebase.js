import * as firebase from 'firebase'

const firebaseConfig = {
    // apiKey: "AIzaSyAEIl8-JheWnyGlPmUMpUg5rEeM6DB8ywY",
    // authDomain: "dollarlog-f1e62.firebaseapp.com",
    // databaseURL: "https://dollarlog-f1e62-default-rtdb.firebaseio.com",
    // projectId: "dollarlog-f1e62",
    // storageBucket: "dollarlog-f1e62.appspot.com",
    // messagingSenderId: "779003180730",
    // appId: "1:779003180730:web:70999447af987b06cb7483",
    // measurementId: "G-MKSM4LJP7G"
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
  };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const database = firebase.database();

export {firebase, database as default};

// db.ref("expenses").push({
//     description: "coffee", 
//     amount: 525, 
//     createdAt: 150
// });

// db.ref("expenses").push({
//     description: "rent", 
//     amount: 130000, 
//     createdAt: 50
// });

// db.ref("expenses").push({
//     description: "Water bill", 
//     amount: 1500, 
//     createdAt: 175
// });

// db.ref().set({
//     name: "Jinzhao"
// });

// db.ref('attributes').set({
//     height: 6.1,
//     weight: 275
// }).then(() => {
//     console.log("Attributes have been added.")
// }).catch((error) => {
//     console.log(error);
// })

// db.ref('attributes').remove();

// db.ref()
//     .once('value')
//     .then((snapshot) => {
//         const val = snapshot.val();
//         console.log(`${val.name} is ${val.attributes.height} high.` );
//     })
