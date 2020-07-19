import firebase from 'firebase'
import 'firebase/auth'
import 'firebase/firestore'
import '../store/store'

if (!firebase.apps.length) {
  firebase.initializeApp({
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.FIREBASE_APP_ID,
    measurementId: process.env.FIREBASE_MEASUREMENT_ID,
  })
}

export default firebase

// export default {
//   init() {
//     firebase.initializeApp(config);
//     firebase.auth().setPersistence(firebase.auth.Auth.Persistence.SESSION);
//   },
//   login() {
//     const provider = new firebase.auth.GoogleAuthProvider();
//     firebase.auth().signInWithPopup(provider)
//   },
//   logout() {
//     firebase.auth().signOut()
//   },
//   onAuth() {
//     firebase.auth().onAuthStateChanged(user => {
//       user = user ? user : {};
//       this.$store.dispatch('onAuthStateChanged', user);
//       this.$store.dispatch('onUserStatusChanged', user.uid ? true : false);
//     });
//   },
//   createUser(user) {
//     db.collection('users').doc(user.uid).set(
//       {
//         name: user.displayName,
//         photoURL: user.photoURL,
//         email: user.email,
//       },
//       { merge: true }
//     )
//   },
// }
