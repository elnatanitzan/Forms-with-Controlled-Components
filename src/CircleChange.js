import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components';

export default class CircleChange extends Component {
    
  

    render() {
        const stateColor = this.props.color;
        const shadowColor = stateColor === 'default' ? 'whitesmoke' : stateColor;
        const shadow = keyframes `
            from { box-shadow: 0 0 0 0 ${shadowColor};}
            50% { box-shadow: 0 0 50px 0 ${shadowColor}; }
            to { box-shadow: 0 0 0 0 ${shadowColor};}
        `;
        const Elem = styled.div `
            display: grid;
            place-items: center;
            width: 150px;
            height: 150px;
            background: ${stateColor};
            transition: background .7s;
            border-radius: 50%;
            position: relative;
            text-align: center;
            animation: ${shadow} 2s infinite;
        `;

        return (
            <div className="dynamic-color">
                <Elem className="circle">
                    <h3>{this.props.first}</h3>
                </Elem>
            </div>
        )    
    }
}
