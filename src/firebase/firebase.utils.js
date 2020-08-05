import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


const config= {
    apiKey: "AIzaSyAamJz4YivW0LLISdsS-rKV3XNvnGI1Kek",
    authDomain: "expostyle-clothing.firebaseapp.com",
    databaseURL: "https://expostyle-clothing.firebaseio.com",
    projectId: "expostyle-clothing",
    storageBucket: "expostyle-clothing.appspot.com",
    messagingSenderId: "606786814926",
    appId: "1:606786814926:web:321e1a13843cccd697219f",
    measurementId: "G-HSGFPZSXTK"
  };

  export const createUserProfileDocument = async (userAuth,additionalData)=>{
    if(!userAuth) return;

    const UserRef = firestore.doc(`users/${userAuth.uid}`)
    const snapShot =  await UserRef.get();

    if(!snapShot){
      const {displayName,email}=userAuth;
      const createdAt = new Date();
      try{
        await UserRef.set({
          displayName,
          email,
          createdAt,
          ...additionalData
        })

      }catch(error){
        console.log('error crearing user', error.message);

      }
    }
    return UserRef;


  }







firebase.initializeApp(config)

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt:'select_account'  });
export const signInWithGoogle = ()=> auth.signInWithPopup(provider);

export default firebase;
