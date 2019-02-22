import React, { Component } from 'react';
import './App.css';
import styled from 'styled-components';

import './dummy-data';

// import SearchBar from './components/SearchBar/SearchBar';
// import PostContainer from './components/PostContainer/PostContainer';
import dummyData from './dummy-data';

import PostsPage from './components/PostContainer/PostsPage';
import LoginPage from './components/Login/LoginPage';
import withAuthenticate from './authentication/withAuthenticate';


const ComponentFromWithAuthenticate = withAuthenticate(PostsPage)(LoginPage);

const AppDiv =styled.div`
width: 1024px;
`;


class App extends Component {
  constructor (){
    super ();
    this.state = {
      data: [],
      username: ''
    };
  }

  componentDidMount(){
    this.setState({ data: dummyData }); 
  }

  handleChanges = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  
  render() {
    const filtered = this.state.data.filter(post => post.username.includes(this.state.username));
    return (
      <AppDiv>
        <PostsPage
          data = {filtered}
          handleChanges={this.handleChanges}
          searchBar={this.searchBar}
          username= {this.state.username}
        />
      </AppDiv>
    );
  }
}

export default App;
