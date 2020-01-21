import React from 'react';

const Follower = ({follower}) => {
    return(
        <>
            <div className="follower-img-container">
                <img src={follower.avatar_url} alt={follower.login}/>
            </div>
            <h1 className="follower-heading">
                <a className="follower-link" href={follower.html_url} target="_blank"  rel="noopener noreferrer">
                    {follower.login}
                </a>
            </h1>
        </>
    )
}

export default Follower;