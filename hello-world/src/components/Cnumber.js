import React from 'react'
import { useEffect, useState } from 'react'
import useCount from './useCount';

const Cnumber = () => {
 const [count, setCount] = useState(0);
 useCount(count);
//  useEffect(()=>{
//     document.title = count + " number of clicks";
//  })
  return (
    <div>
        <button onClick={()=>setCount(count + 1)}>Clicks</button>
    </div>
  )
}

export default Cnumber