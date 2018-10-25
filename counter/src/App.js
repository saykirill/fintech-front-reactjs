import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      step: 1, 
      init: 0, 
      max: 10, 
      count: 0, 
      message: 'Reached max or -max'  
    };
  }

  up = () => {
    let next = this.state.count + this.state.step;
    if ((next) <= this.state.max) {
      this.setState({
        count: next
      });
    }
    else {
      alert(this.state.message);
    }
  }

  down = () => {
    let next = this.state.count - this.state.step;
    if ((next) >= -this.state.max) {
      this.setState({
        count: next
      });
    }
    else {
      alert(this.state.message);
    }
  }

  reset = () => {
    this.setState(state => ({
      count: state.count = state.init
    }));
  }

  changeStep = e => {
  this.setState({
    step: Number(e.target.value)
  });
}

  changeInit = e => {
  this.setState({
    init: Number(e.target.value)
  });
}

  changeMax = e => {
  this.setState({
    max: Number(e.target.value)
  });
}
  render() {
    return (
      <div class='styleform'>
        <h3>Counter</h3>
        <p>Count: {this.state.count}</p>
        <br/>
        <button id='buttonUp' onClick={this.up}>Up</button>
        <button id='buttonDown' onClick={this.down}>Down</button>
        <button id='buttonReset' onClick={this.reset}>Reset</button>
        <form >
        <label>Step:</label>
            <input
              type='number'
              id='formStep'
              maxLength='10'
              value={this.state.step}
              onChange={this.changeStep}
            /><br/>
          <label>Init:    </label>
            <input
              type='number'
              id='formInit'
              maxLength='10'
              value={this.state.init}
              onChange={this.changeInit}
            /><br/>
          <label>Max:</label>
            <input
              type='number'
              min='0' //ограничем max с 0
              id='formMax'
              maxLength='10'
              value={this.state.max}
              onChange={this.changeMax}
            /><br/>
          </form>
      </div>
      );
  }
}

export default App;
