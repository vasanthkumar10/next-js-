"use client";

import Link from "next/link";
import Navbar from "@/components/Navbar";
import { useState } from "react";

export default function Home() {
  const [count, setCount] = useState(0);
  return (
    <>
      <Navbar />
      <h1>Welcome to Pesto tech</h1>
      <Link href="/about">about</Link>
      <Link href="/products">products</Link>
      <h1>Count - {count}</h1>
      <button onClick={() => setCount((prev) => prev + 1)}>increment</button>
    </>
  );
}
