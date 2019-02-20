import React from 'react';
import Comment from './Comment';
import './Comment.css';

class CommentSection extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            comments: props.comments,
            data: props.data,
            comment: ''
        };
    }

    render() {
        return(
            <div className="comment-section">
                <img  className="icon" src="https://img.icons8.com/ios/50/000000/like.png" alt="heart icon"/>
                <img className="icon"  src="https://img.icons8.com/ios/50/000000/speech-bubble.png" alt ="comment bubble"/>
                <div className ="comments">
                    <p className="likes">{this.state.data.likes} likes</p>
                    {this.state.comments.map ((comment, index) => (
                    <Comment key={index} comment={comment} />
                    ))}
                    <p className="timestamp">{this.state.data.timestamp}</p>
                </div>
                <form>
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

