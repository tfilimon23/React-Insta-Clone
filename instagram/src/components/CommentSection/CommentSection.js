import React from 'react';
import Comment from './Comment';
import styled from 'styled-components';


const CommentsSection = styled.section`
width: 90%;
padding: 0 10px;
`;

const CommentsDiv = styled.div`
margin-left: 10px;
border-bottom: 1px solid lightgray;
`;

const Likes = styled.p`
font-weight: bold;
`;

const Timestamp = styled.p`
color: gray;
`;

const Form =styled.form`
display: flex;
justify-content: space-between;
align-items: center;
`;

const Input=styled.input`
padding: 15px 0;
border: none;
`;

const CommentsImg = styled.img`
width: 40px;
padding: 5px;
`;

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
            <CommentsSection>
                <CommentsImg  onClick ={this.addLikes} src="https://img.icons8.com/ios/50/000000/like.png" alt="heart icon"/>
                <CommentsImg  src="https://img.icons8.com/ios/50/000000/speech-bubble.png" alt ="comment bubble"/>
                <CommentsDiv>
                    <Likes>{this.state.likes} likes</Likes>
                    {this.state.comments.map ((comment, index) => (
                    <Comment key={index} comment={comment} />
                    ))}
                    <Timestamp>{this.state.data.timestamp}</Timestamp>
                </CommentsDiv>
                <Form onSubmit ={this.addNewComment}>
                    <Input
                        value={this.state.comment}
                        type ="text"
                        name="comment"
                        placeholder = "Add a comment..."
                        onChange= {this.handleChanges}
                    />
                    <CommentsImg src="https://img.icons8.com/ios/50/000000/ellipsis-filled.png" alt="ellipsis icon" />
                </Form>
            </CommentsSection>
        );
    }
}

export default CommentSection;

