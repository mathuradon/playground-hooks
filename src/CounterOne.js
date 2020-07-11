import React, { useState, useEffect } from 'react'

function CounterOne() {
    const [count, setCount] = useState(0)

    const increaseCounter = () =>{
        setCount(count + 1);
    }    
    return (
        <div>
            <button onClick={increaseCounter} >Counter</button> 
            <form style={{ padding: '5px', fontWeight: 'bold', color: 'blue', margin: '5px', backgroundColor: 'red', width: '13px'}}>{count}</form>           
        </div>
    )
}

export default CounterOne