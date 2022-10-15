// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import { getAnalytics } from "firebase/analytics"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDfVhkx3s_lzc92k5SulYyXlJzbmswueUA",
  authDomain: "divisionalsecretariatauth.firebaseapp.com",
  projectId: "divisionalsecretariatauth",
  storageBucket: "divisionalsecretariatauth.appspot.com",
  messagingSenderId: "930030971251",
  appId: "1:930030971251:web:7ce84c6ba03c62313a7d06",
  measurementId: "G-LMNYRRR6CE"
}

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig)
export const firebaseAnalytics = getAnalytics(firebaseApp)