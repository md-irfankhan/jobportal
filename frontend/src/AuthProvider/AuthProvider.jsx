import  { createContext, use, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import auth from '../firebase.init'
const AuthContext=createContext();
const useAuth=()=>{
    return use(AuthContext);
}
export useAuth;
const AuthProvider = ({children}) => {
    const [loading,setLoading]=useState(true);
    const [user,setUser]=useState(null);
    const googleProvider=new GoogleAuthProvider()
    useEffect(()=>{
        const unsubscribe=onAuthStateChanged(auth,user=>{
            setUser(user);
            setLoading(false);
        });
        return ()=>{
            unsubscribe();
        }

    },[])

    const createUser=(email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const loginUser=(email,password)=>{
        return signInWithEmailAndPassword(auth,email,password)
    }
    const updateUser=(displayName,photoURL)=>{
        return updateProfile(auth.currentUser,{
            displayName,photoURL
        })

    }

    const googleSignUp=()=>{
        return signInWithPopup(auth,googleProvider);
    }

    const logOut=()=>{
        return signOut(auth)
    }
    const value={
        createUser,
        loginUser,
        updateUser,
        logOut,
        user,
        loading,
        googleSignUp

    }
    return (
        <div>
            <AuthContext.Provider value={value}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;