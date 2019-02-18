import React from 'react';
import './SearchBar.css';

const SearchBar = props => {
    return(
        <div className="search-bar">
        <form>
        <input
        type ="text"
        placeholder = "Search"
        />
        </form>
        </div>
    );
}

export default SearchBar;


    