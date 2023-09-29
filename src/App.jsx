import { useState } from 'react';
import './App.css';

function Keys(props) {
  function updateDisplay() {
    props.onButtonClick(props.children)
    console.log(props)  
  } 

  return(
    <button onClick={updateDisplay} className={`keys ${props.className}`}>{props.children}</button>
    );
}

function App() {
  const [values, setValues] = useState([])

  function defineValue(value) {
    setValues([...values, value])
  }

  return(
  <div className="container-main">
    <div className="display-box">{values}</div>
    <div className="keys-box">
        <Keys onButtonClick={defineValue} className="specialKey2">(</Keys>
        <Keys className="specialKey2">)</Keys>
        <Keys className="specialKey2">%</Keys>
        <Keys className="specialKey">AC</Keys>
        <Keys>7</Keys>
        <Keys>8</Keys>
        <Keys>9</Keys>
        <Keys className="specialKey">/</Keys>
        <Keys>4</Keys>
        <Keys>5</Keys>
        <Keys>6</Keys>
        <Keys className="specialKey">*</Keys>
        <Keys>1</Keys>
        <Keys>2</Keys>
        <Keys>3</Keys>
        <Keys className="specialKey">-</Keys>
        <Keys>.</Keys>
        <Keys>0</Keys>
        <Keys>=</Keys>
        <Keys className="specialKey">+</Keys>
    </div>
  </div>
  );
}

export default App
