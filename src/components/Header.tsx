"use client"
import Link from "next/link";
import { useState } from "react";
import { BsCart } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import { HiOutlineMagnifyingGlass } from "react-icons/hi2";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-[36px] left-0 w-full bg-white shadow z-50">
      <div className="container mx-auto py-3 flex justify-between items-center">
        {/* Left Section */}
        <div className="flex items-center gap-4">
          {/* Hamburger Menu */}
          <button
            className="text-2xl lg:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Menu"
          >
            &#9776;
          </button>
          {/* Logo */}
          <Link href="/" className="font-sans text-xl font-bold text-black">
            SHOP.CO
          </Link>
        </div>

        {/* Navigation */}
        <nav
          className={`absolute lg:static top-[4rem] left-0 w-full lg:w-auto bg-white lg:bg-transparent lg:flex items-center gap-6  lg:p-0 ${isMenuOpen ? "block" : "hidden"
            }`}
        >
          <Link href="#" className="text-gray-800 hover:text-blue-500">
            Shop
          </Link>
          <Link href="#" className="text-gray-800 hover:text-blue-500">
            On Sale
          </Link>
          <Link href="#" className="text-gray-800 hover:text-blue-500">
            New Arrivals
          </Link>
          <Link href="#" className="text-gray-800 hover:text-blue-500">
            Brands
          </Link>
        </nav>

        {/* Right Section */}
        <div className="flex items-center gap-8">

          {/* Search Bar */}
          <div className="hidden lg:block">

            <div className="relative w-full max-w-md">
              <HiOutlineMagnifyingGlass className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search for products..."
                className="border rounded-full bg-lightGray pl-10 pr-4 py-2 focus:outline-none w-[300px] h-[40px]"
              />
            </div>

          </div>
          {/* Cart Icon */}
          <button className="text-xl lg:hidden block" aria-label="Cart">
          <HiOutlineMagnifyingGlass />
          </button>
          <button className="text-xl" aria-label="Cart">
            <BsCart />
          </button>
          <button className="text-xl" aria-label="Cart">
            <CgProfile />
          </button>
        </div>
      </div>
    </header>
  );
}