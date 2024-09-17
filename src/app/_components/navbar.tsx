"use client";

import Link from "next/link";
import Menu from "./menu";
import Image from "next/image";
import SearchBar from "./search-bar";
import NavIcons from "./nav-icons";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

  return (
    <div className="h-20 px-4 md:px-8 lg:px-16 xl:32 2xl:px-64 relative">
      {/* Mobile */}
      <div className="h-full flex items-center justify-between md:hidden">
        <Link href="/">
          <div className="text-2xl tracking-wide">DShop</div>
        </Link>
        <Menu />
      </div>
      {/* Full screens */}
      <div className="hidden md:flex items-center justify-between gap-8 h-full">
        <div className="w-1/3 xl:w-1/2 flex items-center gap-12">
          <Link
            href="/"
            className={`flex items-center gap-3 ${isActive("/") ? "active" : ""}`}
          >
            <Image src="/assets/logo.png" alt="Logo" width={50} height={50} />
            <div className="text-2xl tracking-wide">DShop</div>
          </Link>
          <div className="hidden xl:flex gap-4">
            <Link
              href="/"
              className={`flex items-center gap-3 ${isActive("/") ? "font-active text-active-color" : ""}`}
            >
              Home
            </Link>
            <Link href="/shop" className={isActive("/shop") ? "active" : ""}>
              Shop
            </Link>
            <Link href="/sale" className={isActive("/sale") ? "active" : ""}>
              Sale
            </Link>
            <Link href="/about" className={isActive("/about") ? "active" : ""}>
              About
            </Link>
            <Link
              href="/contact"
              className={isActive("/contact") ? "active" : ""}
            >
              Contact
            </Link>
          </div>
        </div>
        <div className="w-2/3 xl:w-1/2 flex items-center justify-between gap-8">
          <SearchBar />
          <NavIcons />
        </div>
      </div>
    </div>
  );
};

export default Navbar;

