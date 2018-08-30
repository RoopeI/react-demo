import React, { Component } from 'react';


class UserOutput extends Component {
    render() {
        const column = {
            width: '10%',
            padding: 5,
            display: 'inline-block'
        };
        return (
          <div className="UserOutput">
            <p style={column}>{this.props.username}</p>
            <p style={column}>{this.props.age}</p>
          </div>
        );
      }
}

export default UserOutput;