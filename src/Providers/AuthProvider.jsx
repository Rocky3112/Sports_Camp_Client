/* eslint-disable react/prop-types */

import { createContext, useEffect, useState } from "react";
import { app } from "../firebase/firebase.config";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import axios from "axios";

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logOut = () => {
    return signOut(auth);
  };

  const googleProvider = new GoogleAuthProvider();
  const googleSignIn = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };
  //observe auth change
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, currentUser => {
        setUser(currentUser);
        console.log('current user', currentUser);

        // get and set token
        if(currentUser){
            axios.post('http://localhost:5000/jwt', {email: currentUser.email})
            .then(data =>{
                localStorage.setItem('access-token', data.data.token)
                setLoading(false);
            })
        }
        else{
            localStorage.removeItem('access-token')
        }

        
    });
    return () => {
        return unsubscribe();
    }
}, [])

  const authInfo = {
    user,
    createUser,
    loading,
    signIn,
    logOut,
    googleSignIn,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
