import React, { Component } from 'react'

 class FormValue extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       userName : '',
       skills : ''
    }
    this.changedStateName = this.changedStateName.bind(this)
    this.changedStateSkills = this.changedStateSkills.bind(this)
  }
  
  changedStateName = (event) =>{
    this.setState({
      userName : event.target.value
    })
  }

  changedStateSkills = (event) =>{
    this.setState({
      skills : event.target.value
    })
  }
  
  frontEndSkillChanged =(event) =>{
    this.setState({
      frontEndSkillChanged : event.target.value
    })
  }

  alertSubmitValues = () =>{
    alert(`${this.state.skills} ${this.state.frontEndSkill} ${this.state.userName}`)
  }
  render() {
    
    return (
        <form onSubmit={this.alertSubmitValues}>
      <div>
        <div>
            <label> User Name </label>
            <input type = "text" value = {this.state.userName} onChange = {this.changedStateName}></input>
            </div>
            <div>
              <label> Skills </label>
              <input type = "textArea" value = {this.state.skills} onChange = {this.changedStateSkills}></input>
            </div>
            <div>
              <select value = {this.state.frontEndSkill} onChange = {this.frontEndSkillChanged}>
                <option value = "React">React</option>
                <option value = "Angular">Angular</option>
              </select>
            </div>
            <button type='submit'>Submit</button>
      </div>
      </form>
      )
  }
}

export default FormValue
