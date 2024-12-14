import React, {useContext, createContext, useState} from 'react';

export const UserContext = createContext()

const defaultUser = {
    username: '',
    email: '',
    password: '',
    isLoggedIn: false
};

export function UserProvider({ children }) {
    const [user, setUser] = useState(defaultUser);

    const loginUser = (username) => {
        setUser({ username: username, isLoggedIn: true });
    }

    const logoutUser = () => {
        setUser(defaultUser);
    }

    return (
        <UserContext.Provider value={{ user, loginUser, logoutUser }}>
            {children}
        </UserContext.Provider>
    );
}
