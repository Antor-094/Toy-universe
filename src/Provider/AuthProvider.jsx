import {
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
    getAuth,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signInWithPopup,
    signOut,
    updateProfile,
  } from "firebase/auth";

  import { createContext, useEffect, useState } from "react";
import app from "../firebase/firebase.config";
  
  export const AuthContext = createContext();
  const auth = getAuth(app);
  const googleProvider = new GoogleAuthProvider();
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
    const updateProf = (name, photo) => {
      setLoading(true);
      return updateProfile(auth.currentUser, {
        displayName: name,
        photoURL: photo,
      });
    };
    const logInWithGoogle = () => {
      return signInWithPopup(auth, googleProvider);
    };
    const logOut = () => {
      signOut(auth);
    };
    useEffect(() => {
      const unSubscribe = onAuthStateChanged(auth, (loggedUser) => {
        setUser(loggedUser);
        setLoading(false);
      });
      return () => {
        return unSubscribe();
      };
    }, []);
    const authInfo = {
      user,
      loading,
      createUser,
      signIn,
      updateProf,
      logInWithGoogle,
      logOut,
    };
    return (
      <div>
        <div>
          <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
        </div>
      </div>
    );
  };
  
  export default AuthProvider;