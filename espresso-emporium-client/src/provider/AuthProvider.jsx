import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { auth } from '../firebase/firebase.init';

const AuthProvider = ({ children }) => {

    const [profile, setProfile] = useState(null)

    const userSignUp = (email, password) => { 
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const userSignIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    const userSignOut = () => {
        return signOut(auth)
    }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setProfile(currentUser);
        });

        return () => unsubscribe
    }, []);

    const user = {
        userSignUp,
        userSignIn,
        userSignOut,
        profile
    }

    return (
        <AuthContext value={user}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;