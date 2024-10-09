"use client";

import { useRef } from "react";

import styles from "./styles.module.css";

export default function Page() {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleClick = () => {
    inputRef?.current?.focus();
  };

  return (
    <div>
      <h1 className={styles.heading}>useRef</h1>
      <div className={styles.container}>
        <input
          ref={inputRef}
          placeholder="ボタンを押したらフォーカスが当たる"
          className={styles.input}
        />
        <button onClick={handleClick} className={styles.button}>
          Focus the input
        </button>
      </div>
    </div>
  );
}
