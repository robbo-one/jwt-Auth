import React from 'react'

// TODO: import a proper isAuthenticated function
import { isAuthenticated } from 'authenticare/client'

export function IfAuthenticated ({ children }) {
  return isAuthenticated()
    ? <>{ children }</>
    : null
}

export function IfNotAuthenticated ({ children }) {
  return !isAuthenticated()
    ? <>{ children }</>
    : null
}
