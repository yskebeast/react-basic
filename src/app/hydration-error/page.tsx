"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

import styles from "./styles.module.css";

const inline = {
  display: "block",
  margin: "20px",
  textDecoration: "underline",
};

export default function Page() {
  // const [random, setRandom] = useState<null | number>(window?.innerHeight || null);
  const [random, setRandom] = useState<null | number>(Math.floor(Math.random() * 6) + 1);

  // useEffect(() => {
  //   const result = Math.floor(Math.random() * 6) + 1;
  //   setTest(result);
  // }, []);

  return (
    <div>
      <h1 className={styles.heading}>Hydration Error</h1>
      <div className={styles.container}>
        <p>ランダム数値 : {random}</p>
        <div>
          <Link href="https://note.com/mtng420/n/n4c7ca425f9a3" target="_blank" style={inline}>
            NextjsのHydrationって何？
          </Link>
          <Link href="https://qiita.com/poppy_83/items/a9784d873a261f67f472" target="_blank" style={inline}>
            Hydration Errorと戦う
          </Link>
          <Link href="https://qiita.com/Yametaro/items/22cde58cd6abf577f1a4" target="_blank" style={inline}>
            7歳娘「パパ、ReactのHydration Errorってなんで起こるの？」
          </Link>
        </div>
      </div>
    </div>
  );
}
