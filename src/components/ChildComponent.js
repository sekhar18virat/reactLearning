import React from 'react'

function ChildComponent(props) {
    console.log("Inside child comp ")
  return (
    <div>
      <button onClick={() => props.greetComponent("sekhar")}>Click Me</button>
    </div>
  )
}

export default ChildComponent
