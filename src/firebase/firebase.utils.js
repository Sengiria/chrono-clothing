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

firebase.initializeApp(config)

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = userRef.get();

  if (!(snapShot).exists) {
    const { email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        email,
        createdAt,
        ...additionalData
      })

    } catch (e) {
      console.log('Error creating user', e.message)
    }
  }

  return userRef;
}

export const addCollectionAndDocuments = async (
  collectionKey,
  objectsToAdd
) => {
  const collectionRef = firestore.collection(collectionKey);

  const batch = firestore.batch();
  objectsToAdd.forEach((obj) => {
    const newDocRef = collectionRef.doc();
    batch.set(newDocRef, obj);
  });

  return await batch.commit();
};

export const convertCollectionsSnapshotToMap = (collections) => {
    const transformedCollection = collections.docs.map(doc => {
      const { title, imageURL, items } = doc.data()

      return {
          path: encodeURI("/" + title.toLowerCase()),
          imageURL,
          id: doc.id,
          title,
          items
      }
    })
    console.log(transformedCollection)

    return transformedCollection.reduce((accumulator, collection) => {
      accumulator[collection.title.toLowerCase()] = collection
      return accumulator
    }, {})
}

export const convertCarouselSnapshotToMap = (carousel) => {
  const transformedCarousel = carousel.docs.map(doc => {
    const {title, imageUrl, desc, pos} = doc.data()

    return {
      title,
      pos,
      imageUrl,
      id: doc.id,
      desc
    }
  })

  return transformedCarousel.reduce((accumulator, carouselItem) => {
    accumulator[carouselItem.title.toLowerCase()] = carouselItem
    return accumulator
  }, {})
}

export const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const unsubscribe = auth.onAuthStateChanged(userAuth => {
      unsubscribe()
      resolve(userAuth)
    }, reject)
  })
}

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);

export default firebase;