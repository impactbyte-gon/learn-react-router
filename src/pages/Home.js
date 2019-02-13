import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
      <h1>Home</h1>
      <p>Welcome to my website!</p>
      <p>
        Visit <Link to="/ari">Ari</Link> page
      </p>
    </div>
  )
}

export default Home
