import React from 'react';
import Comment from './Comment';
import './Comment.css';

class CommentSection extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            comments: props.comments,
            data: props.data,
            comment: '',
            likes: props.likes
        };
    }

    handleChanges = e => {
        this.setState({
          [e.target.name]: e.target.value
        });
      };

    addNewComment = (e, index) => {
    e.preventDefault();
    const newComment ={
        username: this.state.data.username,
        text: this.state.comment
    };
    this.setState({
        comments: [...this.state.comments, newComment],
        comment: ''
    });
    };

     
    addLikes = e => {
    this.setState (prevState =>{
        return{
            likes: prevState.likes + 1,
        }
    });
    };


    render() {
        return(
            <div className="comment-section">
                <img  className="icon"  onClick ={this.addLikes} src="https://img.icons8.com/ios/50/000000/like.png" alt="heart icon"/>
                <img className="icon"  src="https://img.icons8.com/ios/50/000000/speech-bubble.png" alt ="comment bubble"/>
                <div className ="comments">
                    <p className="likes">{this.state.likes} likes</p>
                    {this.state.comments.map ((comment, index) => (
                    <Comment key={index} comment={comment} />
                    ))}
                    <p className="timestamp">{this.state.data.timestamp}</p>
                </div>
                <form onSubmit ={this.addNewComment}>
                    <input className="add-comment"
                        value={this.state.comment}
                        type ="text"
                        name="comment"
                        placeholder = "Add a comment..."
                        onChange= {this.handleChanges}
                    />
                    <img className="icon" src="https://img.icons8.com/ios/50/000000/ellipsis-filled.png" alt="ellipsis icon" />
                </form>
            </div>
        );
    }
}

export default CommentSection;

