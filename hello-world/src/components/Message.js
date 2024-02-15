import React, { Component } from 'react'

class Message extends Component {
constructor(){
    super()
    this.state = {
        message: "Welcome Visitor"
    }

    //this.changeMessage = this.changeMessage.bind(this)
}

//  changeMessage(){
//     console.log(this)
//     this.setState({
//         message: "Thank you for subscribing"
//     })
//  }

changeMessage = () => {
    console.log(this)
    this.setState({
        message: "Thank you for subscribing"
    })
 }

    render() {
        return (
            <div>
                <h1>{this.state.message}</h1>
                {/* <button onClick={this.changeMessage.bind(this)}>Subscribe</button>*/}
                {/* <button onClick={() => this.changeMessage()}>Subscribe</button> */}
                <button onClick={this.changeMessage}>Subscribe</button>
            </div>
            
        )
    }
}

export default Message