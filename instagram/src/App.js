import React, { Component } from 'react';
import './App.css';

import './dummy-data';

// import SearchBar from './components/SearchBar/SearchBar';
// import PostContainer from './components/PostContainer/PostContainer';
import dummyData from './dummy-data';

import PostsPage from './components/PostContainer/PostsPage';
import LoginPage from './components/Login/LoginPage';
import withAuthenticate from './authentication/withAuthenticate';


const ComponentFromWithAuthenticate = withAuthenticate(PostsPage)(LoginPage);

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

  searchBar = e => {
    e.preventDefault();
    this.setState({
    data: this.state.data.filter(post => post.username.toLowerCase().includes(this.state.username.toLowerCase()))
    });
  };


  render() {
    return (
      <div className="App">
        <PostsPage
          data ={this.state.data}
          handleChanges={this.handleChanges}
          searchBar={this.searchBar}
          username= {this.state.username}
        />
      </div>
    );
  }
}

export default App;
