"use client";
import Image from "next/image";

const Nav = () => {
  return (
    <nav className="flex flex-row justify-between  gap-4">
      <a
        href="https://github.com/robinyoon-dev/disaster-msg-project"
        target="_blank"
        rel="noopener noreferrer"
        className=" flex flex-row justify-center items-center gap-1 font-bold py-2 px-4 
        text-black dark:text-gray-300 hover:text-gray-400
        dark:hover:text-gray-100
        "
      >
        <Image
          className="dark:invert"
          src="/github.svg"
          alt="GitHub Logo"
          width={24}
          height={24}
          priority
        />

        <p className=" hidden md:inline">GitHub</p>
      </a>
      <a
        href="https://velog.io/@robinyoondev"
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-row justify-center items-center gap-1 font-bold py-2 px-4 
        text-black dark:text-gray-300 hover:text-gray-400
        dark:hover:text-gray-100
        "
      >
        <Image
          className="dark:invert"
          src="/velog.svg"
          alt="Velog Logo"
          width={24}
          height={24}
          priority
        />
        <p className="hidden md:inline ">Velog</p>
      </a>
    </nav>
  );
};

export default Nav;
