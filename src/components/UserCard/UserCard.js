import React from 'react';

const UserCard = ({user}) => {
    return(
        <section className="user-card-container">
            <h1>{user.login}</h1>
            <img src={user.avatar_url} alt=""/>
        </section> 
    )
}


export default UserCard;