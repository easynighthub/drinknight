const functions = require('firebase-functions');
const admin = require('firebase-admin');
const fetch = require('node-fetch');


admin.initializeApp();
// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });


//  firebase functions:config:set qvo.token="eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJjb21tZXJjZV9pZCI6ImNvbV9DWnNyUFJPRC04d0xSYUk0X2NDU213IiwiYXBpX3Rva2VuIjp0cnVlfQ.B6zg_pPOx6jgEMsSpNHybxHy6eX9-i4Zvfn4TKHI_Ms"

exports.crearUsuarioQvo = functions.auth.user().onCreate((user) => {
    const email = user.email; // The email of the user.
    const name = user.displayName; // The display name of the user.
    const image = user.photoURL;
    const provider = user.providerData[0].providerId;
    const  uid = user.uid;

  admin.firestore().collection('users').doc(uid).set({
    'email':email,
    'name':name,
    'image':image,
    'provider':provider,
    'uid':uid
      });


    console.log(user);







/*     fetch('https://playground.qvo.cl/customers', {
        method: 'POST',
        headers: {
            'Authorization': 'Bearer ' + functions.config().qvo.token,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            email: email,
            name: name
        })
    })
        .then(function (res) {
            console.log(res);
            return res.json();
        })
        .catch(function(){

    }); */

  });