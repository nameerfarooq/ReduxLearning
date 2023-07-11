import { useState } from 'react'

const Counter = () => {
    const [count, setcount] = useState(0)
    return (
        <div>
            <button onClick={() => { setcount(count - 1) }} className="btn dark">-</button>
            {count}
            <button onClick={() => { setcount(count + 1) }} className="btn dark">+</button>
        </div>
    )
}

export default Counter