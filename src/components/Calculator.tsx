import { useState } from "react";
import Numbers from "./Numbers";
import Operator from "./Operators";
import Result from "./Result";

function Calculator() {
  const [operation, setOperation] = useState('');
  const [result, setResult] = useState('');
  const [isCalculated, setIsCalculated] = useState(false);

  const handleNumberClick = (buttonValue: string) => {
    if (buttonValue === 'CE') {
      handleClearEverything(); 
      return;
    }

    if(buttonValue === 'C') {
      handleClearEntry();
      return;
    }

    if(isCalculated) {
      setOperation(buttonValue);
      setIsCalculated(false);
    } else {
      setOperation(prev => prev + buttonValue.toString());
    }
  };

  const handleOperatorClick = (operator: string) => {
    if(operation && !isCalculated) {
      setOperation(prev => prev + operator);
    }

    if(operator === '=' ) {
      handleEquals();
    }
  };

  const handleEquals = () => {
    try {
      const calculatedResult = eval(operation); ;
      setResult(calculatedResult);
      setIsCalculated(true);
    } catch (error) {
      setResult(0);
      setOperation('');
    }
  };

  const handleClearEverything = () => {
    setOperation(''); 
    setResult('');
    setIsCalculated(false);
  };

  const handleClearEntry = () => {
    setOperation(prev => prev.slice(0, -1));
  }

  return (
    <div className="w-393 h-196 bg-[#2D2A37] rounded-lg shadow-xl p-6">
      <h2 className="text-2xl font-bold text-center mb-4 text-white">
        Calculadora
      </h2>
      <div>
        <Result operation={operation} result={result}/>
      </div>
      <div className="flex gap-4">
        <Numbers onNumberClick={handleNumberClick} />
        <Operator onOperatorClick={handleOperatorClick} />
      </div>
    </div>
  );
}

export default Calculator;