interface NumbersProps {
  onNumberClick: (buttonValue: string) => void;
}

function Numbers({ onNumberClick }: NumbersProps) {
  
  return <div>
      <div className="flex gap-4 p-2">
        <button className="
          w-20 h-20 bg-linear-to-t from-[#EBEBEB] from-0.5% via-[#4c4a4f] via-0.9% to-[#2D2A37] to-100% 
          rounded-lg shadow-xl text-center text-amber-50 text-2xl flex items-center justify-center
          transition-colors hover:bg-[#5a5270] duration-200"
          onClick={() => onNumberClick('CE')}>
          CE
        </button>
        <button className="w-44 h-20 bg-[#67607d] rounded-lg shadow-xl text-center
         text-amber-50 text-2xl flex items-center justify-center
         transition-colors hover:bg-[#5a5270] duration-200"
         onClick={() => onNumberClick('C')}>C</button>
      </div>

      <div className="flex gap-4 p-2">
        <button className="w-20 h-20 bg-[#67607d] rounded-lg shadow-xl text-center
         text-amber-50 text-2xl flex items-center justify-center
         transition-colors hover:bg-[#5a5270] duration-200"
         onClick={() => onNumberClick( '1' )}
         >1</button>
        <button className="w-20 h-20 bg-[#67607d] rounded-lg shadow-xl text-center text-amber-50 text-2xl flex items-center justify-center transition-colors hover:bg-[#5a5270] duration-200" onClick={() => onNumberClick( '2' )}>2</button>
        <button className="w-20 h-20 bg-[#67607d] rounded-lg shadow-xl text-center text-amber-50 text-2xl flex items-center justify-center transition-colors hover:bg-[#5a5270] duration-200" onClick={() => onNumberClick( '3' )}>3</button>
      </div>
      

      <div className="flex gap-4 p-2">
        <button className="w-20 h-20 bg-[#67607d] rounded-lg shadow-xl text-center text-amber-50 text-2xl flex items-center justify-center transition-colors hover:bg-[#5a5270] duration-200" onClick={() => onNumberClick( '4' )}>4</button>
        <button className="w-20 h-20 bg-[#67607d] rounded-lg shadow-xl text-center text-amber-50 text-2xl flex items-center justify-center transition-colors hover:bg-[#5a5270] duration-200" onClick={() => onNumberClick( '5' )}>5</button>
        <button className="w-20 h-20 bg-[#67607d] rounded-lg shadow-xl text-center text-amber-50 text-2xl flex items-center justify-center transition-colors hover:bg-[#5a5270] duration-200" onClick={() => onNumberClick( '6' )}>6</button>
      </div>

      <div className="flex gap-4 p-2">
        <button className="w-20 h-20 bg-[#67607d] rounded-lg shadow-xl text-center text-amber-50 text-2xl flex items-center justify-center transition-colors hover:bg-[#5a5270] duration-200" onClick={() => onNumberClick( '7' )}>7</button>
        <button className="w-20 h-20 bg-[#67607d] rounded-lg shadow-xl text-center text-amber-50 text-2xl flex items-center justify-center transition-colors hover:bg-[#5a5270] duration-200" onClick={() => onNumberClick( '8' )}>8</button>
        <button className="w-20 h-20 bg-[#67607d] rounded-lg shadow-xl text-center text-amber-50 text-2xl flex items-center justify-center transition-colors hover:bg-[#5a5270] duration-200" onClick={() => onNumberClick( '9' )}>9</button>
      </div>

      <div className="flex gap-4 p-2">
        <button className="w-44 h-20 bg-[#67607d] rounded-lg shadow-xl text-center text-amber-50 text-2xl flex items-center justify-center transition-colors hover:bg-[#5a5270] duration-200" onClick={() => onNumberClick('0')}>0</button>
        <button className="w-20 h-20 bg-[#67607d] rounded-lg shadow-xl text-center text-amber-50 text-2xl flex items-center justify-center transition-colors hover:bg-[#5a5270] duration-200" onClick={() => onNumberClick(',') }>,</button>
      </div>
  </div>
}

export default Numbers;