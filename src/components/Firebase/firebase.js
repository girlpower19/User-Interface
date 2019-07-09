import app from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

const config = {
    apiKey: "AIzaSyCFOyx3wqawq7GzsEvDBHqbIa-T3QP53o0",
    authDomain: "reandfi.firebaseapp.com",
    databaseURL: "https://reandfi.firebaseio.com",
    projectId: "reandfi",
    storageBucket: "",
    messagingSenderId: "164929870164",
    appId: "1:164929870164:web:afb2660bb1265970"
  };
  class Firebase {
    constructor() {
      app.initializeApp(config);
  
      this.auth = app.auth();
      this.db = app.database();
    }
  
    // *** Auth API ***
  
    doCreateUserWithEmailAndPassword = (email, password) =>
      this.auth.createUserWithEmailAndPassword(email, password);
  
    doSignInWithEmailAndPassword = (email, password) =>
      this.auth.signInWithEmailAndPassword(email, password);
  
    doSignOut = () => this.auth.signOut();
  
    doPasswordReset = email => this.auth.sendPasswordResetEmail(email);
  
    doPasswordUpdate = password =>
      this.auth.currentUser.updatePassword(password);
  
    // *** Merge Auth and DB User API *** //
  
    onAuthUserListener = (next, fallback) =>
      this.auth.onAuthStateChanged(authUser => {
        if (authUser) {
          this.user(authUser.uid)
            .once('value')
            .then(snapshot => {
              const dbUser = snapshot.val();
  
              // default empty roles
              if (!dbUser.roles) {
                dbUser.roles = [];
              }
  
              // merge auth and db user
              authUser = {
                uid: authUser.uid,
                email: authUser.email,
                emailVerified: authUser.emailVerified,
                providerData: authUser.providerData,
                ...dbUser,
              };
  
              next(authUser);
            });
        } else {
          fallback();
        }
      });
      doSendEmailVerification=()=>
      this.auth.currentUser.sendEmailVerification({
<<<<<<< HEAD
        url:'http://localhost:3000/home'
=======
        url:'localhost:3000/home'
>>>>>>> ce09bf71081e23767ecd4662eeecfba47950bb0b
      })
  
    // *** User API ***
  
    user = uid => this.db.ref(`users/${uid}`);
  
    users = () => this.db.ref('users');
  }
  
  export default Firebase;
