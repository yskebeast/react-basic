"use client";

import { useReducer } from "react";

import styles from "./styles.module.css";

interface Signal {
  color: string;
  signal: string;
}
interface Action {
  color: string;
}

const signalInitial = {
  color: "red",
  signal: "赤",
};

const signalReducer = (signal: Signal, action: Action) => {
  switch (action.color) {
    case "red": {
      return { color: "red", signal: "赤" };
    }
    case "yellow": {
      return { color: "yellow", signal: "黄色" };
    }
    case "blue": {
      return { color: "blue", signal: "青" };
    }
    default: {
      return signal;
    }
  }
};

export default function Page() {
  const [signal, dispatch] = useReducer(signalReducer, signalInitial);

  const handleRed = () => {
    dispatch({ color: "red" });
  };
  const handleYellow = () => {
    dispatch({ color: "yellow" });
  };
  const handleBlue = () => {
    dispatch({ color: "blue" });
  };

  return (
    <div>
      <h1 className={styles.heading}>useReducer</h1>
      <div className={styles.container}>
        <p>信号 : {signal?.color}</p>
        <button className={styles.button} onClick={handleRed}>
          赤
        </button>
        <button className={styles.button} onClick={handleYellow}>
          黄色
        </button>
        <button className={styles.button} onClick={handleBlue}>
          青
        </button>
      </div>
    </div>
  );
}
