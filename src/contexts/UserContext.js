import React from 'react';
import { createContext } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from '../firebase/firebase.init';
import { useState } from 'react';
import { useEffect } from 'react';


export const AuthContext = createContext();

const auth = getAuth(app);

const UserContext = ({ children }) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);


    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [photo, setPhoto] = useState('');
    const [name, setName] = useState('');


    // google and github popup sign in

    const popUpSignIn = (googleProvider) => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }

    // email and password sign up

    const emailPasswordSignIn = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    //  log in with email and password

    const signIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    // update profile

    const updateUserProfile = (name, photo) => {
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo
        })
    }

    // logout

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


    // input values

    const handleEmailValue = (event) => {
        const emailInputValue = event.target.value;
        setEmail(emailInputValue)
    }

    const handlePasswordValue = (event) => {
        const passwordInputValue = event.target.value;
        setPassword(passwordInputValue)
    }
    const handleNameValue = (event) => {
        const nameInputValue = event.target.value;
        setName(nameInputValue)
    }
    const handlePhotoValue = (event) => {
        const photoInputValue = event.target.value;
        setPhoto(photoInputValue)
    }


    const authValue = { popUpSignIn, emailPasswordSignIn, user, loading, setLoading, logOut, signIn, setUser, updateUserProfile, email, password, photo, name, handleEmailValue, handleNameValue, handlePasswordValue, handlePhotoValue };

    return (
        <AuthContext.Provider value={authValue}>
            {children}
        </AuthContext.Provider>

    );
};

export default UserContext;