import React, { Component } from 'react';
import './UserInput.css'

class UserInput extends Component {
    render() {
        return (
          <input type="text" className="UserInput" onChange={this.props.trigger} value={this.props.value} />
        );
      }
}

export default UserInput;