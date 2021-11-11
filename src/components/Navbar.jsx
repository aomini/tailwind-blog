import { useTheme } from "next-themes";
import React from "react";
import Image from "next/image"

const Navbar = () => {
    const { theme, setTheme } = useTheme();

    const switchTheme = () => {
        setTheme(theme === "light" ? "dark" : "light");
    };

    return (
        <>
            <nav className="flex items-center justify-between flex-wrap bg-transparent px-16 py-10">
                <div className="flex items-center flex-shrink-0 text-black mr-6">

                    <h1 className="font-semibold text-2xl tracking-tight dark:text-white">
                        Kent C. Dodds
                    </h1>
                </div>
                <div className="block lg:hidden">
                    <button className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
                        <svg
                            className="fill-current h-3 w-3"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <title>Menu</title>
                            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                        </svg>
                    </button>
                </div>
                <div className="w-full  flex justify-center lg:flex lg:items-center lg:w-auto">
                    <div className=" text-sm flex justify-center">
                        <a
                            href="#responsive-header"
                            className="block mt-4 lg:inline-block lg:mt-0 text-lg text-gray-500 hover:text-black mr-4"
                        >
                            Blog
                        </a>
                        <a
                            href="#responsive-header"
                            className="block mt-4 lg:inline-block lg:mt-0 text-lg text-gray-500 hover:text-black mr-4"
                        >
                            Courses
                        </a>
                        <a
                            href="#responsive-header"
                            className="block mt-4 lg:inline-block lg:mt-0 text-lg text-gray-500 hover:text-black mr-4"
                        >
                            Discord
                        </a>

                        <a
                            href="#responsive-header"
                            className="block mt-4 lg:inline-block lg:mt-0 text-lg text-gray-500 hover:text-black mr-4"
                        >
                            Chats
                        </a>
                        <a
                            href="#responsive-header"
                            className="block mt-4 lg:inline-block lg:mt-0 text-lg text-gray-500 hover:text-black mr-4"
                        >
                            Calls
                        </a>
                        <a
                            href="#responsive-header"
                            className="block mt-4 lg:inline-block lg:mt-0 text-lg text-gray-500 hover:text-black mr-4"
                        >
                            Workshops
                        </a>
                        <a
                            href="#responsive-header"
                            className="block mt-4 lg:inline-block lg:mt-0 text-lg text-gray-500 hover:text-black mr-4"
                        >
                            About
                        </a>

                    </div>
                    <div className="flex justify-center items-center">
                        <button onClick={switchTheme}
                            className="border-2 hover:border-red-500 rounded-full  w-14    h-14 p-1 m-auto"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="  h-6 w-6 m-auto" fill="none" viewBox="0 0 22 22" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                            </svg>
                        </button>

                        <button >
                            <div className="relative m-auto  mx-1">
                                <svg className="animate-spin-slow hover:animate-spin" height="56" width="56" viewBox="0 0 56 56">
                                    <path d="M29.465,0.038373A28,28,0,0,1,52.948,40.712L51.166,39.804A26,26,0,0,0,29.361,2.0356Z" className="text-yellow-500" fill="currentColor"></path>
                                    <path d="M51.483,43.250A28,28,0,0,1,4.5172,43.250L6.1946,42.161A26,26,0,0,0,49.805,42.161Z" className="text-blue-500" fill="currentColor"></path>
                                    <path d="M3.0518,40.712A28,28,0,0,1,26.535,0.038373L26.639,2.0356A26,26,0,0,0,4.8338,39.804Z" className="text-red-500" fill="currentColor"></path>
                                </svg>
                                {/* <img className="absolute top-3 left-2 flex content-center w-10 h-10l" src="https://kentcdodds.com/img/image/upload/q_auto,f_auto/kentcdodds.com/illustrations/kody_profile_white" /> */}
                                <div className="absolute top-2 left-3 flex content-center w-10 h-10">
                                    <Image src="/kody_profile_white.png" alt="facelogo" height={30} width={30} />
                                </div>


                            </div>

                        </button>

                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar

