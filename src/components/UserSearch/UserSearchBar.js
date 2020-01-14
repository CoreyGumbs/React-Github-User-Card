import React from 'react';
import './css/usersearchbar.css';

class UserSearchBar extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            username: ''
        }
    }

    render(){

        return(
            <header className="user-search-bar-container">
                search bar
            </header>
        );

    }
    
}

export default UserSearchBar;