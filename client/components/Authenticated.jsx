// import React from 'react'

// // TODO: import a proper isAuthenticated function
// const isAuthenticated = () => true

// export function IfAuthenticated ({ children }) {
//   return isAuthenticated()
//     ? <>{ children }</>
//     : null
// }

// export function IfNotAuthenticated ({ children }) {
//   return !isAuthenticated()
//     ? <>{ children }</>
//     : null
// }

import React from 'react'
import { isAuthenticated } from 'authenticare/client'

export function IfAuthenticated ({ children }) {
  return isAuthenticated() ? children : null
}

export function IfNotAuthenticated ({ children }) {
  return !isAuthenticated() ? children : null
}