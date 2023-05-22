import React, { useState } from 'react'
import {Switch, Route} from 'react-router-dom'
import Landing from '../pages/Landing'
import NotFound from '../pages/NotFound'
import PickShow from '../pages/PickShow'
import { Auth } from '../api/spotify';
import Callback from '../pages/Callback';
import PickPlaylist from '../pages/PickPlaylist';
import Loading from '../pages/Loading';
// import User from '../pages/User';

const Routes = () => {

    const [user, setUser] = useState({ 
        accessToken: null,
        refreshToken: null,
        profile: null,
        showPick: null,
        playlistPick: null,
        result: null
    })

    const handleUserChange = (prop, value) => {
        setUser({
          ...user,
          [prop]: value
        })        
    }

    const showUser = () => {
        console.log(user);
    }

    return (
        <Switch>
            <Route exact path="/">
                <Landing />
            </Route>

            <Route exact path="/login" 
                component={() => {
                    window.location.href = Auth;
                    return null;
                }}>
            </Route>

            <Route path="/callback">
                <Callback handleUserChange={handleUserChange}/>
            </Route>

            <Route exact path="/showpick">
                <PickShow handleUserChange={handleUserChange} showUser={showUser}/>
            </Route>

            <Route exact path="/playlistpick">
                <PickPlaylist handleUserChange={handleUserChange} showUser={showUser}/>
            </Route>
           
            <Route exact path="/loading">
                <Loading />
            </Route>

            <Route exact path="*">
                <NotFound />
            </Route>
        </Switch>
    )
}

export default Routes
