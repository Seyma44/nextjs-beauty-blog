import Link from 'next/link';
import React from 'react';

const Footer = () => {
return (
    <footer className="bg-white rounded-lg shadow dark:bg-pink-600 m-4">    
        <div className="w-full container mx-auto p-4 md:px-6 md:py-8">
            <div className="sm:flex sm:items-center sm:justify-between">
                <Link href="/" className="flex items-center mb-4 sm:mb-0">
                    <img src='./logo-no-background.png' className="h-8 mr-3" alt="Beauty Logo" />
                </Link>
                <ul className="flex flex-wrap items-center mb-6 text-sm text-gray-500 sm:mb-0 dark:text-white">
                    <li>
                        <a href="#" className="mr-4 hover:underline md:mr-6 ">About</a>
                    </li>
                    <li>
                        <a href="#" className="mr-4 hover:underline md:mr-6">Privacy Policy</a>
                    </li>
                    <li>
                        <a href="#" className="mr-4 hover:underline md:mr-6 ">Licensing</a>
                    </li>
                    <li>
                        <a href="#" className="hover:underline">Contact</a>
                    </li>
                </ul>
            </div>
            <hr className="my-6 border-white sm:mx-auto dark:border-white lg:my-8" />
            <span className="block text-sm text-white sm:text-center dark:text-white">© 2023 <a href="#" className="hover:underline">Seyma</a>. All Rights Reserved.</span>
        </div>
    </footer>
    );
};

export default Footer;