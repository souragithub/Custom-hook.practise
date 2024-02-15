import React from 'react'
import { useState } from 'react'

// const Profile = (props) => {
//   const {name} = props;
//   return (
//     <div>
//     <h1>Hello {name}</h1>
//     </div>
//   )
// }

// export default Profile


export default function Profile({name}){
  const [data, setData] = useState("");
  return (
    <>
      <h1 title='name' data-testid="name-2">Hello {name}</h1>
      <h3 title='Animal'>Cats</h3>
      {/* <textarea placeholder='Write something here' title='text-input'/> */}
      <input value={data} type='text' onChange={(e) => setData(e.target.value)}/>
    </>
  )
}