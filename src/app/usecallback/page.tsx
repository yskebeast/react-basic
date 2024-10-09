"use client";

import { memo, useCallback, useState } from "react";
import styles from "./styles.module.css";

interface HandleClick {
  handleClick: () => void;
}

const NormalComponent = memo(({ handleClick }: HandleClick) => {
  console.log("NormalComponent：関数は値が変更されなくても毎回新しい関数を生成するためレンダリングされる");

  return (
    <button onClick={handleClick} className={styles.button}>
      関数が再生成される
    </button>
  );
});

const CallbackComponent = memo(({ handleClick }: HandleClick) => {
  console.log("CallbackComponent：useCallbackを使ってるため関数は再生成されない");

  return (
    <button onClick={handleClick} className={styles.button}>
      関数が再生成されない
    </button>
  );
});

export default function Page() {
  console.log("Page：毎回レンダリングされる");

  const [count, setCount] = useState(0);
  const handleCountUp = () => {
    setCount(count + 1);
  };

  const handleClick = () => {
    console.log("親がレンダリングされたら関数は再生成される");
  };

  const handleCallback = useCallback(() => {
    console.log("親がレンダリングされても関数は再生成されないようにする");
  }, []);

  return (
    <div>
      <h1 className={styles.heading}>useCallbackの使い方</h1>
      <div className={styles.container}>
        <button onClick={handleCountUp}>COUNT UP</button>
        <p>count : {count}</p>

        <NormalComponent handleClick={handleClick} />
        <CallbackComponent handleClick={handleCallback} />
      </div>
    </div>
  );
}
