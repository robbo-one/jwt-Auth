import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { logOff } from 'authenticare/client'

import { IfAuthenticated, IfNotAuthenticated } from './Authenticated'

const NavGroup = styled.nav`
  float: right;
`

const NavLink = styled(Link)`
  margin-right: 30px;
`
export default function Nav () {
  return (
    <>
      <div>
        <Link to='/'>Home</Link>
        <br/>
        <IfAuthenticated>
          <Link to='#' onClick={logOff}>Log off</Link>
          <br/>
        </IfAuthenticated>
        <IfNotAuthenticated>
          <Link to='/register'>Register</Link>
          <br/>
          <Link to='/signin'>Sign in</Link>
          <br/>
        </IfNotAuthenticated>
      </div>
      <h1>Fruit FTW!</h1>
    </>
  )
}
