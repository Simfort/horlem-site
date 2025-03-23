import Link from "next/link";
import Search from "./Search";
import Skull from "../../../../public/skull.png";
import Image from "next/image";

export default function Header() {
  return (
    <header className="text-white bg-black min-h-[100px] gap-5 p-5 flex items-center justify-around">
      <h1 className="flex items-center">
        <Image src={Skull} alt="title" height={70} />
        <span>Horlem</span>
      </h1>
      <nav className="flex gap-20 text-xl">
        <Search />
        <Link
          className=" transition-color min-w-40 text-center  duration-150  hover:text-gray-400 p-3 rounded-2xl "
          href="/">
          Home
        </Link>
        <Link
          className=" transition-color min-w-40 text-center  duration-150  hover:text-gray-400 p-3 rounded-2xl "
          href="/user">
          You
        </Link>
        <Link
          className=" transition-color min-w-40 text-center  duration-150  hover:text-gray-400 p-3 rounded-2xl "
          href="/register">
          Register
        </Link>
      </nav>
    </header>
  );
}
