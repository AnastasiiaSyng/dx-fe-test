import React from 'react';

function  RepoComponent ({ name, description, language, pushed_at, fork }) {
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