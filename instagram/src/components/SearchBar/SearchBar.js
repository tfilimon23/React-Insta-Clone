import React from 'react';
import './SearchBar.css';
import './instagram-logo.png';


const SearchBar = props => {
    return(
        <div className="search-bar">
            <div className="instagram">
                <img className="icon" src="https://img.icons8.com/ios/50/000000/instagram-new.png" alt="instagram icon"/>
                <img className ="insta-logo" src="instagram-logo.png" alt="instagram name logo"/>
            </div>
            <form>
                <input
                    type ="text"
                    placeholder = "Search"
                    onSubmit={props.searchBar}
                />
            </form>
            <div>
                <img className="icon" src="https://img.icons8.com/ios/50/000000/0-percents.png" alt="circle icon"/>
                <img className="icon" src="https://img.icons8.com/ios/50/000000/like.png" alt="heart icon"/>
                <img className="icon" src="https://img.icons8.com/ios/50/000000/user.png" alt="user icon"/>
            </div>
        </div>
    );
}

export default SearchBar;


    