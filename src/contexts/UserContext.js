import React from 'react';
import { createContext } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut , updateProfile } from "firebase/auth";
import app from '../firebase/firebase.init';
import { useState } from 'react';
import { useEffect } from 'react';


export const AuthContext = createContext();

const auth = getAuth(app);

const UserContext = ({ children }) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const popUpSignIn = (googleProvider) => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }

    const emailPasswordSignIn = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const updateUserProfile =(name, photo) =>{
        return updateProfile(auth.currentUser,{
            displayName: name  , photoURL: photo
        })
    }

    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            console.log('inside auth state change', currentUser);
            setUser(currentUser)
            setLoading(false);
        });

        return () => {
            unsubscribe();
        }

    }, [])



    // useEffect(() => {
    //     const unsubscribe = onAuthStateChanged(auth, (currentUser) => {

    //         if (currentUser === null) {
    //             setUser(currentUser);
    //         }
    //         setLoading(false);
    //     });

    //     return () => {
    //         unsubscribe();
    //     }

    // }, [])

    const authValue = { popUpSignIn, emailPasswordSignIn, user, loading, setLoading, logOut, signIn, setUser ,updateUserProfile};

    return (
        <AuthContext.Provider value={authValue}>
            {children}
        </AuthContext.Provider>

    );
};

export default UserContext;