import React from 'react';
import firebase from 'firebase'

export default class Comment extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            commentBox: '',

        }
    }
//This is a function for removing comments
    removeComment(itemId, commentId) {
        const itemRef = firebase.database().ref(`/items/${itemId}/comments/${commentId}`);
        itemRef.remove();
    }

    saveComment(comment, itemId) {
        console.log(comment, 'comment', itemId, 'Item');
        const itemsRef = firebase.database().ref('items/' + itemId + '/comments');
        const updates = {comment: comment};
        // updates['/comment'] = comment;
        const newitemsRef = itemsRef.push(updates);
        // itemsRef.update(updates);'
    }


    render() {
        const commentId = this.props.comment.id;
        const itemId = this.props.itemId
        return (
            <div key={commentId} className="commentDiv">

                <div className="commentcontainer">
                    <p className="commentdisplaybox">{this.props.comment}</p>
                    <button onClick={() => this.removeComment(itemId, commentId)}>Delete</button>
                </div>
                <form className="commentboxstyles">
                    <textarea onChange={(e) => {
                        this.setState({commentBox: e.target.value})
                    }}/>
                    <button className="commentbutton" onClick={(e) => {
                        e.preventDefault();
                        this.saveComment(this.state.commentBox, commentId)
                    }}>Submit
                    </button>
                </form>
            </div>
        );
    }
}