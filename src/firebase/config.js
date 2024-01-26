import * as firebase from "firebase/app";
import "firebase/storage";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCze-qcIuPfDmYNzzw8UPUwDExL_af1kjg",
  authDomain: "firegram-73103.firebaseapp.com",
  projectId: "firegram-73103",
  storageBucket: "firegram-73103.appspot.com",
  messagingSenderId: "560139817981",
  appId: "1:560139817981:web:a1a055ab05b58f84173f94",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();

export { projectStorage, projectFirestore };
