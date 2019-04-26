import React, { Component } from 'react';

class UserOuput extends Component {
  render() {
    return(
      <div>
        <p>This is my firts { this.props.username }</p>
        <p>This is my second { this.props.lastname }</p>
      </div>
    )
  }
}

export default UserOuput;