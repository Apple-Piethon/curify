import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Index from '../pages/index/index'
import NotFound from '../pages/NotFound'
import Login from '../pages/login'

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
