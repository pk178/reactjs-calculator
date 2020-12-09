import React, { Component } from 'react'
import CalculatorButton from './CalculatorButton'

class CalculatorBody extends Component{
    constructor(props){
        super(props);

        this.state = {
            number1: undefined,
            number2: undefined,
            calculatorFunction: undefined,
            info: '',
            ans: 0
        };
        
        this.HandleClicked = this.HandleClicked.bind(this);
    }

    HandleClicked(event){
        var value = event.target.value;
        this.props.callBackData(value);        
    }

    render(){
        return(
            <div className='calculator-body'>
                <CalculatorButton label='Clear' clicked={this.HandleClicked}></CalculatorButton>
                <CalculatorButton label='Del' clicked={this.HandleClicked}></CalculatorButton>
                <CalculatorButton label='%' clicked={this.HandleClicked}></CalculatorButton>
                <CalculatorButton label=':' clicked={this.HandleClicked}></CalculatorButton>

                <CalculatorButton label='7' clicked={this.HandleClicked}></CalculatorButton>
                <CalculatorButton label='8' clicked={this.HandleClicked}></CalculatorButton>
                <CalculatorButton label='9' clicked={this.HandleClicked}></CalculatorButton>
                <CalculatorButton label='x' clicked={this.HandleClicked}></CalculatorButton>

                <CalculatorButton label='4' clicked={this.HandleClicked}></CalculatorButton>
                <CalculatorButton label='5' clicked={this.HandleClicked}></CalculatorButton>
                <CalculatorButton label='6' clicked={this.HandleClicked}></CalculatorButton>
                <CalculatorButton label='-' clicked={this.HandleClicked}></CalculatorButton>

                <CalculatorButton label='1' clicked={this.HandleClicked}></CalculatorButton>
                <CalculatorButton label='2' clicked={this.HandleClicked}></CalculatorButton>
                <CalculatorButton label='3' clicked={this.HandleClicked}></CalculatorButton>
                <CalculatorButton label='+' clicked={this.HandleClicked}></CalculatorButton>

                <CalculatorButton label='Sqrt' clicked={this.HandleClicked}></CalculatorButton>
                <CalculatorButton label='0' clicked={this.HandleClicked}></CalculatorButton>
                <CalculatorButton label='.' clicked={this.HandleClicked}></CalculatorButton>
                <CalculatorButton label='=' clicked={this.HandleClicked}></CalculatorButton>
            </div>
        );
    }
}

export default CalculatorBody