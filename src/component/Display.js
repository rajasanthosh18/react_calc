import React from 'react'
import './calculator.css';

const Display = (props) => {
  return (
    <div ><p className='result'>{props.value}</p></div>
  )
}

export default Display