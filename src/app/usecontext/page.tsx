"use client";

import { createContext, useContext, useMemo, useState } from "react";

const ThemeContext = createContext<{
  theme: string;
  setTheme?: (theme: string) => void;
}>({ theme: "light" });

const FristComponent = () => {
  return (
    <>
      <p>1つ目のコンポね</p>
      <SecoundComponent />
    </>
  );
};

const SecoundComponent = () => {
  const [list, setList] = useState<number[]>([]);
  const { theme, setTheme } = useContext(ThemeContext);
  const test = () => {
    setTheme!("white");
  };

  return (
    <>
      <p>2つ目のコンポね</p>
      <div>{list}</div>
      <button onClick={test}>themeを変更する</button>
      <ThirdComponent />
    </>
  );
};

const ThirdComponent = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <>
      <p>3つ目のコンポね</p>
      <p>propsなしで受け取った値 : {theme}</p>
    </>
  );
};

export default function Page() {
  const [theme, setTheme] = useState<string>("light");

  const contextValue = useMemo(() => ({ theme, setTheme }), [theme]);

  return (
    <ThemeContext.Provider value={contextValue}>
      <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
        クリック
      </button>
      <FristComponent />
    </ThemeContext.Provider>
  );
}
