import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import { Button } from './component/assets/Button';
import Input from './component/assets/input'



function App() {
  let myName = "Nguyen Nam Phuong"

  const [a, setA] = useState(0);
  const [b, setB] = useState(0);
  return (
    <div className="App">
      <Button a = {a} b = {b} text = "cong" handleClick = {(event, a, b) => alert( a + "+" + b + "=" +  (a + b) )} />
      <Button a = {a} b = {b} text = "tru" handleClick = {(event, a, b) => alert( a + "-" + b + "=" +  (a - b) )} />
      <Button a = {a} b = {b} text = "nhan" handleClick = {(event, a, b) => alert( a + "*" + b + "=" +  (a * b) )} />
      <Button a = {a} b = {b} text = "chia" handleClick = {(event, a, b) => alert( a + "/" + b + "=" +  (a / b) )} />
      <Input text={a} handleChange={(event) => {setA(Number(event.currentTarget.value))}} />
      <Input text={b} handleChange={(event) => {setB(Number(event.currentTarget.value))}} />
    </div>
  );
}

export default App;
