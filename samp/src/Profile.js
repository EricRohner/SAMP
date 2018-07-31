import React from 'react';
import firebase from 'firebase'
import Comment from './Comment'

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
        const {itemId, user, profile, displayComment} = this.props;

        return (
            <div key={itemId} className="profileDiv">
                <h2>{user}</h2>
                <p>{profile}</p>
                {console.log(displayComment, 'display comment')}
                {displayComment.map((comment) => {
                return (<Comment comment = {comment} itemId= {itemId} />)
            })}

            </div>
        );
    }
}