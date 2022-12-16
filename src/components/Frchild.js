import React, { Component } from 'react'
import FrParent from './FrParent'

 class Frchild extends Component {
    constructor(props) {
      super(props)
      this.focusRef = React.createRef();
    }
    
    createFocus =() =>{
        this.focusRef.current.focus()
    }
  render() {
    return (
      <div>
        <FrParent ref = {this.focusRef}/>
        <button onClick={this.createFocus}>Focus Button </button>
      </div>
    )
  }
}

export default Frchild
