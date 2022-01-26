import { initializeApp, getApp, getApps } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyC5xdg11mknXjqJn-xhjm6rffuFn_b8coA',
  authDomain: 'airbnb-75cc7.firebaseapp.com',
  projectId: 'airbnb-75cc7',
  storageBucket: 'airbnb-75cc7.appspot.com',
  messagingSenderId: '159061831714',
  appId: '1:159061831714:web:33d0eb95552997fd40da7b',
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
export const auth = getAuth(app);
export default app;
