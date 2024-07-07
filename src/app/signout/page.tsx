"use client"
import { signOut } from 'next-auth/react'
import React from 'react'

const SignOut = () => {
  return (
    <div>
        <h4>SignOut</h4>
        <button onClick={() => signOut({callbackUrl: '/users' })}>  Click to sign out</button>
    </div>
  )
}

export default SignOut