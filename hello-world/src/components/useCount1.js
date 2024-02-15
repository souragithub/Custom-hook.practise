import { useState } from 'react'

const useCount1 = (initialvalue = 0) => {
    const [count, setCount] = useState(initialvalue);

    function Increment() {
        setCount(count + 1);
    }

    function Decrement() {
        setCount(count - 1);
    }

  return (
    [count , Increment , Decrement ]
  )
}

export default useCount1