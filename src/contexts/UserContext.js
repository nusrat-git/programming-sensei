import React from 'react';
import { createContext } from 'react';
import { createUserWithEmailAndPassword, getAuth, signInWithPopup } from "firebase/auth";
import app from '../firebase/firebase.init';


export const AuthContext = createContext();

const auth = getAuth(app);

const UserContext = ({ children }) => {
    
    const googleSignIn = (googleProvider) => {
        return signInWithPopup(auth, googleProvider)
    }

    const emailPasswordSignIn = (email, password) =>{
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const authValue = {googleSignIn, emailPasswordSignIn};

    return (
        <AuthContext.Provider value={authValue}>
            {children}
        </AuthContext.Provider>

    );
};

export default UserContext;