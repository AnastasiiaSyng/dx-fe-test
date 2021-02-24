import React, { useState }  from 'react';
import { Octokit } from "@octokit/core";
import RepoContributorsComponent from './RepoContributorsComponent'


function  RepoComponent ({ name, description, language, pushed_at, fork }) {

  const [contributors, setContributors] = useState([]);
  const [show, setShow] = useState(false)

  const token = process.env.REACT_APP_API_KEY

  const octokit = new Octokit({ auth: token });

  async function GetGitHubContributors() {
    const result = await octokit.request('GET /repos/{owner}/{repo}/contributors', {
      owner: "getndazn",
      repo: name
    })
    console.log(result.data);
    setContributors(result.data)
  } 

  function getData() {
      setShow(prevState => !prevState)

      if (contributors.length === 0) {
        GetGitHubContributors()
      }
  }

  return (
    <div>
      <ul>
        <li> Repo name: {name}</li>
        <li>Description: {description}</li>
        <li>Repo main programming language: {language}</li>
        <li>Last update: {pushed_at.substring(0,10)}</li>
        {fork ? <li>It is fork</li> : null}
      </ul>
      <button onClick={() => getData()}>See contributors</button>

      <div>
        { (contributors.length > 0 && show)
          ?  contributors.map(({id, ...categoriesProps}) => (
            < RepoContributorsComponent key={id} {...categoriesProps} />)) 
          : null
        }
      </div>
     
    </div>
  )
}

export default RepoComponent

