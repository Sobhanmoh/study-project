import React, { useEffect, useState } from 'react'

const ExampleTree = () => {
    const [name, setName] = useState(() =>{
        const savedName = localStorage.getItem('name')
        return savedName ? JSON.parse(savedName) : ""
    })

    const handleClear = () => setName("")

    useEffect(() =>{
        localStorage.setItem('name', JSON.stringify(name))
        }, [name])

    const handleChange = (event) => {
        setName(event.target.value)
    }

    
  return <div>
    <h1>Your Name: {name}</h1>
    <input type='text'
     value={name} 
     onChange={handleChange} 
     placeholder='Enter Your Name' />
    <button onClick={handleClear}>Clear</button>
    </div>
  
}

export default ExampleTree