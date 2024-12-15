import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA8nfizqSceEYCY0v_YuR3awbRw7Sx5idc",
  authDomain: "notion-clone-d571e.firebaseapp.com",
  projectId: "notion-clone-d571e",
  storageBucket: "notion-clone-d571e.firebasestorage.app",
  messagingSenderId: "871063956614",
  appId: "1:871063956614:web:e737b0b861fc1cc0327507",
};

const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore(app);

export { db };
