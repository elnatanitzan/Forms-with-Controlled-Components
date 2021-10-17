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
                        placeholder="Write your name.."
                        value={this.props.first}
                        onChange={this.props.handleChange}
                    />
                </label>
                <label> Dynamic Color: 
                    <select name="color" value={this.props.color} onChange={this.props.handleChange}>
                        <option selected hidden>Pick your favorite Color:</option>
                        <option value="default">Default</option>
                        <option value="red">Red</option>
                        <option value="blue">Blue</option>
                        <option value="yellow">Yellow</option>
                        <option value="green">Green</option>
                    </select>
                </label>
                <div className="dynamic-color">
                    <div style={{background: this.props.color === "default" ? "" : this.props.color}}>
                    <h3>{this.props.first}</h3>
                    </div>
                </div>
            </form>
        );
    }
}
