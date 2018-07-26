import React, { Component, Fragment } from 'react';
import './App.css';
import firebase, {auth,provider} from './firebase.js';
import Login from './Login.js'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Landing from './Landing.js'



export default () => (
<Fragment>
<BrowserRouter>
    <Switch>
        <Route exact path ='/' component={Login}/>
        <Route path ='/Landing' component={Landing}/>


    </Switch>
</BrowserRouter>
</Fragment>)