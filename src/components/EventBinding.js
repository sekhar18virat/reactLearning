import React, { Component } from 'react'

 class EventBinding extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         message : "Click Me to See Magic"
      }
      this.contentChanging = this.contentChanging.bind(this);
    }

    contentChanging(){
        console.log(this)
        this.setState({
            message : "Boom Magic Happened"
        })
    }
    
  render() {
    return (
      <div>
        <div>{this.state.message}</div>
        {/* <button onClick={this.contentChanging.bind(this)}> clickMe</button>
         */}
         <button onClick={ this.contentChanging}>clickMe</button>
      </div>
    )
  }
}

export default EventBinding
