"use client";

import { memo, useMemo, useState } from "react";

import styles from "./styles.module.css";

const NormalComponent = (arr: number[]) => {
  console.log("usememoしてない値", arr);
  return <p>usememoしてない値</p>;
};
const UseMemoComponent = memo((arr: number[]) => {
  console.log("ああああああああああああああああああああああああああusememoしてる値", arr);
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

// const generateList = (length: number) => Array.from({ length }, (_, i) => i);
// const staticList = generateList(100);

// // * useMemoを使うと、親のstateが変更されても配列に渡した値が変更されない限り再計算を防げる
// const UseMemo = ({ list }: { list: number[] }) => {
//   const data = useMemo(() => {
//     console.log("listが変更されて再計算", list.length);
//     return list.map((num) => <li key={num}>{num + 1}</li>);
//   }, [list]);
//   return <ul>{data}</ul>;
// };
// // * 何も指定しない場合は、親のstateが変更されると再計算される
// const NoUseMemo = () => {
//   console.log("親のstateが変更されると再計算される", staticList.length);
//   const data = staticList.map((num) => <li key={num}>{num + 1}</li>);
//   return <ul>{data}</ul>;
// };

// export default function Page() {
//   const [list, setList] = useState(generateList(100));
//   const [bool, setBool] = useState(false);
//   const count = useRef(0);

//   const [firstName, setFirstName] = useState("John");
//   const [lastName, setLastName] = useState("Doe");

//   // * 通常の変数は再レンダーされるたびに再計算される
//   const fullName = () => {
//     console.log();
//     console.log("memo化していない変数");
//     return firstName + " " + lastName;
//   };
//   // * useMemoを使うと、依存するstateが変更されない限り再計算されない（vueのcomputedと同等の機能）
//   const memoFullName = () => {
//     useMemo(() => {
//       console.log("memo化した変数");
//       return firstName + " " + lastName;
//     }, [firstName, lastName]);
//   };

//   fullName();
//   memoFullName();

//   const handleState = () => {
//     count.current++;
//     if (count.current % 5 === 0 && count.current !== 0) {
//       setList(generateList(list.length + count.current));
//     }

//     setBool(!bool);
//   };

//   return (
//     <div>
//       <h1 className={styles.heading}>useMemoの使い方</h1>
//       <div className={styles.container}>
//         <p>親state : {bool ? "true" : "false"}</p>
//         <button onClick={handleState} className={styles.button}>
//           state更新
//         </button>
//         <UseMemo list={list} />
//         <NoUseMemo />
//       </div>
//     </div>
//   );
// }
