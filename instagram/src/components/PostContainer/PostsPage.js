import React from 'react'

import SearchBar from '../SearchBar/SearchBar';
import PostContainer from './PostContainer';

 const PostsPage = props => {
     return(
         <div>
        <SearchBar 
        data ={props.data}
        handleChanges={props.handleChanges}
        searchBar={props.searchBar}
        username= {props.username}
        />
        <PostContainer 
        data={props.data} 
        />
         </div>
     )
 }

 export default PostsPage;