import React, { Component, Fragment } from 'react';
import './App.css';
import firebase, {auth,provider} from './firebase.js';
class Landing  extends Component {
    render() {
        return (
            <div>
                <h1>This is from the Landing Page</h1>
            </div>
        );
    }
}
export default Landing;