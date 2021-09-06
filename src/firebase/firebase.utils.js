import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyB_24VOvmMq1L8rUpXvhHDUGsVLV-rR6eM",
  authDomain: "chrono-clothing.firebaseapp.com",
  projectId: "chrono-clothing",
  storageBucket: "chrono-clothing.appspot.com",
  messagingSenderId: "310422757281",
  appId: "1:310422757281:web:f39f221eb45888359c75e0",
  measurementId: "G-YPLVV8WYR6"
}

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = userRef.get();

  if (!(snapShot).exists) {
    const { displayName, email, photoURL } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        photoURL,
        ...additionalData
      })

    } catch (e) {
      console.log('Error creating user', e.message)
    }
  }

  return userRef;

}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;