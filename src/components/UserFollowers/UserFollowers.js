import React from 'react';

//css
import './css/followers-styles.css';

//components
import Follower from './Follower';

const UserFollowers = ({followers}) => {
    console.log(followers);
    return(
        <div className="user-followers-container">
            {followers.map((follower, idx) => (
                <div className="follower-container" key={idx}>
                    <Follower follower={follower} />
                </div>
            )
            
            )}
        </div>
    )
}

export default UserFollowers;