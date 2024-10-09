"use client";

import { useHooks } from "@/src/features/useHooks";
import { TestCom } from "@/src/features/TestCom";

export default function Page() {
  const { state, hanlderClick }: { state: boolean; hanlderClick: () => void } = useHooks();

  return (
    <div>
      <h1>Test Page</h1>
      <p>Test page content</p>
      <p>{state ? "ああああああああああ" : "jんんんんんん"}</p>
      <TestCom hanlderClick={hanlderClick} />
    </div>
  );
}
