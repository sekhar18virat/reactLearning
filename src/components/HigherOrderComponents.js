import React, { Component } from 'react'

class HigherOrderComponents extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         count : 0
      }
      this.countIncrement = this.countIncrement.bind(this)
    }
    
    countIncrement  = () =>{
        this.setState(prevState => {
           return {count : prevState.count + 1}
        })
    }
  render() {
    return (
      <div>
        {/* const count = this.state.count */}
        <button onClick={this.countIncrement}> clicked Me {this.state.count} times</button>
      </div>
    )
  }
}

export default HigherOrderComponents
