import React from 'react';
import styled from 'styled-components';

const CommentDiv = styled.div`
display: flex;
align-items: center;
`;

const CommentUser = styled.h5`
font-size: 1 rem;
margin-right: 10px;
`;

const Comment = props => {
    return(
        <CommentDiv>
            <CommentUser>{props.comment.username}</CommentUser>
            <p>{props.comment.text}</p>
        </CommentDiv>
    );
}

Comment.defaultProps = {
    comment: []
  };

export default Comment;