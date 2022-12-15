import React from 'react'
import Persons from './Persons'

function NamedLists() {
    const names = ["sekhar", "virat", "rocky"]
    const persons = [{
        id : "hi",
        name : "Sekhar",
        age : 23
    },
    {
        id : "hi",
        name : "Sekhar1",
        age : 23
    },{
        id : "hi",
        name : "Sekhar2",
        age : 23
    }
]

const personList = persons.map(person => (<Persons person = {person}></Persons>))

  return (
    <div>
        {/* { names.map(name => <h2>{name}</h2>)}       */}
    {personList}
    </div>
  )
}

export default NamedLists
