import React from 'react';
import Comment from './Comment';
import './Comment.css';

class CommentSection extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            comments: props.post.comments,
            data: props.post,
            comment: ''
        };
    }

    addNewComment = (e, index) => {
        e.preventDefault();
        const newComment ={
            username: philzcoffee,
            text: this.state.comment
        };
        this.setState({
            comments: [...this.state.comments, newComment],
            comment: ''
        });
    };

    addLikes = e => {
    this.setState ({props.data.likes + 1})
    }

    render() {
        return(
            <div className="comment-section">
                <img onClick={this.addLikes} className="icon" src="https://img.icons8.com/ios/50/000000/like.png" alt="heart icon"/>
                <img className="icon"  src="https://img.icons8.com/ios/50/000000/speech-bubble.png" alt ="comment bubble"/>
                <div className ="comments">
                    <p className="likes">{props.data.likes} likes</p>
                    {props.comments.map ((comment, index) => (
                    <Comment key={index} comment={comment} />
                    ))}
                    <p className="timestamp">{props.data.timestamp}</p>
                </div>
                <form onSubmit = {this.addNewComment(e, index)}>
                    <input className="add-comment"
                        type ="text"
                        placeholder = "Add a comment..."
                    />
                    <img className="icon" src="https://img.icons8.com/ios/50/000000/ellipsis-filled.png" alt="ellipsis icon" />
                </form>
            </div>
        );
    }
}

export default CommentSection;