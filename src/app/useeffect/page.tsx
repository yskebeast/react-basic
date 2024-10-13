"use client";

import { useEffect, useState } from "react";
import styles from "./styles.module.css";

export default function Page() {
  useEffect(() => {
    console.log("初回レンダリング時のみ実行される");
  }, []);

  const [count, setCount] = useState(0);
  // ! countが更新されるたびに2秒後にカウントアップする無限ループが発生する
  // useEffect(() => {
  //   setTimeout(() => {
  //     setCount(count + 1);
  //   }, 2000);
  // }, [count]);
  return (
    <div>
      <h1 className={styles.heading}>useEffectの使い方</h1>
      <div className={styles.container}>
        <p>2秒後にカウントアップされる</p>
        <p>{count}</p>
      </div>
    </div>
  );
}
