interface OperatorProps {
  onOperatorClick: (buttonValue: string) => void;
}

function Operator({ onOperatorClick }: OperatorProps) {
  return <div className="flex flex-col gap-4 pt-2">
    <button className="w-20 h-20 bg-[#462878] rounded-lg shadow-xl text-center text-amber-50 text-2xl flex items-center justify-center transition-colors hover:bg-[#7F45E2] duration-200" onClick={() => onOperatorClick('+')}>+</button>
    <button className="w-20 h-20 bg-[#462878] rounded-lg shadow-xl text-center text-amber-50 text-2xl flex items-center justify-center transition-colors hover:bg-[#7F45E2] duration-200" onClick={() => onOperatorClick('-')}>-</button>
    <button className="w-20 h-20 bg-[#462878] rounded-lg shadow-xl text-center text-amber-50 text-2xl flex items-center justify-center transition-colors hover:bg-[#7F45E2] duration-200" onClick={() => onOperatorClick('*')}>*</button>
    <button className="w-20 h-20 bg-[#462878] rounded-lg shadow-xl text-center text-amber-50 text-2xl flex items-center justify-center transition-colors hover:bg-[#7F45E2] duration-200" onClick={() => onOperatorClick('/')}>/</button>
    <button className="w-20 h-20 bg-[#7F45E2] rounded-lg shadow-xl text-center text-amber-50 text-2xl flex items-center justify-center transition-colors hover:bg-[#8e66d4] duration-200" onClick={() => onOperatorClick('=')}>=</button>
  </div>
}

export default Operator;