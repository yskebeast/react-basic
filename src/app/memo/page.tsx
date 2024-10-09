"use client";

import { memo, useRef, useState } from "react";

import styles from "./styles.module.css";

const NormalComponent = () => {
  console.log(
    "NormalComponent　：　親コンポーネントが再レンダーされた時に再レンダー"
  );

  return (
    <div>
      <p>通常のコンポーネント</p>
      <p>
        親コンポーネントがレンダリングされると小コンポーネントも再レンダーされる
      </p>
    </div>
  );
};

const MemoComponent = memo((props: { render: boolean }) => {
  console.log("MemoComponent　：　propsが変更された時に再レンダー");

  return (
    <div>
      <p>memo化コンポーネント</p>
      <p>
        親コンポーネントがレンダリングされても、propsが更新されない限り再レンダーされない
      </p>
    </div>
  );
});

export default function Page() {
  const [bool, setBool] = useState(false);
  const [render, setRender] = useState(false);
  const count = useRef(0);

  const handleState = () => {
    count.current++;
    if (count.current % 5 === 0 && count.current !== 0) {
      setRender(!render);
    }
    setBool(!bool);
  };
  return (
    <div>
      <h1 className={styles.heading}>memoの使い方</h1>
      <div className={styles.container}>
        <p>親state : {bool ? "true" : "false"}</p>
        <p>{count.current}</p>
        <button onClick={handleState} className={styles.button}>
          state更新
        </button>

        <NormalComponent />
        <MemoComponent render={render} />
      </div>
    </div>
  );
}
