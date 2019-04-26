import React, { Component } from 'react';
import UserInput from './components/UserInput';
import UserOutput from './components/UserOutput';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      username: "Angelica",
      lastname: "Cuellar"
    }
    this.changeUser = this.changeUser.bind(this);
  }

  changeUser(e) {
    this.setState({username: e.target.value});
  }

  render() {
    return (
      <div className="App">
        <UserInput changeUser={this.changeUser} username={this.state.username}></UserInput>
        <UserOutput username={this.state.username} lastname={this.state.lastname}></UserOutput>
      </div>
    );
  }
}

export default App;
