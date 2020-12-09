import React, { Component, useState } from 'react'
import CalculatorBody from './CalculatorBody';
import CalculatorHeader from './CalculatorHeader'

class Calculator extends Component{
    constructor(props){
        super(props);
        this.state = {
            info: "",
            ans: 0,
            number1: undefined,
            number2: undefined,
            calculatorFunction: undefined
        };
    }
    
    calculateResult = (newInputData) => {                
        var calResult = undefined;

        switch(newInputData){
            case 'Clear':
                this.setState({number1: undefined, number2: undefined, calculatorFunction: undefined, info: '', ans: 0});    
                break;
            case 'Del':
                if(this.state.number2 !== undefined) 
                {
                    this.setState({number2: this.state.number2.slice(0, -1), info: this.state.info.slice(0, -1)});
                }
                else
                {
                    if(this.state.number1 !== undefined) 
                    {
                        this.setState({number1: this.state.number1.slice(0, -1), info: this.state.info.slice(0, -1)});
                    }
                }
                break;
            case '+':
            case '-':
            case 'x':
            case ':':            
            case '%':
                this.setState({info: this.state.info + ' ' + newInputData + ' ', ans: 0, calculatorFunction: newInputData});    
                break;
            case 'Sqrt':
                if(this.state.number1 !== undefined && this.state.number2 === undefined) 
                {
                    var number1 = parseFloat(this.state.number1);                    
                    calResult = Math.sqrt(number1);

                    this.setState({ans: calResult, number1: undefined, number2: undefined, calculatorFunction: undefined});    
                }
                break;
            case '.':
                if(this.state.number1 === undefined) 
                {
                    this.setState({number1: '0.', info: '0.'});    
                }
                else {
                    if(this.state.calculatorFunction === undefined){
                        if(this.state.number1.includes('.')) 
                            break;
                        else
                            this.setState({number1: this.state.number1 + newInputData});
                    }
                    else 
                    {
                        if(this.state.number2 === undefined) this.setState({number2: '0.'}); 
                        else 
                        {
                            if(this.state.number2.includes('.'))  
                                break;
                            else
                                this.setState({number2: this.state.number2 + newInputData});
                            
                        }
                    }

                    this.setState({info: this.state.info + newInputData });  
                }            
                break; 
            case '=':
                if(this.state.number1 !== undefined && this.state.number2 !== undefined){
                    var number1 = parseFloat(this.state.number1);
                    var number2 = parseFloat(this.state.number2);
                    
                    switch(this.state.calculatorFunction){
                        case '+':
                            calResult = number1 + number2;
                            break;
                        case '-':
                            calResult = number1 - number2;
                            break;
                        case 'x':
                            calResult = number1 * number2;
                            break;
                        case ':':
                            calResult = number1 / number2;
                            break;
                            break;
                        case '%':
                            calResult = number1 % number2;
                            break;  
                    }
                }
    
                this.setState({ans: calResult, number1: undefined, number2: undefined, calculatorFunction: undefined});    
                break;
            default:
                if(this.state.number1 === undefined) 
                {
                    this.setState({number1: newInputData, info: newInputData});    
                }
                else {
                    if(this.state.calculatorFunction === undefined){
                        this.setState({number1: this.state.number1 + newInputData});
                    }
                    else 
                    {
                        if(this.state.number2 === undefined) this.setState({number2: newInputData}); 
                        else this.setState({number2: this.state.number2 + newInputData});
                    }

                    this.setState({info: this.state.info + newInputData });  
                }                
                
                break;
        }        
    }

    render(){
        return(        
            <>        
                <CalculatorHeader></CalculatorHeader>
                <div className='calculator-output'>                
                    <label>{this.state.info}</label>
                    <br></br>
                    <label>{this.state.ans}</label>                
                </div>
                
                <CalculatorBody callBackData={this.calculateResult}></CalculatorBody>
            </>
        );
    };
    
}

export default Calculator