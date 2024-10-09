"use client";

import { memo, useMemo, useState } from "react";

import styles from "./styles.module.css";

const NormalComponent = ({ arr }: { arr: number[] }) => {
  console.log("usememoしてない値", arr);
  return <p>usememoしてない値</p>;
};
const UseMemoComponent = memo(({ arr }: { arr: number[] }) => {
  console.log("usememoしてる値", arr);
  return <p>usememoしてる値</p>;
});

export default function Page() {
  const [count, setCount] = useState(0);
  const [firstName, setFirstName] = useState("John");
  const [lastName, setLastName] = useState("Doe");

  const [memoFirstName, setMemoFirstName] = useState("山田");
  const [memoLastName, setMemoLastName] = useState("太郎");

  const [arr, setArr] = useState([1, 2, 3, 4, 5]);

  const normalArr = arr.map((num) => num + 1);
  const memoArr = useMemo(() => arr.map((num) => num + 1), [arr]);

  const handleCountUp = () => {
    setCount(count + 1);
    if (count % 5 === 0) {
      const randomFirstName = ["山田", "田中", "佐藤", "鈴木"][Math.floor(Math.random() * 4)];
      setMemoFirstName(randomFirstName);
      setArr([1, 2]);
    }
  };

  const NormalFullName = () => {
    console.log("memo化していない関数：", firstName + " " + lastName);

    return firstName + " " + lastName;
  };

  const memoFullName = useMemo(() => {
    console.log("memo化した関数：", memoFirstName + " " + memoLastName);

    return memoFirstName + " " + memoLastName;
  }, [memoFirstName, memoLastName]);

  return (
    <div>
      <h1 className={styles.heading}>useMemoの使い方</h1>
      <div className={styles.container}>
        <button onClick={handleCountUp}>COUNT UP</button>
        <p>count : {count}</p>

        <p>{NormalFullName()}</p>
        <p>{memoFullName}</p>

        <NormalComponent arr={normalArr} />
        <UseMemoComponent arr={memoArr} />
      </div>
    </div>
  );
}
