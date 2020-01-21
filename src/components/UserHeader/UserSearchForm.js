import React from 'react';


const UserSearchForm = ({username, handleChanges, handleSubmit}) => {
    return(
        <section className="search-form-container">
            <form onSubmit={handleSubmit} className="search-form">
                <input name="username" type="text" className="search-form-input" value={username} onChange={handleChanges} placeholder="Search Github Username" required/>
                <button className="search-form-btn" type="submit">Search</button>
            </form>
        </section>
    )
}

export default UserSearchForm;