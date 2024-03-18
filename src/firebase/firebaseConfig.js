import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: "AIzaSyCQ9rOdc4xkoJHstUrsT93Lp-qgaVmnWTo",
  authDomain: "project-web-appication.firebaseapp.com",
  databaseURL: "https://project-web-appication-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "project-web-appication",
  storageBucket: "project-web-appication.appspot.com",
  messagingSenderId: "711214714623",
  appId: "1:711214714623:web:3124bd07c87f0dad3906ca",
  measurementId: "G-YNC1XE9CQP"
};

const app = initializeApp(firebaseConfig);

export default app;