import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithPopup,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { getFirestore, doc, setDoc, getDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBHBQ7vuC9YQLwJZjGeeARdeYPLh3TcPEE",
  authDomain: "crwn-a522f.firebaseapp.com",
  projectId: "crwn-a522f",
  storageBucket: "crwn-a522f.appspot.com",
  messagingSenderId: "410233892680",
  appId: "1:410233892680:web:f711829ce90c46496f0d7d",
};

const app = initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({ prompt: "select_account" });

export const auth = getAuth();

export const signInWithGoogePopup = () => signInWithPopup(auth, googleProvider);

const db = getFirestore();

export const createUserDocumentFromAuth = async (
  userAuth,
  additionalInoformation = {}
) => {
  if (!userAuth) return;

  const userDocRef = doc(db, "users", userAuth.uid);
  const snapShot = await getDoc(userDocRef);
  if (!snapShot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalInoformation,
      });
    } catch (error) {
      console.log("error create user", error.message);
    }
  }

  return userDocRef;
};

export const createUserAuthWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  return await createUserWithEmailAndPassword(auth, email, password);
};

export const signUserAuthWithEmailAndPassword = (email, password) =>
  signInWithEmailAndPassword(auth, email, password);

export const signOutUser = async () => await signOut(auth);

export const onAuthStateChangedListener = (callback) =>
  onAuthStateChanged(auth, callback);
