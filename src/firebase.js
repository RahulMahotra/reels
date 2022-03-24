import  firebase  from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/storage';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBMZtLhmDgmRv0dPmLG1j_fxUNpord-3y0",
  authDomain: "reels-c-5546d.firebaseapp.com",
  projectId: "reels-c-5546d",
  storageBucket: "reels-c-5546d.appspot.com",
  messagingSenderId: "14023531219",
  appId: "1:14023531219:web:e5e4b211a430aac9e3d226"
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();

const firestore = firebase.firestore();
export const database = {
    users : firestore.collection('users'),
    posts : firestore.collection('posts'),
    comments : firestore.collection('comments'),
    getTimeStamp : firebase.firestore.FieldValue.serverTimestamp()
}

export const storage = firebase.storage();