"use client";

import { useMemo, useRef, useState } from "react";

import styles from "./styles.module.css";

const generateList = (length: number) => Array.from({ length }, (_, i) => i);
const staticList = generateList(100);

// * useMemoを使うと、親のstateが変更されても配列に渡した値が変更されない限り再計算を防げる
const UseMemo = ({ list }: { list: number[] }) => {
  const data = useMemo(() => {
    console.log("listが変更されて再計算", list.length);
    return list.map((num) => <li key={num}>{num + 1}</li>);
  }, [list]);
  return <ul>{data}</ul>;
};
// * 何も指定しない場合は、親のstateが変更されると再計算される
const NoUseMemo = () => {
  console.log("親のstateが変更されると再計算される", staticList.length);
  const data = staticList.map((num) => <li key={num}>{num + 1}</li>);
  return <ul>{data}</ul>;
};

export default function Page() {
  const [list, setList] = useState(generateList(100));
  const [bool, setBool] = useState(false);
  const count = useRef(0);

  const [firstName, setFirstName] = useState("John");
  const [lastName, setLastName] = useState("Doe");

  // * 通常の変数は再レンダーされるたびに再計算される
  const fullName = () => {
    console.log();
    console.log("memo化していない変数");
    return firstName + " " + lastName;
  };
  // * useMemoを使うと、依存するstateが変更されない限り再計算されない（vueのcomputedと同等の機能）
  const memoFullName = () => {
    useMemo(() => {
      console.log("memo化した変数");
      return firstName + " " + lastName;
    }, [firstName, lastName]);
  };

  fullName();
  memoFullName();

  const handleState = () => {
    count.current++;
    if (count.current % 5 === 0 && count.current !== 0) {
      setList(generateList(list.length + count.current));
    }

    setBool(!bool);
  };

  return (
    <div>
      <h1 className={styles.heading}>useMemoの使い方</h1>
      <div className={styles.container}>
        <p>親state : {bool ? "true" : "false"}</p>
        <button onClick={handleState} className={styles.button}>
          state更新
        </button>
        <UseMemo list={list} />
        <NoUseMemo />
      </div>
    </div>
  );
}
