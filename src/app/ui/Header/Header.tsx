"use client";
import Link from "next/link";
import Search from "./Search";
import Skull from "../../../../public/skull.png";
import Image from "next/image";
import { useEffect, useState } from "react";

function AsideNav({
  open,
  localStorage,
}: {
  open: boolean;
  localStorage: string;
}) {
  return (
    <nav
      className={`${
        !open ? "max-lg:hidden" : ""
      } fixed flex  animate-shownav bg-gradient-to-t z-30 from-neutral-800 p-5  to-neutral-950  h-screen gap-5 text-xl flex-wrap flex-col `}>
      <Link
        className="transition-color border-b-1   min-w-40 text-center    duration-150  hover:opacity-40 p-3  "
        href="/">
        Home
      </Link>
      {localStorage && (
        <Link
          className=" transition-color   border-b-1    min-w-40 text-center duration-150  hover:opacity-40 p-3  "
          href="/user">
          {localStorage}
        </Link>
      )}
      {!localStorage && (
        <Link
          className=" bg-white text-black transition-color  rounded-2xl  min-w-40 text-center duration-150 mt-[270%]  hover:opacity-40 p-3 "
          href="/register">
          Register
        </Link>
      )}
      {localStorage && (
        <Link
          className="bg-white text-black transition-color  rounded-2xl  min-w-40 text-center duration-150 mt-[270%]  hover:opacity-40 p-3  "
          href="/user">
          Log Out
        </Link>
      )}
    </nav>
  );
}

export default function Header() {
  const [localStorage, setLocalStorage] = useState("");
  const [open, setOpen] = useState(false);
  useEffect(() => {
    if (window) {
      setLocalStorage(window.localStorage.getItem("user")!);
    }
  }, []);

  return (
    <header className="text-white flex-col min-h-[100px] flex fixed w-1/1 ">
      <button
        className=" lg:hidden max-lg:fixed z-50 w-15 bg-white h-15 rounded-full text-black cursor-pointer hover:text-neutral-700"
        onClick={() => setOpen(!open)}></button>
      <div className=" w-1/1 flex gap-5 p-5 items-center justify-center flex-wrap  ">
        <h1 className="flex items-center">
          <Image src={Skull} alt="title" height={70} />
          <span className="text-6xl">Horlem</span>
        </h1>
        <Search />
      </div>

      <AsideNav open={open} localStorage={localStorage} />
    </header>
  );
}
