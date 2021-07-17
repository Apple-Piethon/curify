import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Landing from '../pages/Landing'
import NotFound from '../pages/NotFound'
import PickShow from '../pages/PickShow'

const Routes = () => {
    return (
        <Switch>
            <Route exact path="/">
                <Landing />
            </Route>
            <Route exact path="/showpick">
                <PickShow />
            </Route>
            <Route exact path="*">
                <NotFound />
            </Route>
        </Switch>
    )
}

export default Routes
