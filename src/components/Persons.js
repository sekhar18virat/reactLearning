import React from 'react'

function Persons({person}) {
    console.log(`person Details ${person.name}`)
  return (
    <div>
      <h2> I am {person.name}. I am having age {person.age}. My id is {person.id}</h2>
    </div>
  )
}

export default Persons
