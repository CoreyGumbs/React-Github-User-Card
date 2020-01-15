import React from 'react';

//CSS
import './css/user-header-styles.css';

//Components
import UserSearchForm from './UserSearchForm';
import UserHeaderLogo from './UserHeaderLogo';

class UserHeader extends React.Component{
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
            <header className="user-header">
                <div className="user-header-container">
                    <UserHeaderLogo />
                    <UserSearchForm handleChanges={this.handleChanges} handleSubmit={this.handleSubmit} username={username} />
                </div>
            </header>
       );
    }  
}

export default UserHeader;