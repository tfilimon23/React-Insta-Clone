import React, { Component } from 'react';
import './App.css';

import './dummy-data';

import SearchBar from './components/SearchBar/SearchBar';
import PostContainer from './components/PostContainer/PostContainer';
import dummyData from './dummy-data';


class App extends Component {
  constructor (){
    super ();
    this.state = {
      data: []
    };
  }

  componentDidMount(){
    this.setState({ data: dummyData }); 
  }

  // searchBar = e => {
  //   e.preventDefault();
  //   this.setState({
  //   data: this.state.data.filter(username => !username.username)
  //   });
  // }

  render() {
    return (
      <div className="App">
        <SearchBar />
        <PostContainer data={this.state.data} />
      </div>
    );
  }
}

export default App;


// searchBar={this.searchBar}