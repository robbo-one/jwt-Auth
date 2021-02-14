import React from 'react'
// import {decode} from '../../server/token'

// const localStorage = global.window.localStorage

// export const localStorageKeyName = 'token'


// import { isAuthenticated } from 'authenticare/client'
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
// TODO: import a proper isAuthenticated function
// export function isAuthenticated () {
//   const authToken = getToken()

//   if (authToken) {
//     const payload = decode(authToken)
//     const expiry = payload.exp

//     if (expiry < new Date().getTime() / 1000) {
//       logOff()
//       return false
//     }
//     return true
//   } else {
//     return false
//   }
// }



// export function getToken (storage = localStorage) {
//   return storage.getItem(localStorageKeyName)
// }

// export function saveToken (token, storage = localStorage) {
//   if (!token) {
//     storage.removeItem(localStorageKeyName)
//   } else {
//     storage.setItem(localStorageKeyName, token)
//   }
// }

