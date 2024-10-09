"use client";

import { useReducer } from "react";

import styles from "./styles.module.css";

type Shape = { finger: number; emoji: string };
type Action = { type: string };

const shapeState = { finger: 0, emoji: "🤔" };
const shapeReducer = (shape: Shape, action: Action) => {
  switch (action.type) {
    case "rock": {
      return { finger: 0, emoji: "👊" };
    }
    case "paper": {
      return { finger: 5, emoji: "🖐" };
    }
    case "sissior": {
      return { finger: 2, emoji: "✌️" };
    }
    default: {
      return {
        finger: 10,
        emoji: "🤔",
      };
    }
  }
};

export default function Page() {
  const [shape, dispatch] = useReducer(shapeReducer, shapeState);
  const handleRock = () => {
    dispatch({ type: "rock" });
  };
  const handlePaper = () => {
    dispatch({ type: "paper" });
  };
  const handleSissior = () => {
    dispatch({ type: "sissior" });
  };

  return (
    <div>
      <h1 className={styles.heading}>useReducer</h1>
      <div className={styles.container}>
        <p>
          {shape.finger} : {shape.emoji}
        </p>
        <button onClick={handleRock}>グー</button>
        <button onClick={handlePaper}>パー</button>
        <button onClick={handleSissior}>チョキ</button>
      </div>
    </div>
  );
}
