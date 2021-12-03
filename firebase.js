// Import the functions you need from the SDKs you need
import * as firebase from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBRexWIq-qD0Gwjg9JcLmGrvdUVmaSB8pI",
  authDomain: "reactnativeapp-fd86c.firebaseapp.com",
  projectId: "reactnativeapp-fd86c",
  storageBucket: "reactnativeapp-fd86c.appspot.com",
  messagingSenderId: "840059609235",
  appId: "1:840059609235:web:35b343b4e08acfc1bd6d66",
};

let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

const auth = firebase.auth();

export { auth };
