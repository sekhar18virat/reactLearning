import React from 'react'

// function greet(){
//     return <h1> Hi Sekhar Welcome to Greet </h1>
// }
const greet = (props) => {
    return <h1> Hi {props.name} Welcomes you with value {props.value}</h1>
}

export  default greet;