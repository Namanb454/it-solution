import React, { useState, useEffect } from 'react';
// import { BsFillCartFill } from "react-icons/bs";
// import { HiMiniBars4 } from "react-icons/hi";

import { Link } from 'react-router-dom';
const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false);
    const navbar = [
        { 'id': '1', 'nav': 'Intro', 'link': '#' },
        { 'id': '2', 'nav': 'About Us', 'link': '#about' },
        { 'id': '3', 'nav': 'Services', 'link': '#services' },
        { 'id': '4', 'nav': 'Features', 'link': '#features' },
        { 'id': '5', 'nav': 'Demo', 'link': '#Demo' },
        // { 'id': '5', 'nav': 'Meet The Team', 'link': '/team' },
        // { 'id': '5', 'nav': 'Get In Touch' }
    ];
    // 

    const toggleHomeu = () => {
        setIsOpen(!isOpen);
    };
    const [navSize, setnavSize] = useState("5rem");
    const [navColor, setnavColor] = useState("transparent");
    const [textcolor, settextcolor] = useState("white");
    const listenScrollEvent = () => {
        window.scrollY > 10 ? setnavColor("white") : setnavColor("transparent");
        window.scrollY > 10 ? setnavSize("4rem") : setnavSize("5rem");
        window.scrollY > 10 ? settextcolor("#6527BE") : settextcolor("white");
    };
    useEffect(() => {
        window.addEventListener("scroll", listenScrollEvent);
        return () => {
            window.removeEventListener("scroll", listenScrollEvent);
        };
    }, []);
    return (
        <nav style={{
            backgroundColor: navColor,
            height: navSize,
            transition: "all 0.5s",
            color: textcolor,
        }}>
            <div className="w-full mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className=" w-full flex items-center ">
                        <div className="flex-shrink-0">
                            {/* <img className="h-8 w-8" src="/logo.svg" alt="Logo" /> */}
                            <Link to='/' className='text-2xl font-bold '>B&K Solutions</Link>
                        </div>
                        <div className="hidden md:block mx-auto">
                            <div className="ml-10 flex items-baseline space-x-4">
                                {navbar.map(data => {

                                    return (
                                        <a key={data.id}
                                            href={data.link}
                                            className="font-bold hover:text-[#ec634b] transition-all px-3 py-2 rounded-md text-base"
                                        >
                                            <span>{data.nav}</span>
                                            <span className="absolute left-0 -bottom-1 w-full h-2 bg-[#ec634b] -z-10 group-hover:h-full group-hover:transition-all"></span>
                                        </a>

                                    )
                                })}

                                <Link
                                    to="/contact"
                                    className="text-white font-semibold bg-[#6527BE] hover:bg-white border-2 border-[#9681EB] transition-all hover:text-[#6527BE] px-5 py-[5px] rounded-md text-base"
                                >
                                    Get In Touch
                                </Link>

                            </div>
                        </div>
                    </div>
                    <div className="-mr-2 flex md:hidden">
                        <button
                            onClick={toggleHomeu}
                            type="button"
                            className="bg-white inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-black hover:bg-white focus:outline-none focus:ring- focus:ring-offset- focus:ring-offset-gray-800 focus:ring-white"
                            aria-controls="mobile-Homeu"
                            aria-expanded="false"
                        >
                            {/* <span className="">Open main Homeu</span> */}
                            {/* Icon when Homeu is closed */}
                            {!isOpen ? (
                                <svg
                                    className="block h-6 w-6"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    aria-hidden="true"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h16/4 18h16"
                                    />
                                </svg>

                            ) : (
                                // Icon when Homeu is open
                                <svg
                                    className="block h-6 w-6"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    aria-hidden="true"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                                // <HiMiniBars4/>
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Homeu, toggle classes based on Homeu state */}
            <div
                className={`${isOpen ? 'block' : 'hidden'
                    } md:hidden bg-[#F1EEE9]`}
                id="mobile-Homeu"
            >
                <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">

                    {navbar.map(data => {
                        return (

                            <a key={data.id}
                                href={data.link}
                                className="text-[#15133C] font-semibold hover:text-[#EC994B] transition-all block px-3 py-2 rounded-md text-base"
                            >
                                {data.nav}
                            </a>
                        )
                    })}
                    <Link
                        to="/"
                        className="w-fit text-white font-semibold bg-[#EC994B] hover:bg-white border-2 border-[#EC994B] transition-all hover:text-[#EC994B] block px-5 py-[5px] rounded-md text-base"
                    >
                        Get In Touch
                    </Link>

                    {/* <Link
                        to="/"
                        className="text-[#EC994B] flex w-fit bg-white font-semibold hover:bg-[#EC994B] hover:text-[#15133C] block px-3 py-2 rounded-md text-base"
                    >
                        <span className=' mx-1 my-auto'>
                            <BsFillCartFill />
                        </span>
                        Cart
                    </Link> */}

                    {/* <button

                        className="text-[#EC994B] w-fit bg-white font-semibold hover:bg-[#EC994B] hover:text-[#15133C] block px-5 py-2 rounded-md text-base"
                    >
                        Logout
                    </button>

                    <button

                        className="text-[#EC994B] w-fit bg-white font-semibold hover:bg-[#EC994B] hover:text-[#15133C] block px-5 py-2 rounded-md text-base"
                    >
                        Login
                    </button> */}

                </div>
            </div>
        </nav>
    );
};

export default Navbar;
