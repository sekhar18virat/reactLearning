import React, { Component } from 'react'

export class RefsUsage extends Component {
    constructor(props) {
      super(props)
      this.inputRef = React.createRef()
      this.state = {
        name : ''
      }
      this.changedTextValue = this.changedTextValue.bind(this)
      this.alertValue = this.alertValue.bind(this)
      this.componentDidMount = this.componentDidMount.bind(this)
    }

    componentDidMount(){
        this.inputRef.current.focus()
        console.log(this.inputRef)
    }
    alertValue(){
        alert(this.state.name)
    }

    changedTextValue = (event) =>{
        this.setState({
            name : event.target.value
    })
    }
    
  render() {
    return (
      <div>
        <input type = "text" onChange = {this.changedTextValue} ref = {this.inputRef} />
        <button onClick = {this.alertValue}>click Me</button>
      </div>
    )
  }
}

export default RefsUsage
