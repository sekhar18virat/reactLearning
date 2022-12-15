import React, { Component } from 'react'
import ChildComponent from './ChildComponent'

 class Parent extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         parent : "Parent"
      }
      this.greetParentComponent = this.greetParentComponent.bind(this)
    }
    
    greetParentComponent(name){
        console.log("hi Hello ")
        alert(`Hello ${this.state.parent} ${name}`)
    }

  render() {
    return (
      <div>
        <ChildComponent greetComponent = {this.greetParentComponent} />
      </div>
    )
  }
}

export default Parent
