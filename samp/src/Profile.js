import React from 'react';
import firebase from 'firebase'

export default class Profile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            commentBox: '',

        }
    }
//This is a function for removing comments
    removeComment(itemId) {
        const itemRef = firebase.database().ref(`/items/${itemId}/comment`);
        itemRef.remove();
    }


    render() {
        const {itemId, user, profile, save, displayComment} = this.props;

        return (
            <div key={itemId} className="profileDiv">
                <h2>{user}</h2>
                <p>{profile}</p>
                <div className="commentcontainer">
                    <p className="commentdisplaybox">{displayComment}</p>
                    <button onClick={() => this.removeComment(itemId)}>Delete</button>
                </div>
                <form className="commentboxstyles">
                    <textarea onChange={(e) => {
                        this.setState({commentBox: e.target.value})
                    }}/>
                    <button className="commentbutton" onClick={(e) => {
                        e.preventDefault();
                        save(this.state.commentBox, itemId)
                    }}>Submit
                    </button>
                </form>
            </div>
        );
    }
}