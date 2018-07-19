import React, { Component } from 'react';
import './App.css';
import firebase, {auth,provider} from './firebase.js';

class Login extends Component {
    constructor () {
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
                this.setState({
                    user
                });
            });
        window.location.href = "http://smileatmyprofile.com/Landing"
    }
    render() {
        return (
            <div className='app'>
                <header>
                    <div className='wrapper'>
                        <h1>:) SMILE AT MY PROFILE :)</h1>

                    </div>
                </header>
                <div className='container'>
                    <section className='add-item'>
                        { this.state.user ?
                            <button onClick={this.logout}> Log Out</button>
                            :
                            <button onClick={this.login}> Log In</button>
                        }
                    </section>
                    <section className='display-item'>
                        <div className='wrapper'>
                            <ul>
                            </ul>
                        </div>
                    </section>
                </div>
            </div>
        );
    }
}
export default Login;
