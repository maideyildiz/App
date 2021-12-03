// Import the functions you need from the SDKs you need
import * as firebase from "firebase";
import "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCgVJRwDN1elyNir1zCFq8WPA0hkfpPcuE",
  authDomain: "mobileapp-94d3d.firebaseapp.com",
  projectId: "mobileapp-94d3d",
  storageBucket: "mobileapp-94d3d.appspot.com",
  messagingSenderId: "406914191149",
  appId: "1:406914191149:web:f028b63f44fe3c8ace8da4"
};

let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

const fireDB = app.firestore();
const auth = firebase.auth();

export { auth,fireDB };
