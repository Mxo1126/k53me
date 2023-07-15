import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyCoJpjEr-zcqeCJBBDGTTcBpJ9dPhahja0",

  authDomain: "k53meauth.firebaseapp.com",

  projectId: "k53meauth",

  storageBucket: "k53meauth.appspot.com",

  messagingSenderId: "269703614891",

  appId: "1:269703614891:web:66044dc265559a6d7f42ee",
};

// Initialize Firebase
let app;
if (firebase.app.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app;
}

const auth = firebase.auth();

export { auth };
