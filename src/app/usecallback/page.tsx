"use client";

import { memo, useCallback, useState } from "react";
import styles from "./styles.module.css";

interface HanlderClick {
  handleClick: () => void;
}

export const NormalComponent = memo(({ handleClick }: HanlderClick) => {
  console.log("NormalComponent　：　関数は値が変更されなくても毎回新しい関数を生成するためレンダリングされる");

  return (
    <button onClick={handleClick} className={styles.button}>
      関数が再生成される
    </button>
  );
});

export const CallbackComponent = memo(({ handleClick }: HanlderClick) => {
  console.log("CallbackComponent　：　useCallbackを使ってるため関数は再生成されない");

  return (
    <button onClick={handleClick} className={styles.button}>
      関数が再生成されない
    </button>
  );
});

export default function Page() {
  const [bool, setBool] = useState(false);
  const handleState = () => {
    setBool(!bool);
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
        <p>親state : {bool ? "true" : "false"}</p>
        <button onClick={handleState} className={styles.button}>
          state更新
        </button>

        <NormalComponent handleClick={handleClick} />
        <CallbackComponent handleClick={handleCallback} />
      </div>
    </div>
  );
}
