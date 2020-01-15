import React from 'react';


const UserSearchForm = ({username, handleChanges, handleSubmit}) => {
    return(
        <section className="search-form-container">
            <form onSubmit={handleSubmit}>
                <input name="username" type="text" className="text" value={username} onChange={handleChanges}/>
                <button type="submit">Search</button>
            </form>
        </section>
    )
}

export default UserSearchForm;