import { useState } from "react";
import Numbers from "./Numbers";
import Operator from "./Operators";
import Result from "./Result";

function Calculator() {
  const [operation, setOperation] = useState('0');
  const [result, setResult] = useState('0');
  const [isCalculated, setIsCalculated] = useState(false);

  const handleNumberClick = (number: string) => {
    if(isCalculated) {
      setOperation(number);
      setIsCalculated(false);
    } else {
      setOperation(prev => prev + number.toString());
    }
  };

  const handleOperatorClick = (operator: string) => {
    if(operation && !isCalculated) {
      setOperation(prev => prev + operator);
    }
  };

  const handleEquals = () => {
  try {
    // CUIDADO: eval é perigoso em produção!
    // Melhor usar uma biblioteca como math.js
    const calculatedResult = eval(  );
    setResult(calculatedResult);
    setIsCalculated(true);
  } catch (error) {
    setResult(0);
    setOperation('');
  }
};

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