import React from 'react';
import CommentSection from '../CommentSection/CommentSection';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const PostDiv = styled.div`
border: 1px solid lightgray;
width: 60%;
margin: 80px 0 40px 40px;
`;

const UserDiv = styled.div`
display: flex;
align-items:center;
padding: 10px 0;
`;

const UserImg = styled.img`
width: 35px;
height: auto;
border-radius: 50%;
margin-left: 10px;
`;

const UserName = styled.h4`
padding: 0 10px;
`;

const PostImg = styled.img`
width: 100%;
height: auto;
`;

const Post = props => {
    return(
        <PostDiv>
            <UserDiv>
                <UserImg src={props.post.thumbnailUrl} alt={'username thumbnail'} />
                <UserName>{props.post.username}</UserName>
            </UserDiv>
            <PostImg src={props.post.imageUrl} alt={'post image'}/>
            <CommentSection comments= {props.post.comments}  data={props.post} likes={props.post.likes}/>                   
        </PostDiv>
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