// components/Navbar.tsx (or NavBar.tsx)
'use client'; // Add this directive for useState hook

import React, { useState } from 'react';
import Link from 'next/link'; // Import Next.js Link component for navigation

const Navbar: React.FC = () => {
  // State to manage the mobile menu visibility
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Function to toggle the mobile menu state
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Function to close mobile menu (useful when clicking a link)
  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  }

  return (
    <nav className="bg-white shadow-md rounded-b-lg sticky top-0 z-50"> {/* Added sticky positioning */}
      {/* Main container for the navbar content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Flex container to align items: Logo (Left), Links (Center), Button (Right) */}
        <div className="flex items-center justify-between h-16">

          {/* Section 1: Logo/Brand Section (Left) */}
          <div className="flex-shrink-0">
            {/* Use Next.js Link for the home link */}
            <Link href="/" className="text-xl font-bold text-indigo-600 rounded-md px-3 py-2 hover:text-indigo-800">
              YourApp {/* Replace with your actual app name/logo */}
            </Link>
          </div>

          {/* Section 2: Desktop Navigation Links Section (Center) */}
          {/* 'hidden md:flex': Show only on medium screens and up */}
          {/* 'justify-center': Center the links within this container */}
          {/* 'flex-1': Allow this section to grow and fill space */}
          <div className="hidden md:flex justify-center flex-1">
            <div className="flex items-baseline space-x-4">
              {/* Navigation links using Next.js Link */}
              <Link href="/" className="text-gray-700 hover:bg-gray-100 hover:text-gray-900 rounded-md px-3 py-2 text-sm font-medium">
                Home
              </Link>
              <Link href="/resident-profile" className="text-gray-700 hover:bg-gray-100 hover:text-gray-900 rounded-md px-3 py-2 text-sm font-medium">
                Resident Profile
              </Link>
              <Link href="/dashboard" className="text-gray-700 hover:bg-gray-100 hover:text-gray-900 rounded-md px-3 py-2 text-sm font-medium">
                Dashboard
              </Link>
              <Link href="/login" className="text-gray-700 hover:bg-gray-100 hover:text-gray-900 rounded-md px-3 py-2 text-sm font-medium">
                Login
              </Link>
              <Link href="/signup" className="text-gray-700 hover:bg-gray-100 hover:text-gray-900 rounded-md px-3 py-2 text-sm font-medium">
                Sign Up
              </Link>
            </div>
          </div>

          {/* Section 3: Mobile Menu Button Container (Right) */}
          {/* This container ensures proper spacing with justify-between */}
          {/* It holds the mobile button, which is hidden on desktop */}
          <div className="flex items-center"> {/* Container for the right side */}
             {/* Mobile Menu Button (Visible only on small screens) */}
            <div className="flex items-center md:hidden">
                <button
                type="button"
                onClick={toggleMobileMenu} // Add onClick handler to toggle menu
                className="bg-white inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                aria-controls="mobile-menu"
                aria-expanded={isMobileMenuOpen} // Dynamically set aria-expanded
                >
                <span className="sr-only">Open main menu</span>
                {/* Conditional rendering for menu icon (Hamburger/X) */}
                {isMobileMenuOpen ? (
                    // X icon (menu open)
                    <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                ) : (
                    // Hamburger icon (menu closed)
                    <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                )}
                </button>
            </div>
            {/* You could add desktop-only right-aligned items here if needed */}
            {/* E.g., <div className="hidden md:block"> Profile Icon </div> */}
          </div>

        </div>
      </div>

      {/* Mobile menu dropdown, show/hide based on menu state */}
      {/* Added 'md:hidden' to ensure it's only for mobile */}
      {isMobileMenuOpen && (
        <div className="md:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {/* Mobile navigation links - Added onClick to close menu */}
            <Link href="/" className="text-gray-700 hover:bg-gray-100 hover:text-gray-900 block rounded-md px-3 py-2 text-base font-medium" onClick={closeMobileMenu}>
              Home
            </Link>
            <Link href="/resident-profile" className="text-gray-700 hover:bg-gray-100 hover:text-gray-900 block rounded-md px-3 py-2 text-base font-medium" onClick={closeMobileMenu}>
              Resident Profile
            </Link>
            <Link href="/dashboard" className="text-gray-700 hover:bg-gray-100 hover:text-gray-900 block rounded-md px-3 py-2 text-base font-medium" onClick={closeMobileMenu}>
              Dashboard
            </Link>
            <Link href="/login" className="text-gray-700 hover:bg-gray-100 hover:text-gray-900 block rounded-md px-3 py-2 text-base font-medium" onClick={closeMobileMenu}>
              Login
            </Link>
            <Link href="/signup" className="text-gray-700 hover:bg-gray-100 hover:text-gray-900 block rounded-md px-3 py-2 text-base font-medium" onClick={closeMobileMenu}>
              Sign Up
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar; // Export the component
