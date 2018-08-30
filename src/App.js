import React, { Component } from 'react';
import './App.css';

import ValidationComponent from './ValidationComponent';
import CharComponent from './CharComponent';

class App extends Component {

  state = {
    text : []
  }

  inputChange = (event) => {
    const value =  event.target.value.split('');
    this.setState({text: value});
  }

  textClick = (index) => {
    const text = [...this.state.text];
    text.splice(index, 1);
    this.setState({text: text});
  }

  render() {
    const chars = this.state.text.map((element, index) => {
      return <CharComponent char={element} key={index} click={() => this.textClick(index)} />
    });
    const value = this.state.text.join('');
    return (
      <div className="App">
        <input type="text" onChange={(event) => this.inputChange(event)} value={value} />
        <ValidationComponent  length={this.state.text.length} />
        {chars}
      </div>
    );
  }
}

export default App;
