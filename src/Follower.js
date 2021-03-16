import React from 'react'
// this page displays followers

const Follower = ({ login, avatar_url, html_url }) => {
  return (
    <article className='card'>
      <img src={avatar_url} alt={login} />
      <h4>{login}</h4>
      <a href={html_url} className='btn'>
        View profile
      </a>
    </article>
  )
}

export default Follower
