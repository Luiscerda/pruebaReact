import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Principal from '../Pages/Principal'
import UserNewContainer from '../Pages/UserNewContainer'

const App = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/user/new" component={UserNewContainer}/>
            <Route component={Principal}/>
        </Switch>
    </BrowserRouter>
)

export default App