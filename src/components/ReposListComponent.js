import { Octokit } from "@octokit/core";
import React, { useState, useEffect } from 'react';
import RepoComponent from './RepoComponent'

function  ReposListComponent () {
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
    <div>
      {data.map(({id, ...categoriesProps })=> (
        < RepoComponent  key={id} {...categoriesProps}/> 
      ))}
    </div>
  );
}


export default ReposListComponent