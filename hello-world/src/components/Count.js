import React, { useState } from 'react'
import useCount1 from './useCount1';

const Count = () => {
 const [ count , Increment , Decrement ] = useCount1(10);
  return (
    <>
    <div>{count}</div>
    <button onClick={Increment}> Increment </button>
    <button onClick={Decrement}> Decrement </button>
    </>
    )
}

export default Count