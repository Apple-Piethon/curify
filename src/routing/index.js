import React, { useState, createContext, useContext } from 'react'
import { Routes, Route } from 'react-router-dom'
import Landing from '../pages/Landing'
import NotFound from '../pages/NotFound'
import PickShow from '../pages/PickShow'
import Callback from '../pages/Callback';
import PickPlaylist from '../pages/PickPlaylist';
import Loading from '../pages/Loading';
import { Auth } from '../api/spotify';
import { UserProvider, useUser, useUserUpdate } from '../UserProvider'

const Routing = () => {
    const setUser = useUserUpdate();        // Set user values
    const showUser = useUser();            // Show user values

    const printUser = () => {
        console.log(showUser);
    }

    const handleSetUser = (prop, value) => {
        setUser(prop, value);
        printUser();
    }

    return (
        <UserProvider>
            <Routes>
                <Route exact path="/" element={<Landing/>}/>

                <Route exact path="/login" 
                    Component={() => {
                        window.location.href = Auth;
                        return null;
                    }}/>

                <Route exact path="/callback" element={<Callback setUser={handleSetUser}/>} />
                <Route exact path="/showpick" element={<PickShow setUser={handleSetUser} />}/>
                <Route exact path="/playlistpick" element={<PickPlaylist setUser={handleSetUser} showUser={showUser}/>}/>        
                <Route exact path="/loading" element={<Loading/>}/>
                <Route exact path="*" element={<NotFound/>}/>
            </Routes>
        </UserProvider>
    )
}

export default Routing;
