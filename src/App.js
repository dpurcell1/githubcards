import React, { Component } from 'react';
import DisplayProfile from './components/displayProfile/DisplayProfile'
import './App.css';
import Button from 'react-bootstrap/Button';

class App extends Component {
  constructor(props){
    super(props)

    this.state = {
      user: {},
      active: false,
    }
  } 

handleToggle = () => {  
  fetch("https://api.github.com/users/octocat")
  .then((response) => response.json())
    .then((response) => {
      this.setState((state) => {
        return {
          ...state,
          user: response,
          active: !state.active 
        }                             
      })      
    })      
}
  render() {
    return (
      <div className="App">
        <DisplayProfile 
          user = {this.state.user}
          active = {this.state.active} 
          button = {this.handleToggle}
        />
        <Button onClick = {this.handleToggle}>View/Hide Github Profile!</Button>
       
      </div>
    );
  }
}

export default App;