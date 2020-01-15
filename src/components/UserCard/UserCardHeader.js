import React from 'react';

const UserCardHeader = ({user}) => {
    console.log(user);
    return(
        <div>
            <h1 className="user-card-heading">
                {user.login}
            </h1>
        </div>
    );
}

export default UserCardHeader;