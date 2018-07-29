import React, {Component, Fragment} from 'react';
import './App.css';
import {auth, provider} from './firebase.js';

class Login extends Component {

    constructor() {
        super();
        this.state = {
            user: 'null'
        }
        this.login = this.login.bind(this);
        this.logout = this.logout.bind(this);
    }

    logout() {
        auth.signOut()
            .then(() => {
                this.setState({
                    user: null
                });
            });
    }

    in() {
        auth.signInWithPopup(provider)
            .then((result) => {
                const user = result.user;
                this.setState({user});
            });
        window.location.href = "http://localhost:3000/Landing"
        // window.location.href = "https://samp.netlify.com/Landing"
    }

    render() {
        return (
            <Fragment>

                <h1>:) SMILE AT MY PROFILE :)</h1>

                {this.state.user ?
                    <button onClick={this.logout}> Log Out</button>
                    :
                    <button onClick={this.login}> Log In</button>
                }

            </Fragment>
        );
    }
}

export default Login;
