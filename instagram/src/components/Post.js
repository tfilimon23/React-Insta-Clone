import React from 'react';
import CommentSection from './CommentSection';
import PropTypes from 'prop-types';

const Post = props => {
    return(
        <div>
            <div>
            <img src={props.post.thumbnailUrl} alt={'thumbnail image'} />
            <h4>{props.post.username}</h4>
            </div>
            <img src={props.post.imageUrl} alt={'picture of coffee'}/>
            <CommentSection comments= {props.post.comments}/>
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