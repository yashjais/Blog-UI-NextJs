import React from 'react'
import Link from 'next/link'

function User({ user }) {
  return (
    <div>
      <h1>User - {user.name}</h1>
      <h3>UserName - {user.username}</h3>
      <h3>Email - {user.email}</h3>
      <Link href={{
        pathname: `/posts`, query: { user: user.id }
      }}><a>See Posts by this User</a></Link>
    </div>
  )
}

User.getInitialProps = async (context) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${context.query.user[0]}`)
  const user = await res.json()
  console.log(user)
  return { user }
}

export default User