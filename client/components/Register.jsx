import React, { useState } from 'react'
import { isAuthenticated, register } from 'authenticare/client' 
import { baseApiUrl as baseUrl } from '../config'
import { GridForm, ColOne, ColTwo, Button } from './Styled'
import { Redirect } from 'react-router-dom'


function Register (props) {
  const [form, setForm] = useState({
    username: '',
    password: ''
  })

  function handleChange (e) {
    const { name, value } = e.target
    setForm({
      ...form,
      [name]: value
    })
  }

  function handleClick (e) {
    e.preventDefault()
    console.log('in click handler')
    const { username, password } = form
    register({ username, password}, { baseUrl })
      .then(() => {
        if(isAuthenticated()) {
          console.log('authenticated')
          this.props.history.push('/')
        } 
      })
  }

  return (
    <>
      <h2>Register</h2>
      <GridForm>
        <ColOne htmlFor='username'>Username:</ColOne>
        <ColTwo type='text'
          id='username'
          name='username'
          value={form.username}
          onChange={handleChange} />

        <ColOne htmlFor='password'>Password:</ColOne>
        <ColTwo type='password'
          id='password'
          name='password'
          value={form.password}
          onChange={handleChange} />

        <Button type='button' onClick={handleClick}>Register</Button>
      </GridForm>
    </>
  )
}

export default Register
