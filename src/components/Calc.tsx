import React, { useMemo, useState } from "react";

function Calc() {
  const [inputA, setInputA] = useState(0);
  const [inputB, setInputB] = useState(0);
  const [result, setResult] = useState<number | null>(null);

  // const onClick = useCallback(() => {
  //   setResult(inputA + inputB);
  // }, [inputA, inputB]);

  const memoResult = useMemo(() => inputA + inputB, [inputA, inputB]);

  return (
    <>
      <input
        type="text"
        value={inputA}
        onChange={e => setInputA(Number(e.target.value))}
      />
      <input
        type="text"
        value={inputB}
        onChange={e => setInputB(Number(e.target.value))}
      />
      <button onClick={() => setResult(memoResult)}>calc</button>
      result: <span>{result}</span>
    </>
  );
}

export default Calc;
