"use client";

import { useEffect, useRef, useState } from "react";

import styles from "./styles.module.css";

export default function Page() {
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

  const inputRef = useRef<HTMLInputElement>(null);
  const handleClick = () => {
    inputRef?.current?.focus();

    if (paragraphRef.current) {
      paragraphRef.current.style.color = "white";
    }
  };

  const objRef = useRef({ name: "レンダリング検証" });
  const [objRefState, setObjRefState] = useState(objRef.current);
  const handleRef = () => {
    // ! objRef.currentを更新してuseStateにセットしてもレンダリングされない
    // ! 理由としては、オブジェクトを更新しても参照が変わらないため、Reactは変更があったと認識しない
    objRef.current.name = "consoleでは更新されるがレンダリングしないためブラウザには更新されない";
    console.log(objRef.current); // *consoleでは更新されるがレンダリングしないためブラウザには更新されない
    setObjRefState(objRef.current);

    // ! useStateにセットする際は、新しいオブジェクトを生成する必要がある
    // ! これにより、Reactは参照が変わったと認識してレンダリングを行う
    objRef.current.name = "consoleとブラウザにも更新される";
    console.log(objRef.current); // *consoleでは更新されるがレンダリングしないためブラウザには更新されない
    setObjRefState({ ...objRef.current });
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
        <p>{objRefState.name}</p>
        <button onClick={handleRef} className={styles.button}>
          useRefを更新してレンダリングを試す
        </button>
      </div>
    </div>
  );
}
