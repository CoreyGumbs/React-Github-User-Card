import React from 'react';

const UserDescription = ({user}) => {
    return(
        <div className="user-card-bio-container">
            <p className="user-card-bio">
                {user.bio}
            </p>
        </div>
    )
}

export default UserDescription;