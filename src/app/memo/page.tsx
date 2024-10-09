"use client";

import { memo, useRef, useState } from "react";

import styles from "./styles.module.css";

const NormalComponent = ({ bool }: { bool: boolean }) => {
  console.log("NormalComponent：propsが変更されなくても毎回レンダリングされる");

  return <p>propsが変更されなくても毎回レンダリングされる</p>;
};

const MemoComponent = memo(({ bool }: { bool: boolean }) => {
  console.log("MemoComponent：propsが変更された時に再レンダリング");

  return <p>propsが変更された時に再レンダリング</p>;
});

export default function Page() {
  console.log("Page：毎回レンダリングされる");

  const [count, setCount] = useState(0);
  const [bool, setBool] = useState(false);

  const handleClick = () => {
    console.log(count);
    if (count % 3 === 0) {
      setBool(!bool);
    }
    setCount(count + 1);
  };

  return (
    <div>
      <h1 className={styles.heading}>useCallbackの使い方</h1>
      <div className={styles.container}>
        <button onClick={handleClick}>COUNT UP</button>
        <p>count : {count}</p>

        <NormalComponent bool={bool} />
        <MemoComponent bool={bool} />
      </div>
    </div>
  );
}
