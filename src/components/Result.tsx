export interface ResultProps {
  operation: string;
  result: number;
}

function Result({ operation, result }: ResultProps) {
  return <div>
      <div className="flex flex-col justify-end w-93 h-36 m-3.5  p-4 gap-1">
      <p className="text-[#6B6B6B] pb-6 text-right text-2xl">{operation}</p>
      <div className="flex justify-between items-end">
        <p className="text-[#6B6B6B] text-4xl">=</p>
        <h2 className="text-[#EBEBEB] text-4xl">{result}</h2>
      </div>
    </div>
  </div>
}


export default Result;