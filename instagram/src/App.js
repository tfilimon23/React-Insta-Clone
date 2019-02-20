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
      data: [],
      username: ''
    };
  }

  componentDidMount(){
    this.setState({ data: dummyData }); 
  }

  handleChanges = e => {
    this.setState({
      [e.target.username]: e.target.value
    })
  }


  render() {
    return (
      <div className="App">
        <SearchBar 
        data ={this.state.data}
        handleChanges={this.handleChanges} />
        <PostContainer 
        data={this.state.data} 
        handleChanges={this.handleChanges}/>
      </div>
    );
  }
}

export default App;
