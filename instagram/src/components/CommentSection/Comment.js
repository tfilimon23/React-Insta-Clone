import React from 'react';



const Comment = props => {
    return(
        <div className="comment">
            <h5 className="comment-user">{props.comment.username}</h5>
            <p className="comment-text">{props.comment.text}</p>
        </div>

    );
}

Comment.defaultProps = {
    comment: []
  };

export default Comment;