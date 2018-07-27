import React, {Component, Fragment} from 'react';
import './Landing.css';
import firebase, {auth} from './firebase.js';


class Landing extends Component {
    constructor() {
        super();
        this.state = {
            currentItem: '',
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
                        title: items[item].title,
                        user: items[item].user
                    });
                }
                this.setState({items: newState});
                console.log(snapshot.val())
                console.log(this.state.items)
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
        window.location.href = "http://localhost:3000/"
        // window.location.href = "https://samp.netlify.com/"
    }


    render() {
        return (
            <Fragment>
                <div>

                    <form onSubmit={this.handleSubmit}>

                        <input type="text" name="username" placeholder="What's your name?"
                               onChange={this.handleChange}
                               value={this.state.username}/>

                        <input type="text" name="currentItem" placeholder="Who are you?"
                               onChange={this.handleChange} value={this.state.currentItem}/>

                        <button>Add Profile</button>
                    </form>

                    <button onClick={this.logout}> Log Out</button>

                </div>

                {console.log(this.state.items)}
                {this.state.items.map((item) => {

                        return (
                            <div key={item.id} className="profileDiv">
                                <h2>{item.user}</h2>
                                <p>{item.title}</p>
                            </div>)
                    })}

            </Fragment>
        );
    }
}

export default Landing;