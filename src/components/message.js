import React,{Component} from 'react';

class Message extends Component{

    constructor(){
        super();
        this.state = {
            message : "Welcome Visitor"
        }
    }

    changeMessageStatus() {
        this.setState(
            {message : "You are in"}
        )
    }

    render(){
        return( 
        <div>
        <h1>{this.state.message}</h1>
        <button onClick={ () => this.changeMessageStatus()}>ClickMe</button>
        </div>
    )
}
}

export default Message;