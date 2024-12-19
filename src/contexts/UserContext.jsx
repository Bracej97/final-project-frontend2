import React, {useContext, createContext, useState} from 'react';

export const UserContext = createContext()

const defaultUser = {
    username: '',
    firstname: '',
    lastname: '',
    email: '',
    password: '',
    isLoggedIn: false
};

export function UserProvider({ children }) {
    const [user, setUser] = useState(defaultUser);

    const signupUser = (username, firstname, lastname, email) => {
        setUser({
            username: username,
            firstname: firstname,
            lastname: lastname,
            email: email
        });
    }

    const loginUser = (username) => {
        setUser({ username: username, isLoggedIn: true });
    }

    const logoutUser = () => {
        setUser(defaultUser);
    }

    return (
        <UserContext.Provider value={{ user, loginUser, logoutUser, signupUser }}>
            {children}
        </UserContext.Provider>
    );
}
