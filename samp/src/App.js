import React from 'react';
import './App.css';
import Login from './Login.js'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Landing from './Landing.js'



export default () => (
<BrowserRouter>
    <Switch>
        <Route exact path ='/' component={Login}/>
        <Route path ='/Landing' component={Landing}/>
    </Switch>
</BrowserRouter>
)