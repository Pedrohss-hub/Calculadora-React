import { useState } from 'react';
import './App.css';

function Keys(props) {
  return <button className={`keys ${props.className}`}>{props.children}</button>
}

function App() {
  return(
  <div className="container-main">
    <div className="display-box"></div>
    <div className="keys-box">
        <Keys className="specialKey2">(</Keys>
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
        <Keys className="specialKey">X</Keys>
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
