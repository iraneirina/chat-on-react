import { initializeApp } from 'firebase/app';
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth';
import { getDatabase, ref } from 'firebase/database';

const firebaseConfig = {
  apiKey: 'AIzaSyAt_a3rRGqeJwu_Gkypsev38oBPjyye5qo',
  authDomain: 'react-chat-daa48.firebaseapp.com',
  projectId: 'react-chat-daa48',
  storageBucket: 'react-chat-daa48.appspot.com',
  messagingSenderId: '940166212292',
  appId: '1:940166212292:web:4ccf20dec0961f3798f791',
  measurementId: 'G-Q8TX0XQR2M',
};

const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);

export const signUp = async (email: string, password: string) =>
  await createUserWithEmailAndPassword(firebaseAuth, email, password);

export const logIn = async (email: string, password: string) =>
  await signInWithEmailAndPassword(firebaseAuth, email, password);

export const logOut = async () => await signOut(firebaseAuth);

export const db = getDatabase(app);

export const getChats = () => ref(db, 'chats');
