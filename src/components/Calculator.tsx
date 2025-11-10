import Numbers from "./Numbers";
import Operator from "./Operators";
import Result from "./Result";

function Calculator() {
  return (
    <div className="w-393 h-196 bg-[#2D2A37] rounded-lg shadow-xl p-6">
      <h2 className="text-2xl font-bold text-center mb-4 text-white">
        Calculadora
      </h2>
      <div>
        <Result/>
      </div>
      <div className="flex gap-4">
        <Numbers />
        <Operator />
      </div>
    </div>
  );
}

export default Calculator;