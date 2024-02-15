import React from 'react'
import { useState } from 'react'
import { useLocalStorage } from './useLocalStorage';

const Local = () => {
    const [value , setValue] = useState('');
    const {setItem , getItem , removeItem} = useLocalStorage('value');

    
  return (
    <div>
        <input type='text' value={value} onChange={(e)=> setValue(e.target.value)}/>
        <button onClick={() => setItem(value)}>Set</button>
        <button onClick={() => console.log(getItem())}>Get</button>
        <button onClick={removeItem}>Remove</button>
    </div>
  )
}

export default Local