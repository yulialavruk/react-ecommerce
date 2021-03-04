import firebase from "firebase/app";
import "firebase/firestore"; //for the db
import "firebase/auth";

const config = {
  apiKey: "AIzaSyBMybN2YGBvGCJyNpSKLfiT_Bet7hw6FVg",
  authDomain: "nomad-bags-store-87f24.firebaseapp.com",
  projectId: "nomad-bags-store-87f24",
  storageBucket: "nomad-bags-store-87f24.appspot.com",
  messagingSenderId: "516033076557",
  appId: "1:516033076557:web:4b3fb59638f5a52450eb04",
};

firebase.initializeApp(config);

const firestore = firebase.firestore();
const auth = firebase.auth();

const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) {
    return;
  }

  const userRef = firestore.doc(`users/${userAuth.uid}`); //users/uniq26535
  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }

  return userRef;
};

export { firestore, createUserProfileDocument, auth };
