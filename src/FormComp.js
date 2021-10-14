import React, { Component } from 'react'

export default class FormComp extends Component {
    
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
            <form>
                <label>Conrolled Input:
                    <input
                        name="first"
                        type="text"
                        maxLength="15"
                        placeholder="Write your name.."
                        value={this.state.first}
                        onChange={this.handleChange}
                    />
                </label>
                <label> Dynamic Color: 
                    <select name="color" value={this.state.color} onChange={this.handleChange}>
                        <option selected hidden>Pick your favorite Color:</option>
                        <option value="default">Default</option>
                        <option value="red">Red</option>
                        <option value="blue">Blue</option>
                        <option value="yellow">Yellow</option>
                        <option value="green">Green</option>
                    </select>
                </label>
                <div className="dynamic-color">
                    <div style={{background: this.state.color === "default" ? "" : this.state.color}}>
                    <h3>{this.state.first}</h3>
                    </div>
                </div>
            </form>
        );
    }
}
