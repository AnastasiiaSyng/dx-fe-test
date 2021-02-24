// import React, { useState, useEffect }  from 'react';
// import { Octokit } from "@octokit/core";


function  RepoComponent ({ name, description, language, pushed_at, fork, contributors_url }) {
  // const [contributors, setContributors] = useState([]);
  // const octokit = new Octokit();

  //     useEffect( () => {
  //       GetGitHubContributors()
  //     }, [])

  //     async function GetGitHubContributors() {
  //       const result = await octokit.request('GET'+{contributors_url})
  //       console.log(result);
  //       return result 
  //     } 


  return (
    <div>
      <ul>
        <li>{ name }</li>
        <li>{description}</li>
        <li>{language}</li>
        <li>{pushed_at.substring(0,10)}</li>
        {fork ? <li>fork</li> : null}
      </ul>
    </div>
  )
}

export default RepoComponent

 