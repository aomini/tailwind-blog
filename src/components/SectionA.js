const SectionA = () => {
    return (
        <>

            <div className=" w-5/12 mt-10">
                <div className="px-16 p-1">
                    <div className="aspect-w-14 aspect-h-8 rounded-lg ">
                        <iframe src="https://www.youtube.com/embed/a7VxBwLGcDE" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" ></iframe>
                        <a className="" href="https://www.youtube.com/embed/a7VxBwLGcDE"></a>
                    </div>
                    <h3 className="text-2xl py-1">Introduction video (2:13)</h3>
                    <a href="#"> <p className="text-normal">or, watch the full video here (8:05)</p></a>
                </div>
            </div>
            <div className="col-span-2  w-5/6 ml-6 ">
                <div className=" m-auto py-5 pr-6 w-8/12  ">
                    <h2 className="text-4xl font-medium subpixel-antialiased leading-snug">Hi, I am Kent C. Dodds. I help people make the world better through quality software.</h2><br />
                    <h2 className="text-3xl font-medium text-gray-500 tracking-tight leading-snug">I am also a big extreme sports enthusiast. When I am not hanging out with my family or at the computer you can find me cruising around on my onewheel or hitting the slopes on my snowboard when it ia cold.</h2>
                    <br /><br /><br />
                    <button
                        href="#"
                    >
                        <h3 className="flex focus-within:justify-between">
                            <span className="text-2xl pt-2 ">Learn More About Kent</span> &nbsp;  &nbsp; &nbsp;
                            <div className="inline-block text-xl px-4 py-2 mx-1 leading-none border-2 rounded-full h-12 w-12 text-black border-black hover:border-red-200 hover:text-teal-500 hover:bg-white mt-4 lg:mt-0 dark:bg-black dark:text-white dark:border-white ">

                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="6 7 15 19" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>

                            </div>
                        </h3>
                    </button>


                </div>

            </div>
        </>
    )
}

export default SectionA
