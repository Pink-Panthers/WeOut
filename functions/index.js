const functions = require('firebase-functions')
const firebase = require('firebase')

const firebaseConfig = {
    apiKey: "AIzaSyBGIEo61tMmP8sbdCbeujtSSI1BR94DE00",
    authDomain: "weout-7dc89.firebaseapp.com",
    databaseURL: "https://weout-7dc89.firebaseio.com",
    projectId: "weout-7dc89",
    storageBucket: "weout-7dc89.appspot.com",
    messagingSenderId: "122621961076",
    appId: "1:122621961076:web:42abe472d8ddc310174221",
    measurementId: "G-N4FE3XSPBD"
  };

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

exports.createCircle = functions.firestore
    .document('circles/{circleId}')
    .onCreate((snap, context) => {
        db.collection('circles').doc(context.params.circleId).set({
            uid: context.params.circleId
        }, { merge: true }).then( () => {
            db.collection('users').doc(snap._fieldsProto.memberIDs.arrayValue.values[0].stringValue).set({
                circles: firebase.firestore.FieldValue.arrayUnion(context.params.circleId)
            }, { merge: true })
        })
    })

exports.createEvent = functions.firestore
    .document('events/{eventId}')
    .onCreate((snap, context) => {
        db.collection('circles').doc(snap._fieldsProto.circle.stringValue).set({
            upcomingEvents: firebase.firestore.FieldValue.arrayUnion(context.params.eventId)
        }, { merge: true })
    })
