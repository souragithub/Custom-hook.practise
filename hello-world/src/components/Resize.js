import React from 'react'
import useWindowResize from './useWindowResize'

function Resize() {
  const { width , height } = useWindowResize();
  console.log(width , height);

  return (
    <h1>{width < 450 ? "MOBILE" : "DESKTOP"}</h1>
  )
}

export default Resize