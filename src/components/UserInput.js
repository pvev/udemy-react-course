import React, { Component } from 'react';

class UserInput extends Component {
  render() {
    return (
      <div>
        <p>{this.props.username}</p>
        <input type="text" onChange={this.props.changeUser}/>
      </div>
    )
  }
}

export default UserInput;