import { useState } from 'react';
import './App.css';
import Keyboard from './Components/Keyboard';
import Result from './Components/Result';

function App() {
  const [result, setResult] = useState(" ")

  const buttonClick = (value) => {
    if (value === "Delete") {
      setResult(result.slice(0, -1))
    } else if (value === "Space") {
      setResult(value + " ")
    } else{
      setResult(result + value)
}}

return (
  <div className="App">
    <Result value= {result}/>
    <Keyboard onButtonClick={buttonClick} />
  </div>
);
}

export default App;
