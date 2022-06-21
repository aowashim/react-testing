import React, { useEffect, useState } from 'react'

export default function Async() {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(res => res.json())
      .then(data => setPosts(data))
  }, [])

  return (
    <div>
      {posts.map(val => (
        <li key={val.id}>{val.title}</li>
      ))}
    </div>
  )
}
