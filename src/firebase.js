import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
const firebaseConfig = {
    apiKey: "AIzaSyC7wDdvdmzhzbDdzQEJGIOxg5NF394K2PE",
    authDomain: "penguin-f.firebaseapp.com",
    projectId: "penguin-f",
    storageBucket: "penguin-f.appspot.com",
    messagingSenderId: "1026365638034",
    appId: "1:1026365638034:web:9d141c7da02b6cd54a6d4b",
    measurementId: "G-33STKQWLVB"
  };

  const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);