import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import UserInput from './UserInput';
import UserOutput from './UserOutput';

class App extends Component {
  state = {
    users: [
      {username:"Roope", age: 55},
      {username:"Leo", age: 45}
    ]
  };

  changeUserState = (event) => {
    this.setState(
      {users: [
        {username:event.target.value, age: 55},
        {username:"Leo", age: 45}
      ]}
    );
  }

  render() {
    return (
      <div className="App">
        <UserInput trigger={this.changeUserState} value={this.state.users[0].username} />
        <UserOutput username={this.state.users[0].username} age={this.state.users[0].age} /> 
        <UserOutput username={this.state.users[1].username} age={this.state.users[1].age} />        
      </div>
    );
  }
}

export default App;
