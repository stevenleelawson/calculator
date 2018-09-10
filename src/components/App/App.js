import React, { Component } from 'react';
import './App.css';
import ButtonContainer from '../ButtonContainer';
import Display from '../Display';

class App extends Component {
  constructor() {
    super();
    this.state = {
      numbers: [],
    }
  }

  handleClick = (e) => {
    let value = e.target.getAttribute('value');
    this.setState({
      numbers: [...this.state.numbers, value]
    });
  }

  handleEvaluateClick = () => {
    let joinedNums = this.state.numbers.join('');
    let result = eval(joinedNums)

    this.setState({
      numbers: [result]
    });
  }

  handleClearClick = () => {
    this.setState({
      numbers: [],
    });
  }

  handleDelClick = () => {
    this.state.numbers.pop()
    this.setState({
      numbers: [...this.state.numbers]
    });
  }

  handleSqClick = () => {
    let joinedNums = Math.sqrt(this.state.numbers.join(''))
    this.setState({
      numbers: [joinedNums]
    });
  }

  handlePercentClick = () => {
    const joinedNums = this.state.numbers.join('');
    const percentNum = joinedNums * .01;
    this.setState({
      numbers: [percentNum]
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Steven's Calculator</h1>
          <Display displayedNumbers={this.state.numbers} />
        </header>
        <div>
          <div  className="container">
            <ButtonContainer
              handleClick={this.handleClick} handleEvaluateClick={this.handleEvaluateClick}
              handleClearClick={this.handleClearClick}
              handleDelClick={this.handleDelClick}
              handleSqClick={this.handleSqClick}
              handlePercentClick={this.handlePercentClick}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
