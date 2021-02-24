import { Octokit } from "@octokit/core";
import React, { useState, useEffect } from 'react';

function  App () {
  const [data, setData] = useState([]);
  const octokit = new Octokit();
  
  useEffect( () => {
    GetGitHubRepos()
  }, [])

  async function GetGitHubRepos() {
    const result =  await octokit.request('GET /orgs/{org}/repos', {
      org: 'getndazn',
    })
    console.log(result.data);
    setData(result.data);
  } 

    return (
        (data) ?  <p>it exist</p>: <p>not yet</p>
    );
}

export default App

