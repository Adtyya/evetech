import React, { useState, useCallback } from "react";
import Button from "../components/Button";

const index = () => {
  const [count, setCount] = useState<number>(0);

  const Increment = useCallback(() => {
    setCount((prev) => prev + 1);
  }, [setCount]);

  const Decrement = useCallback(() => {
    setCount((prev) => prev - 1);
  }, [setCount]);

  return (
    <div className="flex flex-col w-full h-screen items-center justify-center bg-slate-900">
      <div className="flex flex-col justify-center items-center space-y-5 w-3/4 h-auto px-4 py-5 bg-slate-200 text-gray-500 bg-opacity-10 rounded">
        <h1 className="text-4xl">Jumlah : {count}</h1>
        <div className="flex space-x-4">
          <Button onClick={Increment}>Tambah Nilai</Button>
          <Button onClick={Decrement}>Kurangi Nilai</Button>
        </div>
      </div>
    </div>
  );
};

export default React.memo(index);
