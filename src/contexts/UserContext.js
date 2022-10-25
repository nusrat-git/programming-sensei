import React from 'react';
import { createContext } from 'react';


export const AuthContext = createContext();

const UserContext = ({ children }) => {
    const authValue = {};
    return (
        <AuthContext.Provider value={authValue}>
            {children}
        </AuthContext.Provider>

    );
};

export default UserContext;