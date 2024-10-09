"use client";

import { useDebugValue, useState } from "react";

import styles from "./styles.module.css";

const debug = () => {
  const [isDebug, setIsDebug] = useState("デバッグのテスト");
  useDebugValue(isDebug);
  return { isDebug, setIsDebug };
};

export default function Page() {
  const value = debug();

  return (
    <div>
      <h1 className={styles.heading}>useDebugValueの使い方</h1>
      <div className={styles.container}>
        <input type="text" onChange={(e) => value.setIsDebug(e.target.value)} />
        <p>{value.isDebug}</p>
      </div>
    </div>
  );
}
