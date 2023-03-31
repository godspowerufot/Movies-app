import {
  createContext,
  useContext,
  useEffect,
  useState,
  Children,
} from "react";
import { auth, db } from "./firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
export const AuthContext = createContext();

// this is function is wrap around a context api to allow easy props handling
function Autcontextprovider(props) {
  const [user, setUser] = useState({});
  //  get th user that is sign in as object

  function signUp(email, password) {
    setDoc(doc(db, "users", email), {
      //addingnd users and his email in firebase
      savedShows: [],
    });
    return createUserWithEmailAndPassword(auth, email, password);
    // firebase function to  create a email and password by using an abstraction as baas
  }
  function logOut() {
    return signOut(auth);
  }
  function logIn(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
  }

  useEffect(() => {
    // Get  the current user who just create an emaiil or password

    const unsubcribe = onAuthStateChanged(auth, (currentuser) => {
      setUser(currentuser);
    });
    return () => {
      unsubcribe();
    };
  });
  // wrap all context withim an context api

  return (
    <AuthContext.Provider value={{ signUp, logIn, logOut, user }}>
      {props.children}
    </AuthContext.Provider>
  );
}

export default Autcontextprovider;

//userAuth is the function of firebase that perform authentication
//this file handle authentication

export function UserAuth() {
  return useContext(AuthContext);
}
