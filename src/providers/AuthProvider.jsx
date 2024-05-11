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
import axios from "axios";
import useAxiosSecure from "../hooks/useAxiosSecure";

export const userContext = createContext();
function AuthProvider({ children }) {
  const [user, setUser] = useState();
  const [allCraft, setAllCraft] = useState();
  const axiosSecure = useAxiosSecure()

  const [loading, setLoading] = useState(true);

  const googleProvider = new GoogleAuthProvider();
  const faceBookProvider = new FacebookAuthProvider();
  const gitHubProvider = new GithubAuthProvider();

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

  // is have user obgerbar
  useEffect(() => {
    const unsubcribe = onAuthStateChanged(auth, (currentUser) => {
      const logerEmail = user?.email || currentUser?.email
      const userEmail = {email : logerEmail}
      console.log(userEmail)
      setUser(currentUser);
      console.log(currentUser);
      if(currentUser){
        axiosSecure.post(`/jwt`,userEmail)
        .then(res => console.log(res.data))
      }else{``
        axiosSecure.post(`/logOut`,userEmail)
        .then(res => console.log(res.data))
      }
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
    allCraft
  };


  return <userContext.Provider value={info}>{children}</userContext.Provider>;
}

export default AuthProvider;
