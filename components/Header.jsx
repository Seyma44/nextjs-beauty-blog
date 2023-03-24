import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { getCategories } from '../services';

const Header = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories().then((newCategories) => {
      setCategories(newCategories);
    });
  }, []);

  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return  (
    <nav className="container mx-auto px-10 mb-8 bg-white rounded-lg shadow dark:bg-pink-600 m-4">
    <div className="container flex flex-wrap items-center justify-between mx-auto w-full inline-block py-8">
      <div className="md:float-left block">
          <Link href="/" className="flex items-center mb-4 sm:mb-0">
            <img src='./logo-no-background.png' className="h-12 mr-3" alt="Beauty Logo" />
          </Link>
      </div>
      <button 
          data-collapse-toggle="navbar-default" 
          type="button" 
          class="inline-flex items-center p-2 ml-3 text-sm text-white rounded-lg md:hidden hover:bg-pin-100 focus:outline-none focus:ring-2 focus:ring-pink-400 dark:text-white dark:hover:bg-pink-700 dark:focus:ring-pink-400" 
          aria-controls="navbar-default" 
          aria-expanded="false"
          onClick={toggleNav}>
          <span className="sr-only">Open main menu</span>
          <svg className="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path className={`${isNavOpen ? 'hidden' : 'block'}`} fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
            <path className={`${isNavOpen ? 'block' : 'hidden'}`} fillRule="evenodd" d="M2.292 3.292a1 1 0 011.414 0L10 9.586l6.292-6.294a1 1 0 011.414 1.414L11.414 11l6.292 6.292a1 1 0 01-1.414 1.414L10 12.414l-6.292 6.292a1 1 0 01-1.414-1.414L8.586 11 2.292 4.708a1 1 0 010-1.416z" clipRule="evenodd" />
          </svg>
        </button>
        <div className={`w-full md:block md:w-auto ${isNavOpen ? 'block' : 'hidden'}`} id="navbar-default">
            <div className="md:float-left md:contents flex flex-col p-4 mt-4 border border-rose-300 rounded-lg bg-rose-200 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-rose-300 md:dark:bg-rose-300 dark:border-pink-700">
              {categories.map((category, index) => (
                <Link 
                  key={index} 
                  href={`/category/${category.slug}`}>
                  <span className="md:float-right mt-2 align-middle text-white ml-4 font-semibold cursor-pointer">
                    {category.name}
                  </span>
                </Link>
              ))}
            </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;