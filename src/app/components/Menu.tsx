"use client";

import Image from "next/image";
import { useState } from "react";
import Link from "next/link";

const Menu = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="">
      <Image
        src="/assets/menu.png"
        alt=""
        width={28}
        height={28}
        className="cursor-pointer"
        onClick={() => setOpen((prev) => !prev)}
      />
      {open && (
        <div className="absolute bg-black text-white left-0 top-20 w-full h-[calc(100vh-80px)] flex flex-col items-center justify-center gap-8 text-xl z-10">
          <Link href="/">Home</Link>
          <Link href="/">Shop</Link>
          <Link href="/">Sale</Link>
          <Link href="/">About</Link>
          <Link href="/">Contact</Link>
          <Link href="/">Login</Link>
          <Link href="/">Cart</Link>
        </div>
      )}
    </div>
  );
};

export default Menu;
