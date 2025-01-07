import { createContext, useEffect, useState } from "react";
import app from "../auth.int.js/firebase.config";
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";



export const AuthContext = createContext();
const auth = getAuth(app)

const AuthProvoder = ({ children }) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const [learData, setLearnData] = useState(null);


    // login sector
    const userLogin = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    };

    // logout
    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    };

    //   register section

    const createNewUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    };

    // updateProfile
    const updateUserProfile = (updatedData) => {
        return updateProfile(auth.currentUser, updatedData);
    };



    const handleAddBtn = (data) => {
        setLearnData(data); // Save the data to state
        console.log("Shared Context Data:", data); // Log for debugging
    };


    // google login
    const handelgogolesignin = () => {
        const googleProvider = new GoogleAuthProvider(); // Create an instance of GoogleAuthProvider
        setLoading(true);
        return signInWithPopup(auth, googleProvider) // Pass the instance here
          .then((result) => {
            setUser(result.user);
            console.log("Google Sign-In Successful:", result.user);
            setLoading(false);
          })
          .catch((error) => {
            console.error("Error during Google Sign-In:", error);
            setLoading(false);
          });
      };


  


// loding data not gone
useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => {
      unsubscribe();
    };
  }, []);


    const authInfo = {
        user,
        loading,
        learData,
        setUser,
        userLogin,
        createNewUser,
        updateUserProfile,
        logOut,
        handleAddBtn,
        handelgogolesignin

    }

    return <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>


};


export default AuthProvoder;