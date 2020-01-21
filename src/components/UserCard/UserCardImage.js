import React from 'react';

const UserCardImage = ({user}) => {
    return(
        <div className="user-card-img-container">
            <img src={user.avatar_url} alt=""/>
        </div>
    );
}

export default UserCardImage;