"use client";

import Link from "next/link";
import { useState } from "react";

import styles from "./styles.module.css";

export default function Page() {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);
  return (
    <div>
      <h1 className={styles.heading}>useStateの使い方</h1>
      <h2 className={styles.heading2}>通常のstateを更新した場合</h2>
      <div className={styles.container}>
        <p>{count}</p>
        <button onClick={() => setCount(count + 1)} className={styles.button}>
          増やす
        </button>
        <button onClick={() => setCount(count - 1)} className={styles.button}>
          減らす
        </button>
      </div>

      <h2 className={styles.heading2}>更新用関数を利用した場合</h2>
      <div className={styles.container}>
        <p>{count2}</p>
        <button
          onClick={() => {
            setCount2((n) => n + 5);
            setCount2((n) => n + 1);
            setCount2(42);
          }}
          className={styles.button}
        >
          増やす
        </button>
        <p>なんで48にならないのか？</p>
        <p>更新関数後に普通のstate更新があると、それまでのキューは無視される</p>
        <Link
          href="https://chatgpt.com/share/4bd01659-78c8-4e03-9bff-d354450d3cd7"
          target="_blank"
        >
          gpt回答
        </Link>
        <button
          onClick={() => {
            setCount2((n) => n - 1);
            setCount2((n) => n - 1);
            setCount2((n) => n - 1);
          }}
          className={styles.button}
        >
          減らす
        </button>
      </div>
    </div>
  );
}
