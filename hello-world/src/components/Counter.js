import React, { Component } from 'react'

export class Counter extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         count: 0
      }
    }

    incrementedCount(){
        // this.state.count = this.state.count + 1
        this.setState({
            count: this.state.count + 1
        })
        console.log(this.state.count)
    }

  render() {
    return (
        <>      
    <div>Count - {this.state.count}</div>
    <button onClick={() => this.incrementedCount()}>Increment</button>
      </>

    )
  }
}

export default Counter