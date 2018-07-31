import React, {Component, Fragment} from 'react';
import './App.css';
import logo from './Smile at My Profile.jpg'
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

    login() {
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

                <section>
                    <img src={logo} alt="logo" />

                {this.state.user ?
                    <button type="button" className="btn btn-primary btn-lg btn-block buttoncolor" onClick={this.logout}> Log Out</button>
                    :
                    <button type="button" className="btn btn-primary btn-lg btn-block buttoncolor" onClick={this.login}> Log In</button>
                }

                </section>
            </Fragment>
        );
    }
}

export default Login;
