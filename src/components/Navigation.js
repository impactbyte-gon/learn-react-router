import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const StyledNav = styled.nav`
  a {
    text-decoration: none;
    margin-right: 10px;
  }
`

const Navigation = () => {
  return (
    <StyledNav>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/help">Help</Link>
    </StyledNav>
  )
}

export default Navigation
