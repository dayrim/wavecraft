import * as firebase from "firebase/app";
import "firebase/app";
import "firebase/firestore";
import "firebase/auth";

var config = {
  apiKey: "AIzaSyAOe3toNHQ0I2ErJvjr_0n0O4menndsskY",
  authDomain: "wavecraft-310b2.firebaseapp.com",
  databaseURL: "https://wavecraft-310b2.firebaseio.com",
  projectId: "wavecraft-310b2",
  storageBucket: "wavecraft-310b2.appspot.com",
  messagingSenderId: "514286114247",
};

const firestore = firebase.initializeApp(config).firestore();
console.log("Firebase initiation");

export { firestore, firebase };
