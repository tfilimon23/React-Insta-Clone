import React from 'react';
import CommentSection from './CommentSection';


const Post = props => {
    return(
        <div>
            <h4>{props.post.username}</h4>
            <CommentSection comments= {props.post.comments}/>
        </div>
    );
}

export default Post;