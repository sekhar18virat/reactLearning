import React, { Component } from 'react'

class Counter extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         count : 0
      }
    }

    incrementCount(){
        // this.setState({
        //     count : this.state.count+1
        // }, () => {
        //     console.log("this is async function so wee need to execute code here ", this.state.count)
        // })
        // console.log("Since setState is Async call we should not write code here ", this.state.count)

        // Always use prevState since setState is Async call
        this.setState( prevState => ({
            count : prevState.count +1
        }), () => {
            console.log(this.state.count)
        })
        // console.log(this.state.count)
    }

    incrementCountFive(){
        // Here all the setState Calls will be executed all at once so the count will still be 1.
        this.incrementCount();
        this.incrementCount();
        this.incrementCount();
        this.incrementCount();
        this.incrementCount();
    }
    
  render() {
    return (
        <div>
      <div>
        count -{this.state.count}
      </div>
      <button onClick={ () => this.incrementCountFive()}>Counter</button>
     </div> 
    )
  }
}

export default Counter
