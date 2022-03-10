import firebase from 'firebase'

const firebaseConfig = {
  apiKey: 'AIzaSyCahUH6ud1S58fEDwz9zVvdSjonTQGctHk',
  authDomain: 'covidcare-f67bf.firebaseapp.com', 
  databaseURL: 'https://covidcare-f67bf.firebaseio.com',
  projectId: 'covidcare-f67bf',
  storageBucket: 'covidcare-f67bf.appspot.com',
  messagingSenderId: '381516316775',
  appId: '1:381516316775:web:a76dfc3d103d2f46d194c2',
  measurementId: 'G-JP85JFY265',
}
// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()
const auth = firebase.auth()
const googleProvider = new firebase.auth.GoogleAuthProvider()

export { auth, googleProvider, db }
export default firebaseApp
