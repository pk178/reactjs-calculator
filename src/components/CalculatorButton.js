import React from 'react'

function CalculatorButton(props) {
    return(
        <input 
            type='button'
            className='calculator-button' 
            value={props.label} 
            onClick={props.clicked}
        />            
    );
}

export default CalculatorButton;