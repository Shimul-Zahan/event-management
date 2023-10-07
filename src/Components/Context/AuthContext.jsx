import React, { createContext, useEffect, useState } from 'react'
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import auth from '../../Firebase/firebase.config';

export const MyAuthContext = createContext(null);
const AuthContext = ({ children }) => {

    const googleProvider = new GoogleAuthProvider();
    const githubProvide = new GithubAuthProvider();
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const googleLogin = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    }
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const loginWithPassword = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }
    const gitHubLogin = () => {
        setLoading(true);
        return signInWithPopup(auth, githubProvide);
    }
    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    }

    useEffect(() => {
        const unSubscriber = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false);
        })
        return (() => {
            unSubscriber();
        })
    }, [])

    const authElement = {
        user,
        googleLogin,
        createUser,
        loginWithPassword,
        gitHubLogin,
        logOut
    }

    return (
        <MyAuthContext.Provider value={authElement}>
            {children}
        </MyAuthContext.Provider>
    )
}

export default AuthContext