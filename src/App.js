import React, { Component } from 'react';
import './App.scss';
import FormComp from './FormComp';

class App extends Component  {

  state = {
    fname: '',
  };
  
  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
};
  
  render() {
    return (
      <div>
        <h1>Forms with Controlled Components: </h1>
        <FormComp />
      </div>
    );
  }
}

export default App;
