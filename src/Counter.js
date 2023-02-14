import React from 'react'


export default class Counter extends React.Component {
    state={
        counter:0
    }
    increment=()=>{
        this.setState({counter:this.state.counter+1})
    }
    decrement=()=>{
        this.setState({counter:this.state.counter-1})
    }
  render() {
    return (
      <div className="cnn" >
        <p>{this.state.counter}</p>
        <button className="s1" onClick={this.increment}>Increment</button>
        <button className="s2" onClick={this.decrement}>Decrement</button>
      </div>
    )
  }
}
