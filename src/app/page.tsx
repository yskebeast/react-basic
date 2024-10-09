"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";

const test = {
  style: {
    color: "red",
    fontSize: "2rem",
    fontWeight: "bold",
    display: "block",
    textDecoration: "underline",
  },
  id: "test",
};

export default function Page() {
  const pathname = usePathname();
  const router = useRouter();

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        gap: "1rem",
      }}
    >
      <h1>Index Page</h1>
      <Link
        style={{
          display: "block",
          textDecoration: "underline",
        }}
        href="/"
        className={`link ${pathname === "/" ? "active" : ""}`}
      >
        index
      </Link>
      <Link
        style={{
          display: "block",
          textDecoration: "underline",
        }}
        href="/dashboard"
      >
        dashboard
      </Link>
      <Link
        style={{
          display: "block",
          textDecoration: "underline",
        }}
        href="/blog/1"
      >
        blog 1
      </Link>
      <button {...test} type="button" onClick={() => router.push("/dashboard")}>
        button dashboard
      </button>
    </div>
  );
}
