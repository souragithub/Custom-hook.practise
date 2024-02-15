import React from 'react'
import { useEffect } from 'react'

const useCount = (props) => {
    useEffect(()=> {
        document.title = props + " number of clicks";
    })
//   return (
//     <div>useCount</div>
//   )
}

export default useCount