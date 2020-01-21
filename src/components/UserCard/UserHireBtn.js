import React from 'react';

const UserHireBtn = ({user}) =>{
    return(
        <div className="user-card-hire-container">
            <button className={user.hireable ? "user-card-hireable-btn hireable" : "user-card-hireable-btn not-hireable"}>
                <span>{user.hireable ? "Available For Hire" : "Not For Hire"}</span>
            </button>   
        </div>
    )
}

export default UserHireBtn;