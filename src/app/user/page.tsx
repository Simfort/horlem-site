"use client";

import { useEffect, useState } from "react";

export default function Page() {
  const [localStorage, setLocalStorage] = useState("");

  useEffect(() => {
    if (window) {
      setLocalStorage(window.localStorage.getItem("user")!);
    }
  }, []);
  return (
    <main>
      <h1 className="text-2xl text-white">{localStorage}</h1>
    </main>
  );
}
