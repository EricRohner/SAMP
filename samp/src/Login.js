import React, { Component } from 'react';
import './App.css';
import firebase, {auth,provider} from './firebase.js';

class Login extends Component {
    constructor () {
        super();
        this.state = {
            currentItem: '',
            username: '',
            user: 'null'
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.login = this.login.bind(this);
        this.logout = this.logout.bind(this);
    }
    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
    }
    handleSubmit(e) {
        e.preventDefault();
        const itemsRef = firebase.database().ref('items');
        const item = {
            title: this.state.currentItem,
            user: this.state.username
        }
        itemsRef.push(item);
        this.setState({
            currentItem: '',
            username: ''
        });
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
                        <form onSubmit={this.handleSubmit}>
                            <input type="text" name="username" placeholder="What's your name?" onChange={this.handleChange} value={this.state.username}/>
                            <input type="text" name="currentItem" placeholder="What are you bringing?" onChange={this.handleChange} value={this.state.currentItem}/>
                            <button>Add Item</button>
                            { this.state.user ?
                                <button onClick={this.logout}> Log Out</button>
                                :
                                <button onClick={this.login}> Log In Sucker</button>
                            }
                        </form>
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
