'use client'
import React, { useState } from 'react';
import { faUtensils } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Navbar = () => {
  const [isCollapsed, setIsCollapsed] = useState(true);

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <header className="flex flex-wrap sm:justify-start sm:flex-nowrap z-50 w-full bg-white border-b border-gray-200 text-sm py-3 sm:py-0 dark:bg-gray-800 dark:border-gray-700">
      <nav className="relative max-w-7xl w-full mx-auto px-4 sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8" aria-label="Global">
        <div className="flex items-center justify-between">
          <a href="#" className="flex tracking-widest text-[#9b7b32] font-bold text-xl">
            <span>
              Elmajd FZE LLC 
            </span>
            
          </a>
          <div className="sm:hidden">
            <button
              type="button"
              className="size-9 flex justify-center items-center text-sm font-semibold rounded-lg border border-gray-200 text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
              onClick={toggleCollapse}
              aria-label="Toggle navigation"
            >
              <svg className={`size-4 ${isCollapsed ? 'text-gray-800' : 'text-gray-800'} flex-shrink-0`} width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
              </svg>
            </button>
          </div>
        </div>
        <div className={`hs-collapse ${isCollapsed ? 'hidden' : 'block'} overflow-hidden transition-all duration-300 sm:block`}>
          <div className="flex flex-col  items-center mx-auto gap-y-4 gap-x-0 mt-5 sm:flex-row sm:items-center sm:justify-end sm:gap-y-0 sm:gap-x-7 sm:mt-0 sm:ps-7">
            <a className="font-bold text-[#3b4f34] hover:text-[#9b7b32] sm:py-6 dark:text-gray-400 dark:hover:text-[#3b4f34]" href="#" aria-current="page">Home</a>
            <a className="font-bold text-[#3b4f34] hover:text-[#9b7b32] sm:py-6 dark:text-gray-400 dark:hover:text-[#3b4f34]" href="#menu">Items</a>
            <a className="font-bold text-[#3b4f34] hover:text-[#9b7b32] sm:py-6 dark:text-gray-400 dark:hover:text-[#3b4f34]" href="#openingHours">Contact us</a>
            <a className="font-bold text-[#3b4f34] hover:text-[#9b7b32] sm:py-6 dark:text-gray-400 dark:hover:text-[#3b4f34]" href="#branches">Branches</a>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
