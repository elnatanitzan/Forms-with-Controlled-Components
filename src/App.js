import React, { Component } from 'react';
import './App.scss';
import FormComp from './FormComp';

class App extends Component  {

  state = {
    first: '',
    color: ''
  };

  handleChange = (event) => {
      const { name, value } = event.target;
      this.setState({ [name]: value });
  };
  
  render() {
    return (
      <div>
        <h1>Forms with Controlled Components: </h1>
        <FormComp 
        first={this.state.first}
        color={this.state.color}
        handleChange={this.handleChange}/>
      </div>
    );
  }
}

export default App;
