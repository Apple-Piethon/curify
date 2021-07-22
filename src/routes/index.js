import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Landing from '../pages/Landing'
import NotFound from '../pages/NotFound'
import PickShow from '../pages/PickShow'
import {Auth} from '../api/spotify';
import Callback from '../pages/Callback';
import PickPlaylist from '../pages/PickPlaylist';

const Routes = () => {
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
                <Callback />
            </Route>

            <Route exact path="/showpick">
                <PickShow />
            </Route>

            <Route exact path="/playlistpick">
                <PickPlaylist />
            </Route>
            
            <Route exact path="*">
                <NotFound />
            </Route>
        </Switch>
    )
}

export default Routes
