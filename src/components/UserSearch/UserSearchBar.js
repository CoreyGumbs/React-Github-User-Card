import React from 'react';

//CSS
import './css/usersearchbar.css';

//Components
import UserSearchForm from './UserSearchForm';

class UserSearchBar extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            username: ''
        }
    }

    handleChanges = e => {
        this.setState({username: e.target.value});
    }

    handleSubmit = e => {
        const {handleUserSearch} = this.props;
        e.preventDefault();
        handleUserSearch(this.state.username.toLowerCase());
        this.setState({username: ''})
    }

    render(){
        const {username} = this.state;
    
        return(
            <header className="user-search-bar-container">
                <UserSearchForm handleChanges={this.handleChanges} handleSubmit={this.handleSubmit} username={username} />
            </header>
       );
    }  
}

export default UserSearchBar;