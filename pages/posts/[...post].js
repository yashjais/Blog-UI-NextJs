import React from 'react';
// import axios from 'axios'
import Link from 'next/link'

function Post({ post, user }) {
  return(
    <div>
      <h1>Indivisual Post</h1>
      <h3>{post.title}</h3>
      <p>{post.body}</p>
      <span href={`/users/${user.id}`}>written by - <Link href={`/users/${user.id}`}>{user.name}</Link></span>
    </div>
  )
}

/*
getInitialProps receives a single argument called context, it's an object with the following properties:

pathname - Current route. That is the path of the page in /pages
query - Query string section of URL parsed as an object
asPath - String of the actual path (including the query) shown in the browser
req - HTTP request object (server only)
res - HTTP response object (server only)
err - Error object if any error is encountered during the rendering
*/

Post.getInitialProps = async (context) => {
  // const res = await axios.get(`https://jsonplaceholder.typicode.com/posts/${context.query.post[0]}`)
  // const post = res.data
  // const data = {post, user}
  // console.log(post, user)
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${context.query.post[0]}`)
  const post = await res.json()
  const userId = post.userId
  const res1 = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
  const user = await res1.json()
  console.log(user)
  return { post, user }
}


export default Post