import React from 'react'

function RepoContributorComponent({ login, contributions, avatar_url }) {
    return (
        <div>
            <hr/>
            <ul>
                <li><img src={avatar_url} alt='avatar' width="50" height="50"></img></li>
                <li>Contributiors Githun name: {login}</li>
                <li>Contributions: {contributions}</li>
            </ul>
        </div>
    )
}

export default RepoContributorComponent