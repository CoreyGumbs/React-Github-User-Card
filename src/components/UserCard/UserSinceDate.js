import React from 'react';

//dependencies
import Moment from 'react-moment';

const UserSinceDate = ({user}) => {
    return(
        <div className="user-card-date">
            <span className="joined-date">Member Since <Moment className="joined-date" format="YYYY" fromNow>{user.created_at}</Moment> </span>
        </div>
    );
}

export default UserSinceDate;