import React, { Component } from 'react'

class Counter extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         count : 0
      }
    }

    incrementCount(){
        this.setState({
            count : this.state.count+1
        }, () => {
            console.log("this is async function so wee need to execute code here ", this.state.count)
        })
        console.log("Since setState is Async call we should not write code here ", this.state.count)
    }
    
  render() {
    return (
        <div>
      <div>
        count -{this.state.count}
      </div>
      <button onClick={ () => this.incrementCount()}>Counter</button>
     </div> 
    )
  }
}

export default Counter
