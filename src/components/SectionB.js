const SectionB = () => {
    return (
        <>
            <div className="container bg-gray-100  mt-4 p-10 w-11/12 m-auto rounded dark:bg-gray-800">
                <div className="my-8 m-auto  py-8 px-4">
                    <div className="grid grid-cols-2 gap-4 justify-items-auto h-auto mt-9">
                        <div className="  px-2 py-2 pr-6 text-gray-800 dark:text-white">
                            <h2 className="leading-tight text-left w-3/4  font-semibold text-4xl pl-4">Having a hard time keeping up with JavaScript?</h2>
                        </div>
                        <div className="text-gray-400    px-2 py-2 dark:text-gray-400">
                            <h2 className="leading-tight text-left w-3/4  font-semibold text-4xl">Well, you are in the right place. My website is your one stop shop for everything you need to build JavaScript apps.</h2>
                        </div>

                    </div>

                </div>
                <hr />
                <div className="my-8 m-auto  py-8 px-4">
                    <div className="grid grid-cols-2 gap-4 justify-items-auto h-auto mt-9">
                        <div className="  px-1 py-2 pr-6 text-gray-800 dark:text-white ">

                            <div className="leading-tight text-left w-3/4  font-semibold  pl-4 mt-36 ">

                                <button className="hover:text-primary inline-flex items-center p-0 w-full focus:bg-transparent border-none transition text-primary text-7xl py-2">blog&nbsp;&nbsp;<svg xmlns="http://www.w3.org/2000/svg" className=" h-12 w-12 mt-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                </svg></button>

                                <button className="hover:text-gray-300 inline-flex items-center p-0 w-full focus:bg-transparent border-none transition dark:text-blueGray-500 text-gray-400 text-7xl py-2 ">courses</button>

                                <button className="hover:text-gray-300 inline-flex items-center p-0 w-full focus:bg-transparent border-none transition dark:text-blueGray-500 text-gray-400 text-7xl py-2 ">podcasts</button>

                            </div>

                        </div>
                        <div className="text-gray-400    px-1 py-4 dark:text-gray-400 ">
                            <img src="https://kentcdodds.com/img/image/upload/w_180,q_auto,f_auto/kentcdodds.com/illustrations/skis_z5lkc3" className="mb-16 h-36 lg:mb-5 object-scale-down" alt="Hello" />

                            <div className="w-4/5">
                                <h3 className="text-3xl pt-4 ">Educational blog</h3>
                                <br />
                                <h5 className="max-w-full text-lg text-secondary mt-2 prose prose-light dark:prose-dark">My <strong className="text-gray-600 dark:text-white">186</strong> blog posts (and counting) have been read hundreds of thousands of times by 40,849 people. There you'll find blogs about <a className="text-gray-600 dark:text-white" href=""><strong>JavaScript</strong></a>, <a className="text-gray-600 dark:text-white" href=""><strong>TypeScript</strong></a>, <a className="text-gray-600 dark:text-white" href=""><strong>React</strong></a>, <a className="text-gray-600 dark:text-white" href=""><strong>Testing</strong></a>, <a className="text-gray-600 dark:text-white" href=""><strong>your career</strong></a>, and <a className="text-gray-600 dark:text-white" href=""><strong>and more</strong></a>.</h5>
                                <p className="max-w-full text-lg text-blue-500 py-1">The <a className="text-team-blue underlined" href=""> <strong>blue</strong></a> team is winning.</p>
                            </div>
                        </div>

                    </div>

                </div>
            </div>

        </>
    )
}

export default SectionB
