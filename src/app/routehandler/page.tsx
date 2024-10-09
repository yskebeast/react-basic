"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";

interface List {
  id: number;
  name: string;
}

export default function Page() {
  const [list, setList] = useState<Array<List>>([]);
  const path = usePathname();

  async function handleList() {
    const res = await fetch(`${path}/test`, {
      method: "GET",
    });
    const data = await res.json();
    setList(data);
  }

  return (
    <div className="text-center mt-8">
      <button className="bg-green-700 p-2" onClick={handleList}>
        routehandlerからデータを取得
      </button>
      {list.map((item) => {
        return (
          <div key={item.id} className="border p-2 mt-2">
            <h2>{item.name}</h2>
          </div>
        );
      })}
    </div>
  );
}
