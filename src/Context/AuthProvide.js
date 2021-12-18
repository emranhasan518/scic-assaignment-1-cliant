import React, { createContext } from 'react';
import useFIrebase from '../Hooks/useFirebase';

export const AuthContext = createContext();

const AuthProvide = ({children}) => {
    const allContext = useFIrebase();
    return (
        <AuthContext.Provider value={allContext}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvide;