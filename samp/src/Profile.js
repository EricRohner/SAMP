import React from 'react';

export default class Profile extends React.Component{
constructor(props){
    super(props);
    this.state = {
        commentBox: '',
    }
}
render(){
    const { itemId, user, title, save, displayComment } = this.props;
    
    return (
        <div key={itemId} className="profileDiv">
            <h2>{user}</h2>
            <p>{title}</p>
            <p>{displayComment}</p>
            <form>
                <textarea onChange={(e) => { this.setState({ commentBox: e.target.value })}}/>
                <button onClick={(e)=>{ 
                    e.preventDefault();
                    save(this.state.commentBox, itemId) 
                    }}>Submit</button>
            </form>
        </div>
    );
}
}