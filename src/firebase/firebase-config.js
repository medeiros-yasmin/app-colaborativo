import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyCllgiOWGRiiksrDbdTvnY3EMmXoVczxPk',
  authDomain: 'app-colaborativo.firebaseapp.com',
  projectId: 'app-colaborativo',
  storageBucket: 'app-colaborativo.appspot.com',
  messagingSenderId: '419652945465',
  appId: '1:419652945465:web:b4c95451e7bb66d0946fe8',
  measurementId: 'G-CGBDH42463',
}

const firebaseApp = firebase.firebaseInitializeApp(firebaseConfig)

export default firebaseApp.firestore()
