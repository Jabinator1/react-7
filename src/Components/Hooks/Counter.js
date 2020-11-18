import React, { useState, useEffect } from 'react'

const Counter = () => {
    const [count, setCount] = useState(0)

    useEffect(() => {
        console.log("ComponentDidMount my dude")
    }, [])

    useEffect(() => {
        console.log("ComponentDidUpdate my dude")
    }, [count])
    
    const addCount = () => {
        setCount(count + 1)
    }

    const subtractCount = () => {
        setCount(count - 1)
    }

    return (
        <div>
            <h1>{count}</h1>
            <button onClick={addCount}>Add 1</button>
            <button onClick={subtractCount}>Subtract 1</button>
        </div>
    )
}

export default Counter