import React from 'react';

const UserCardBtn = ({user, btnTxt, btnClass}) => {
    return(
        <div className="user-card-btn-container">
            <button className={btnClass}>
                {btnTxt}: {user} users
            </button>
        </div>
    )
}

export default UserCardBtn;