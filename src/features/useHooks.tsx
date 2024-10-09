"use client";
import { useState } from "react";

export const useHooks = () => {
  const [state, setState] = useState(false);

  const hanlderClick = () => {
    setState(!state);
  };

  return { state, hanlderClick };
};
