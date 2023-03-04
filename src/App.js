import { useState } from "react";
import "./App.css";
import * as math from "mathjs";
function App() {
  const [result, setResult] = useState("");

  const handleClick = (e) => {
    setResult(result.concat(e.target.name));
    console.log(typeof result);
  };

  const clear = () => {
    setResult("");
  };
  const backSpace = () => {
    setResult(result.slice(0, -1));
  };
  const execution = () => {
    setResult(math.evaluate(result).toString());
  };
  return (
    <div className="calculator-box">
      <div className="calculator-gird">
        <div className="output">
          <div className="curent-operand">{result}</div>
        </div>
        <button onClick={clear} className="span-two">
          AC
        </button>
        <button onClick={backSpace}>DEL</button>
        <button onClick={handleClick} name=":">
          :
        </button>
        <button onClick={handleClick} name="1">
          1
        </button>
        <button onClick={handleClick} name="2">
          2
        </button>

        <button onClick={handleClick} name="3">
          3
        </button>
        <button onClick={handleClick} name="*">
          *
        </button>
        <button onClick={handleClick} name="4">
          4
        </button>
        <button onClick={handleClick} name="5">
          5
        </button>
        <button onClick={handleClick} name="6">
          6
        </button>
        <button onClick={handleClick} name="+">
          +
        </button>
        <button onClick={handleClick} name="7">
          7
        </button>
        <button onClick={handleClick} name="8">
          8
        </button>
        <button onClick={handleClick} name="9">
          9
        </button>
        <button onClick={handleClick} name="-">
          -
        </button>
        <button onClick={handleClick} name=".">
          .
        </button>
        <button onClick={handleClick} name="0">
          0
        </button>
        <button onClick={execution} className="span-two">
          =
        </button>
      </div>
    </div>
  );
}

export default App;
