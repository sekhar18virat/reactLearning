import React from 'react'

function FunctionEventHandling() {
    function eventhandling(){
        console.log("Event is Handled here ")
    }
  return (
    <div>
      {/*  We should not pass eventhandling() like this since it will considered as funciton call so we shouldnot pass like that. */}
      <button 
      onClick={eventhandling}>clickMe</button>
    </div>
  )
}



export default FunctionEventHandling
