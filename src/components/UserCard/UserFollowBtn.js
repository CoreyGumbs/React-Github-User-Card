import React from 'react';

const UserFollowBtn = ({user}) => {
    return(
        <div className="user-follow-btn-container">
            <a id="user-follow-btn-link" href={user.html_url} target="_blank" rel="noopener noreferrer">
                <button className="user-follow-btn">
                    Follow Me
                </button>
            </a>
        </div>
    )
}

export default UserFollowBtn;