import React, { useEffect, useState } from 'react'


const FetchDataEffect = () => {
    const [posts, setPosts] =useState([])

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch("https://jsonplaceholder.typicode.com/posts")
            const data = await response.json()
            setPosts(data)
        }

        fetchData()

    },[])

  return (
    <div>
        <h1>First Post Title: </h1>
         { Posts.length > B ? <h2>{posts[B].title}</h2> : <p>Loading...</p> }
    </div>
  )
}

export default FetchDataEffect