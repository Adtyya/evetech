import React, { useState, useEffect, useCallback, ChangeEvent } from "react";
import Button from "../components/Button";

const index = () => {
  const [count, setCount] = useState<number>(0);
  const [countDown, setCountDown] = useState<null | number>(null);
  const [start, setStart] = useState<boolean>(false);

  const Increment = useCallback(() => {
    setCount((prev) => prev + 1);
  }, [setCount]);

  const Decrement = useCallback(() => {
    setCount((prev) => prev - 1);
  }, [setCount]);

  const handleCountDown = (event: ChangeEvent<HTMLInputElement>) => {
    const val = event.target.value as unknown as number;
    setCountDown(val ? val : null);
  };

  const startCountDown = (event: any) => {
    event.preventDefault();
    setStart(true);
  };

  useEffect(() => {
    let interval: ReturnType<typeof setInterval>;
    if (start) {
      interval = setInterval(() => {
        setCountDown(countDown ? countDown - 1 : countDown);
        if (countDown === 1) {
          setStart(false);
          setCountDown(null);
        }
      }, 1000);
    }
    return () => {
      clearInterval(interval);
    };
  }, [start, countDown]);

  return (
    <div className="flex flex-col w-full h-screen items-center justify-start bg-slate-900 p-5 space-y-5">
      <div className="flex flex-col justify-center items-center space-y-5 w-3/4 h-auto px-4 py-5 bg-slate-200 text-gray-500 bg-opacity-10 rounded">
        <h1 className="text-lg lg:text-4xl">Jumlah : {count}</h1>
        <div className="flex space-x-4">
          <Button onClick={Increment}>Tambah Nilai</Button>
          <Button onClick={Decrement}>Kurangi Nilai</Button>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center w-3/4 h-auto px-4 py-5 bg-slate-200 text-gray-500 bg-opacity-10 rounded">
        <form className="text-center space-y-5" onSubmit={startCountDown}>
          <h1 className="text-lg lg:text-4xl">
            Masukan waktu countdown dalam detik
          </h1>
          <input
            type="number"
            className="content-center focus:outline focus:outline-slate-300 rounded py-1 text-center mx-3"
            placeholder="Masukan hanya angka"
            onChange={handleCountDown}
            value={countDown ? countDown : ""}
          />
          <Button type="submit">Mulai</Button>
        </form>
        {countDown === null ? (
          <p className="text-gray-500 text-md text-center lg:text-2xl py-3">
            Waktu anda telah habis! Silahkan isi kembali .
          </p>
        ) : (
          <p className="text-gray-500 text-md text-center lg:text-2xl py-3">
            Waktu anda tersisa {countDown} detik.
          </p>
        )}
      </div>
    </div>
  );
};

export default index;
