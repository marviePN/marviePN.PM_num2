import React, { Component } from "react";

class Pm_number2 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstVal: 0,
            secondVal: 0
        };
    }

    updateInputValue = evt => {
        const { name, value } = evt.target;
        this.setState({
            [name]: parseInt(value)
        });
    };

    add = () => {
        const { firstVal, secondVal } = this.state;
        alert("The result is " + (firstVal + secondVal));
    };

    substract = () => {
        const { firstVal, secondVal } = this.state;
        alert("The result is " + (firstVal - secondVal));
    };
    division = () => {
        const { firstVal, secondVal } = this.state;
        alert("The result is " + firstVal / secondVal);
    };
    multiplication = () => {
        const { firstVal, secondVal } = this.state;
        alert("The result is " + firstVal * secondVal);
    };

    render() {
        return (
            <div id= "main">
                <input
                    placeholder="first value"
                    value={this.state.inputValue}
                    name="firstVal"
                    onChange={evt => this.updateInputValue(evt)}
                />
                <input
                    placeholder="second value"
                    value={this.state.inputValue}
                    name="secondVal"
                    onChange={evt => this.updateInputValue(evt)}
                />
                <button onClick={this.add}>+</button>
                <button onClick={this.substract}>-</button>
                <button onClick={this.division}>/</button>
                <button onClick={this.multiplication}>x</button>
            </div>
        );
    }
}

export default Pm_number2;
