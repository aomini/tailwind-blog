import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const Navbar = () => {

    const [isMounted, setIsMounted] = useState(false);
    const { theme, setTheme } = useTheme();

    useEffect(() => {
        setIsMounted(true);
    }, []);

    const switchTheme = () => {
        if (isMounted) {
            setTheme(theme === "light" ? "dark" : "light");
        }
    };
    return (
        <>
            <nav className="flex items-center justify-between flex-wrap bg-transparent p-8">
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
                <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
                    <div className="text-sm lg:flex-grow content-center">
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

                        <button
                            className="border-2 hover:border-red-500 rounded-full  w-14    h-14 p-2 m-auto  mx-1" >
                            <img className="object-contain min-h-full min-w-full" src="https://kentcdodds.com/img/image/upload/q_auto,f_auto/kentcdodds.com/illustrations/kody_profile_white" />
                        </button>

                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar
