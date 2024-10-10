"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";

const objStyle = {
  style: {
    color: "yellow",
    fontSize: "2rem",
    fontWeight: "bold",
    display: "block",
  },
  id: "objStyle",
};

const style: { [key: string]: string } = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  height: "100vh",
  gap: "1rem",
};

const linkStyle = {
  display: "block",
  textDecoration: "underline",
};

export default function Page() {
  const router = useRouter();
  const [randomPage, useRandomPage] = useState<null | number>(null);

  useEffect(() => {
    useRandomPage(Math.floor(Math.random() * 100));
  }, []);

  return (
    <div style={style}>
      <h1 {...objStyle}>Index Page</h1>
      <Link style={linkStyle} href={`/dynamic-route/${randomPage}`}>
        dynamic-route : {randomPage}
      </Link>
      <Link style={linkStyle} href="/dashboard">
        dashboard
      </Link>
      <button type="button" onClick={() => router.push("/dashboard")} style={linkStyle}>
        button dashboard
      </button>
    </div>
  );
}
