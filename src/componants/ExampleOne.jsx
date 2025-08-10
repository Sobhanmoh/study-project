import React, { useState } from 'react'

const ExampleOne = () => {
  const [count, setCount] = useState(() => {
    const initialCount = 10
    return initialCount
  })

  const Increment = () => {
    setCount((prevCount) => prevCount + 1)
  }

  return <div>
    <h1>Count {count}</h1>
    <button onClick={Increment}>Increment</button>
  </div>
  
}

export default ExampleOne