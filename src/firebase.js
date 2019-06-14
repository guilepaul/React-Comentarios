import firebase from 'firebase/app'
import 'firebase/database'
import 'firebase/auth'

const config = {
    apiKey: "AIzaSyCdp_1TMn3NpbpG8ZhHqxv9ovZANpUEP1o",
    authDomain: "comments-guiletest.firebaseapp.com",
    databaseURL: "https://comments-guiletest.firebaseio.com",
    projectId: "comments-guiletest",
    storageBucket: "comments-guiletest.appspot.com",
    messagingSenderId: "52490999757"
  }
  firebase.initializeApp(config)

  export const database = firebase.database()
  export const auth = firebase.auth()