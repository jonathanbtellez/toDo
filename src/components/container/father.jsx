import React, { useState } from 'react'
import Child from '../pure/child'

export const Father = () => {

    const [name, setName] = useState('Martin');

  const showMessage = (text)=>{
    alert(`Message received: ${text}`);
  } 

  const updateName = (newName) =>{
    setName(newName)
  }

  return (
    <div style={{background: 'tomato', padding:'10px'}}>
        {/* To use event in children we can use props that need be equals to function in the parents */}
        
        <Child name={name} send={showMessage} update={updateName}></Child>
    </div>
  )
}
