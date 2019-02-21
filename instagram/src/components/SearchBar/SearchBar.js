import React from 'react';
import './SearchBar.css';
import './instagram-logo.png';
import styled from 'styled-components';

const Header = styled.header`
width: 90%;
display: flex;
justify-content: space-between;
align-items: center;
border-bottom: 1px solid lightgrey;
`;

const Section = styled.section`
display: flex;
align-items: center;
`;

const Input = styled.input`
text-align: center;
`;

const IconImg = styled.img`
width: 25px;
padding: 10px;
`;

const LogoImg =styled.img`
border-left: 1px solid black;
`;

const SearchBar = props => {
    return(
        <Header>
            <Section>
                <img className="icon" src="https://img.icons8.com/ios/50/000000/instagram-new.png" alt="instagram icon"/>
                <LogoImg src="instagram-logo.png" alt="instagram name logo"/>
            </Section>
            <form onSubmit={props.searchBar}>
                <Input
                    value={props.username}
                    type ="text"
                    name="username"
                    placeholder = "Search"
                    onChange = {props.handleChanges}
                />
            </form>
            <div>
                <img className="icon" src="https://img.icons8.com/ios/50/000000/0-percents.png" alt="circle icon"/>
                <img className="icon" src="https://img.icons8.com/ios/50/000000/like.png" alt="heart icon"/>
                <img className="icon" src="https://img.icons8.com/ios/50/000000/user.png" alt="user icon"/>
            </div>
        </Header>
    );
}

export default SearchBar;


    // line 13 onSubmit={props.searchBar}