"use client";

export const TestCom = ({ hanlderClick }: { hanlderClick: () => void }) => {
  return (
    <div>
      <button onClick={hanlderClick}>Click</button>
    </div>
  );
};
