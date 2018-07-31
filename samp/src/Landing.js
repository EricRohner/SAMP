import React, {Component, Fragment} from 'react';
import './Landing.css';
import icon from './Smile at My Profile icon.jpg'
import firebase, {auth} from './firebase.js';
import Profile from './Profile';


class Landing extends Component {
    constructor() {

        super();
        this.state = {
            currentProfile: '',
            username: '',
            user: 'null',
            items: []
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.logout = this.logout.bind(this);
    }

    componentDidMount() {

        const itemsRef = firebase.database().ref('items');
        itemsRef.on('value', (snapshot) => {
                let items = snapshot.val();
                let newState = [];
                for (let item in items) {
                    newState.push({
                        id: item,
                        profile: items[item].profile,
                        user: items[item].user,
                        comment: items[item].comment
                    });
                }
                this.setState({items: newState});
            }
        )
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
            profile: this.state.currentProfile,
            user: this.state.username
        }

        itemsRef.push(item);
        this.setState({
            currentProfile: '',
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
        window.location.href = "http://localhost:3000/"
        // window.location.href = "https://samp.netlify.com/"
    }

    render() {
        return (
            <Fragment>
                <body>

                <div className="inputboxstyles">
                    <div>
                    <img className="logoicon" src={icon} alt=""/>
                    </div>
                    <form onSubmit={this.handleSubmit}>

                        <input type="text" name="username" placeholder="What's your name?"
                               onChange={this.handleChange}
                               value={this.state.username}/>

                        <input type="text" name="currentProfile" placeholder="Who are you?"
                               onChange={this.handleChange} value={this.state.currentProfile}/>

                        <button className="buttoncolor">Add Profile</button>
                    </form>

                    <button className="btn btn-primary buttoncolor" onClick={this.logout}> Log Out</button>

                </div>

                {this.state.items.map((item) => {

                        return (
                            <Profile itemId={item.id}
                                    user={item.user}
                                    profile={item.profile}
                                    displayComment= {item.comments || []}
                                    />
                            )
                    })}
                </body>
            </Fragment>
        );
    }
}

export default Landing;