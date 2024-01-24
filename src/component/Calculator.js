import React, { useState } from 'react'
import Display from './Display'
import './calculator.css';

function Calculator() {
    const [input,setInput] = useState('');
    const [result,setResult] = useState(0);
    const addValue = (value)=>{
        setInput(input+value);
    }
    const calculate = ()=>{
        setResult(eval(input))
        setInput('')
    }
  return (
    <div>
        <p className='result'>Simple Calculator</p>
        <Display value={input === '' ? result : input}  /> 

    <div className='button'>

        <button onClick={()=>addValue(',')}>,</button>
    
        <button onClick={()=>addValue('%')}>%</button>
        <button onClick={()=>setInput(input.slice(0,-1))}>C</button>
        

        <button onClick={()=>setInput("")}>CE</button><br/>
    
        <button onClick={()=>addValue('9')}>9</button>
        <button onClick={()=>addValue('8')}>8</button>
        <button onClick={()=>addValue('7')}>7</button>
        <button onClick={()=>addValue('+')}>+</button><br/>

        <button onClick={()=>addValue('6')}>6</button>
        <button onClick={()=>addValue('5')}>5</button>
        <button onClick={()=>addValue('4')}>4</button>
        <button onClick={()=>addValue('-')}>-</button><br/>

        <button onClick={()=>addValue('3')}>3</button>
        <button onClick={()=>addValue('2')}>2</button>
        <button onClick={()=>addValue('1')}>1</button>
        <button onClick={()=>addValue('x')}>*</button><br/>

        <button onClick={()=>addValue('.')}>.</button>
        <button onClick={()=>addValue('0')}>0</button>
        <button onClick={()=>addValue('/')}>/</button>
        <button onClick={()=>calculate()}>=</button>

    </div>


    </div>
  )
}

export default Calculator