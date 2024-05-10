import { createContext, useEffect, useState } from "react";

import {
  FacebookAuthProvider,
  GithubAuthProvider,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { auth } from "../firebase/FirebaseAuth";

export const userContext = createContext();
function AuthProvider({ children }) {
  const [user, setUser] = useState("sarajit");
  const [allCraft, setAllCraft] = useState();
  const [togle, setTogle] = useState(true);

  const [loading, setLoading] = useState(true);

  const googleProvider = new GoogleAuthProvider();
  const faceBookProvider = new FacebookAuthProvider();
  const gitHubProvider = new GithubAuthProvider();


  //    get data from database
  const togleCraft = () => {
    setTogle(!togle);
  };
  useEffect(() => {
    fetch("https://a-10-painting-and-drawing-server.vercel.app/allCraft")
      .then((res) => res.json())
      .then((data) => setAllCraft(data));
  }, [togle]);
  //    getdata from database

  // signUp with email or password
  const creactAccount = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // SignIn with email or password
  const LogInWithEOrP = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  // SignOut
  const LogOutUser = () => {
    setLoading(true);
    return signOut(auth);
  };

  //LogIn with social
  const LogInWithSocial = (social) => {
    if (social == "google") {
      return signInWithPopup(auth, googleProvider);
    } else if (social == "facebook") {
      return signInWithPopup(auth, faceBookProvider);
    }
    return signInWithPopup(auth, gitHubProvider);
  };

  ///update profile
  const updateUserProfile = (name, url) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: url,
    });
  };

  // is have user
  useEffect(() => {
    const unsubcribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      console.log(currentUser);
      setLoading(false);
    });

    return () => {
      unsubcribe();
    };
  }, []);

  const info = {
    user,
    creactAccount,
    LogInWithEOrP,
    LogOutUser,
    loading,
    setLoading,
    LogInWithSocial,
    updateUserProfile,
    allCraft, togleCraft
  };


  return <userContext.Provider value={info}>{children}</userContext.Provider>;
}

export default AuthProvider;
