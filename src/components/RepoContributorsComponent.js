import React from 'react'

function RepoContributorsComponent({ login, contributions, avatar_url }) {
    return (
        <div>
            <ul>
                <li><img src={avatar_url} alt='avatar' width="50" height="50"></img></li>
                <li>Contributiors Githun name: {login}</li>
                <li>Contributions: {contributions}</li>
            </ul>
        </div>
    )
}

export default RepoContributorsComponent