import React from 'react';

const UserLocation = ({user}) => {
    return(
        <div className="user-card-location-container">
            <p className="user-card-location">
                {user.location}
            </p>
        </div>
    )
}

export default UserLocation;