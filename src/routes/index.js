import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Index from '../pages/index'
import NotFound from '../pages/not_found'

const Routes = () => {
    return (
        <Switch>
            <Route exact path="/">
                <Index />
            </Route>
            <Route exact path="*">
                <NotFound />
            </Route>
        </Switch>
    )
}

export default Routes
