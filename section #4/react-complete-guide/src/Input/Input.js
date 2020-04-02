import React from 'react';


const Input = ({changed, userInput}) => {
  return <input type="text" onChange={changed} value={userInput} />;
}; 


export default Input;