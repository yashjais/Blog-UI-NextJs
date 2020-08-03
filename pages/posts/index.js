import React, { useState, useEffect } from 'react';
import Link from 'next/link'
// import axios from 'axios'

function Posts({ posts }) {
  console.log(posts)
  return (
    <div>
      <h1>Posts page</h1>
      <ul>
        {
          posts.map(post => {
            return (
              <li key={post.id}>
                {post.title} -- <Link href={{ pathname: `/posts/${post.id}` }}>
                  <a>{post.body}</a>
                </Link>
              </li>
            )
          })
        }
      </ul>
    </div>
  )
}

Posts.getInitialProps = async (context) => {
  console.log('in the posts.getInitialProps')
  console.log(context.query)
  // const res = await axios.get('https://jsonplaceholder.typicode.com/posts')
  // const posts = res.data
  // console.log(posts)
  if (context.query.userId) {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${context.query.userId}`)
    const posts = await res.json()
    console.log('posts', posts.length)
    return { posts }
  } else {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts`)
    const posts = await res.json()
    console.log('posts', posts.length)
    return { posts }
  }
}

export default Posts