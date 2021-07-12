import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Index from '../pages/Index/'
import NotFound from '../pages/NotFound'
import Login from '../pages/Login'

const Routes = () => {
    return (
        <Switch>
            <Route exact path="/">
                <Index />
            </Route>
            <Route exact path="/logintest">
                <Login />
            </Route>
            <Route exact path="*">
                <NotFound />
            </Route>
        </Switch>
    )
}

export default Routes
