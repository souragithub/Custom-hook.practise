import { useState, useEffect } from "react"
import React from 'react'

const useWindowResize = () => {
    const [windowSize , setWindowSize] = useState({ width: undefined , height: undefined});

    useEffect(()=> {

    function handleresize(){
     setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight
     })
    }

    window.addEventListener("resize" , handleresize) ;

    handleresize();

    return () => window.removeEventListener("resize", handleresize);
    }, []);

  return (
    windowSize
  )
}

export default useWindowResize