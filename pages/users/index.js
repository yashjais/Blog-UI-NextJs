import React, { useState, useEffect } from 'react';
import Link from 'next/link'
// import axios from 'axios'

function Users({ users }) {

  return(
    <div>
      <h1>Users</h1>
      <ul>
        {
          users.map(user => {
            return(
              <li key={user.id}>
                <Link href={`/users/${user.id}`}>{user.name}</Link>
              </li>
            )
          })
        }
      </ul>
    </div> 
  )
}

Users.getInitialProps = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users')
  const users = await res.json()
  return { users }
}

export default Users