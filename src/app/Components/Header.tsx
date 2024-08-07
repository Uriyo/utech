'use client'

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Header = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="bg-white shadow-md w-full">
      <div className="container mx-auto px-4 lg:px-20 py-6 flex items-center justify-between">
        <div className="flex items-center">
          <Link href="/" className="flex items-center">
            <Image
              src="/images/LogoHeader.png"
              alt="Uteach Logo"
              width={100}
              height={50}
            />
          </Link>
        
        <nav className="hidden lg:flex ml-12 space-x-12 relative">
          <Link href="/products" className="text-gray-700 hover:text-gray-900">
            Products
          </Link>
          <Link href="/solutions" className="text-gray-700 hover:text-gray-900">
            Solutions
          </Link>
          <Link href="/pricing" className="text-gray-700 hover:text-gray-900">
            Pricing
          </Link>
          <div className="inline-block relative">
            <button
              onClick={toggleDropdown}
              className="flex items-center text-gray-700 hover:text-gray-900"
            >
              Resources{"  "}
              <Image
                src="/images/chevron-down.png"
                alt="icon"
                className='mx-2'
                width={20}
                height={20}
              />
            </button>
            {dropdownOpen && (
              <ul className="absolute mt-2 py-2 w-48 bg-white border rounded shadow-lg z-50">
                <li>
                  <Link href="/resource1" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                    Resource 1
                  </Link>
                </li>
                <li>
                  <Link href="/resource2" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                    Resource 2
                  </Link>
                </li>
                <li>
                  <Link href="/resource3" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                    Resource 3
                  </Link>
                </li>
              </ul>
            )}
          </div>
        </nav>
        </div>
        <div className="hidden lg:flex items-center space-x-4">
          <Link href="/login" className="text-gray-700 hover:text-gray-900">
            Log In
          </Link>
          <Link
            href="/signup"
            className="bg-white border-[3px] border-gray-700 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-100"
          >
            Sign Up Now
          </Link>
        </div>
        <div className="lg:hidden">
          <button onClick={toggleMenu} className="text-gray-700 focus:outline-none">
            <Image src="/images/MenuBtn.png" alt="Menu Icon" width={24} height={24} />
          </button>
        </div>
      </div>
      {menuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-200">
          <nav className="px-4 py-4 space-y-2">
            <Link href="/products" className="block text-gray-700 hover:text-gray-900">
              Products
            </Link>
            <Link href="/solutions" className="block text-gray-700 hover:text-gray-900">
              Solutions
            </Link>
            <Link href="/pricing" className="block text-gray-700 hover:text-gray-900">
              Pricing
            </Link>
            <div className="relative">
              <button
                onClick={toggleDropdown}
                className="flex items-center w-full text-gray-700 hover:text-gray-900"
              >
                Resources{"  "}
                <Image
                  src="/images/chevron-down.png"
                  alt="icon"
                  className='mx-2'
                  width={20}
                  height={20}
                />
              </button>
              {dropdownOpen && (
                <ul className="mt-2 py-2 w-full bg-white border rounded shadow-lg">
                  <li>
                    <Link href="/resource1" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                      Resource 1
                    </Link>
                  </li>
                  <li>
                    <Link href="/resource2" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                      Resource 2
                    </Link>
                  </li>
                  <li>
                    <Link href="/resource3" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                      Resource 3
                    </Link>
                  </li>
                </ul>
              )}
            </div>
            <Link href="/login" className="block text-gray-700 hover:text-gray-900">
              Log In
            </Link>
            <Link href="/signup" className="block bg-white border-[3px] border-gray-700 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-100">
              Sign Up Now
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
