import { useState } from "react";
import "./App.css";

function App() {
  const [input,setInput] = useState("")

  function handleNumberClick(num){
    setInput(input+num)
  }

  function handleOperatorClick(operator){
    setInput(input+operator)
  }

  function handleClearClick(){
    setInput("")
  }

  const handleEqualClick = () => {
    try {
      const salam = eval(input); // Using eval is not recommended for production
      setInput(salam.toString());
    } catch (error) {
     console.log(error)
    }
  }; 

  return (
    <>
      <div className="calculator">
        <div className="result">
          <input type="text" disabled value={input}/>    
        </div>
        <div className="keys">
          <button className="key" id="clear" onClick={() => handleClearClick()}>C</button>
          <button className="key" onClick={() => handleOperatorClick("÷")}>÷</button>
          <button className="key" onClick={() => handleOperatorClick("%")}>%</button>
          <button className="key" onClick={() => handleOperatorClick("/")}>/</button>

          <button className="key" onClick={() => handleNumberClick("7")}>7</button>
          <button className="key" onClick={() => handleNumberClick("8")}>8</button>
          <button className="key" onClick={() => handleNumberClick("9")}>9</button>
          <button className="key" onClick={() => handleOperatorClick("*")}>×</button>

          <button className="key" onClick={() => handleNumberClick("4")}>4</button>
          <button className="key" onClick={() => handleNumberClick("5")}>5</button>
          <button className="key" onClick={() => handleNumberClick("6")}>6</button>
          <button className="key" onClick={() => handleOperatorClick("-")}>-</button>

          <button className="key" onClick={() => handleNumberClick("1")}>1</button>
          <button className="key" onClick={() => handleNumberClick("2")}>2</button>
          <button className="key" onClick={() => handleNumberClick("3")}>3</button>
          <button className="key" onClick={() => handleOperatorClick("+")}>+</button>

          <button className="key" onClick={() => handleNumberClick("0")}>0</button>
          <button className="key" onClick={() => handleNumberClick(".")}>.</button>
          <button className="key" id="equal" onClick={() => handleEqualClick()}>
            =
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
