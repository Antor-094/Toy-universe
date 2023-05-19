import {
   
    createUserWithEmailAndPassword,
    getAuth,
    onAuthStateChanged,
    
    updateProfile,
  } from "firebase/auth";

  import { createContext, useEffect, useState } from "react";
import app from "../firebase/firebase.config";
  
  export const AuthContext = createContext();
  const auth = getAuth(app);

  const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
  
    const createUser = (email, password) => {
      setLoading(true);
      return createUserWithEmailAndPassword(auth, email, password);
    };
   
    const updateProf = (name, photo) => {
      setLoading(true);
      return updateProfile(auth.currentUser, {
        displayName: name,
        photoURL: photo,
      });
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
      updateProf,
      
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