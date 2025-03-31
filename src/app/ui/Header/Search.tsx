"use client";
import Image from "next/image";
import search from "image/search.png";
import { useState } from "react";

export default function Search() {
  const [focus, setFocus] = useState(false);
  return (
    <form className="flex items-center">
      <input
        onFocus={() => {
          setFocus(true);
          console.log(1);
        }}
        onBlur={() => {
          setFocus(false);
        }}
        className=" bg-[rgba(255,255,255,0.2)] rounded-tl-2xl rounded-bl-2xl outline-none h-[40px] w-20  p-5 transition-all duration-500 text-2xl text-black focus:bg-white focus:w-40"
        type="text"
      />
      <div
        className={`flex items-center transition-all duration-500 bg-[rgba(255,255,255,0.2)] ${
          focus && "bg-white"
        } rounded-tr-2xl rounded-br-2xl h-[40px] w-20  p-5`}>
        <Image
          className=" transition-all duration-300"
          height={30}
          src={search}
          alt="loupe"
        />
      </div>
    </form>
  );
}
