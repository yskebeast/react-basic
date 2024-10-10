"use client";

import { useEffect, useRef } from "react";

import styles from "./styles.module.css";

export default function Page() {
  const inputRef = useRef<HTMLInputElement>(null);
  const paragraphRef = useRef<HTMLParagraphElement>(null);

  // ! 初回レンダリング時にはnullが返ってくるためpタグの属性は取得できない
  console.log(paragraphRef.current);
  // ! 値を更新してもレンダリングされないため、pタグの属性は取得できない
  if (paragraphRef.current) {
    paragraphRef.current.style.color = "blue";
  }

  useEffect(() => {
    if (paragraphRef.current) {
      paragraphRef.current.style.color = "yellow";
    }

    setTimeout(() => {
      if (paragraphRef.current) {
        paragraphRef.current.style.color = "red";
      }
    }, 2000);
  }, []);

  const handleClick = () => {
    inputRef?.current?.focus();

    if (paragraphRef.current) {
      paragraphRef.current.style.color = "white";
    }
  };

  return (
    <div>
      <h1 className={styles.heading}>useRef</h1>
      <div className={styles.container}>
        <p ref={paragraphRef}>useRefで要素を取得する</p>
        <input ref={inputRef} placeholder="ボタンを押したらフォーカスが当たる" className={styles.input} />
        <button onClick={handleClick} className={styles.button}>
          Focus the input
        </button>
      </div>
    </div>
  );
}
