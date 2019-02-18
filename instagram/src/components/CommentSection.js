import React from 'react';
import Comment from './Comment';
import './Comment.css';

const CommentSection = props => {
    return(
        <div className="comments">
            <p>{props.data.likes} likes</p>
            {props.comments.map ((comment, index) => (
                <Comment key={index} comment={comment} />
            ))}
            <p>{props.data.timestamp}</p>
             <form>
            <input
            type ="text"
            placeholder = "Add a comment..."
            />
            </form>
        </div>
    );
}

export default CommentSection;