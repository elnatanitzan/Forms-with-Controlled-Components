import React, { Component } from 'react'

export default class FormComp extends Component {

    render() {
        return (
            <form>
                <label>Conrolled Input:
                    <input
                        name="first"
                        type="text"
                        maxLength="15"
                        placeholder="Type your name.."
                        // Here we get the state value from father (App.js):
                        value={this.props.first}
                         // Here we lift state from this comp to father (App.js):
                        onChange={this.props.handleChange}
                    />
                </label>
                <label> Dynamic Color: 
                    <select name="color" value={this.props.color} onChange={this.props.handleChange}>
                        <option defaultValue hidden>Pick your favorite Color:</option>
                        <option value="default">Default</option>
                        <option value="red">Red</option>
                        <option value="blue">Blue</option>
                        <option value="yellow">Yellow</option>
                        <option value="green">Green</option>
                    </select>
                </label>
            </form>
        );
    }
}
