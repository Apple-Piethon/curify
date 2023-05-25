import React, { createContext, useContext, useState } from 'react';

const UserContext = createContext();
const UserUpdateContext = createContext();

export function useUser() {
    return useContext(UserContext);
}

export function useUserUpdate() {
    return useContext(UserUpdateContext);
}

export function UserProvider( {children} ) {
    const [userState, setUserState] = useState({
        accessToken: null,
        refreshToken: null,
        profile: null,
        showPick: null,
        playlistPick: null,
        result: null,
    })

    function setUser(prop, value) {
        setUserState(user => ({
            ...user,
            [prop]: value,
        }))
    }

    return (
        <UserContext.Provider value={userState}>
            <UserUpdateContext.Provider value={setUser}>
                {children}
            </UserUpdateContext.Provider>
        </UserContext.Provider>
    )
}

