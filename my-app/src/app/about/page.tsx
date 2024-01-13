"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

// export const metadata = {
//   title: "About",
//   description: "About page",
// };

export default function About() {
  const router = useRouter();

  const handleBtn = () => {
    console.log("going to home page");
    router.forward();
  };
  return (
    <>
      <Link href="/">Home</Link>
      <h1>About page</h1>
      <button onClick={handleBtn}>Go to Home page</button>
    </>
  );
}
