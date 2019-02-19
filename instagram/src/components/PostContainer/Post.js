import React from 'react';
import CommentSection from '../CommentSection/CommentSection';
import PropTypes from 'prop-types';
import './Post.css';

const Post = props => {
    return(
        <div className= "post">
            <div className= "user">
            <img className="user-image" src={props.post.thumbnailUrl} alt={'username thumbnail'} />
            <h4 className= "user-name">{props.post.username}</h4>
            </div>
            <img className="post-image" src={props.post.imageUrl} alt={'post image'}/>
            <CommentSection comments= {props.post.comments}  data={props.post}/>
                            
        </div>
    );
}

Post.propTypes = {
    post:PropTypes.shape({
        username: PropTypes.string,
        thumbnailUrl: PropTypes.string,
        imageUrl: PropTypes.string,
        likes: PropTypes.number,
        timestamp: PropTypes.string,
        comments:PropTypes.arrayOf(PropTypes.shape({
            username: PropTypes.string,
            text: PropTypes.string
        }))
    })
}

Post.defaultProps = {
  post: []
};

export default Post;