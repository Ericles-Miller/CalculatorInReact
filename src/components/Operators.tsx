function Operator() {
  return <div className="flex flex-col gap-4 pt-2">
    <div className="w-20 h-20 bg-[#462878] rounded-lg shadow-xl p-6">
      <p className="text-center text-amber-50 text-2xl">+</p>
    </div>
    <div className="w-20 h-20 bg-[#462878] rounded-lg shadow-xl p-6">
      <p className="text-center text-amber-50 text-2xl">-</p>
    </div>
    <div className="w-20 h-20 bg-[#462878] rounded-lg shadow-xl p-6">
      <p className="text-center text-amber-50 text-2xl">*</p>
    </div>
    <div className="w-20 h-20 bg-[#462878] rounded-lg shadow-xl p-6">
      <p className="text-center text-amber-50 text-2xl">/</p>
    </div>
    <div className="w-20 h-20 bg-[#7F45E2] rounded-lg shadow-xl p-6">
      <p className="text-center text-amber-50 text-2xl">=</p>
    </div>
  </div>
}

export default Operator;