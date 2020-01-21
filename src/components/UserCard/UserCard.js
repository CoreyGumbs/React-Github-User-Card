import React from 'react';

//CSS
import './css/user-card-styles.css';

//components
import UserCardImage from './UserCardImage';
import UserCardHeader  from './UserCardHeader';
import UserSinceDate from './UserSinceDate';
import UserLocation from './UserLocation';
import UserDescription from './UserDescription';
import UserCardBtn from './UserCardBtn';
import UserHireBtn from './UserHireBtn';
import UserFollowBtn from './UserFollowBtn';

const UserCard = ({user}) => {
    return(
        <section className="user-card-container">
            <UserCardImage user={user} />
            <div className="user-card-content-container">
                <UserCardHeader user={user} />
                <UserSinceDate user={user} />
                <UserLocation user={user} />
                <UserDescription user={user} />
                <div className="btn-badges">
                    <UserCardBtn user={user.followers} btnTxt={'Followers'} btnClass={"user-card-followers-btn"} />
                    <UserCardBtn user={user.following} btnTxt={'Following'} btnClass={"user-card-following-btn"} />
                </div>
                <UserFollowBtn user={user}/>
                <UserHireBtn user={user} />
                
            </div>
        </section> 
    )
}


export default UserCard;