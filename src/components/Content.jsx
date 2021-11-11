import ButtonSmallArrow from "./Buttons/ButtonSmallArrow"
import ArrowIcon from "./Icons/ArrowIcon"
import Image from "next/image"

const SectionB = () => {
    return (
        <>
            <div className="w-12/12  ">

                <div className="bg-gray-100 dark:bg-gray-700  w-11/12 m-auto">

                    <div className="mt-10  py-10 m-auto rounded xl:flex flex-wrap md:flex-row sm:flex-row  ">

                        <div className="xl:w-3/6 p-1  m-auto px-1 lg:w-3/6 md:w-6/6 sm:w-6/6">
                            <div className="w-3/6 pl-14 mx-auto mt-10 sm:w-6/6 m-auto">
                                <h2 className="leading-tight text-left w-3/4  font-semibold text-4xl ">Having a hard time keeping up with JavaScript?</h2>
                            </div>
                        </div>
                        <div className="xl:w-3/6 p-1 mt-10  m-auto px-1 lg:w-3/6 md:w-6/6 sm:w-6/6">
                            <h2 className="leading-tight text-left w-3/4 px-2 text-gray-500  mt-10 font-medium text-3xl md:m-auto sm:m-auto">Well, you are in the right place. My website is your one stop shop for everything you need to build JavaScript apps.</h2>
                        </div>
                    </div>
                    <hr />
                    <div className="mt-6 m-auto rounded xl:flex flex-wrap lg:flex :flex-wrap md:flex-row sm:flex-row pb-10  ">

                        <div className="xl:w-3/6 p-1  m-auto px-1 lg:w-3/6 md:w-6/6 sm:w-6/6">
                            <div className="w-3/6  mx-auto mt-8 sm:w-6/6">
                                <div className="leading-tight text-left w-3/4  font-semibold  pl-6 mt-36 md:m-auto sm:m-auto">

                                    <button className="hover:text-primary inline-flex items-center p-0 w-full focus:bg-transparent border-none transition text-primary py-2 xl:text-7xl lg:text-6xl md:text-4xl sm:text-4xl">blog&nbsp;&nbsp;<svg xmlns="http://www.w3.org/2000/svg" className=" h-12 w-12 mt-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                    </svg></button>

                                    <button className="hover:text-gray-300 inline-flex items-center p-0 w-full focus:bg-transparent border-none transition dark:text-blueGray-500 text-gray-400 py-2 xl:text-7xl lg:text-6xl md:text-4xl sm:text-4xl">courses</button>

                                    <button className="hover:text-gray-300 inline-flex items-center p-0 w-full focus:bg-transparent border-none transition dark:text-blueGray-500 text-gray-400 py-2 xl:text-7xl lg:text-6xl md:text-4xl sm:text-4xl">podcasts</button>

                                </div>
                            </div>
                        </div>
                        <div className="xl:w-3/6 p-1 mt-10  m-auto px-1 lg:w-3/6 md:w-6/6 sm:w-6/6">

                            <div className="text-gray-400 px-1 py-4 dark:text-gray-400 ">
                                {/* <img src="https://kentcdodds.com/img/image/upload/w_180,q_auto,f_auto/kentcdodds.com/illustrations/skis_z5lkc3" className="pl-9 pt-6 mb-16 h-36 lg:mb-5 object-scale-down md:m-0 sm:m-auto" alt="Hello" /> */}
                                <Image src="/skis.png"
                                    alt="Picture of the author"
                                    width={140}
                                    height={200}
                                    objectFit='cover'
                                    className="focus-ring w-full rounded-lg object-cover object-center transition" />


                                <div className="w-4/5 md:m-auto sm:m-auto">
                                    <h3 className="text-3xl pt-4 ">Educational blog</h3>
                                    <br />
                                    <h5 className="max-w-full text-lg text-secondary mt-2 prose prose-light dark:prose-dark">My <strong className="text-gray-600 dark:text-white">186</strong> blog posts (and counting) have been read hundreds of thousands of times by 40,849 people. There you&apos;ll find blogs about <a className="text-gray-600 dark:text-white" href=""><strong>JavaScript</strong></a>, <a className="text-gray-600 dark:text-white" href=""><strong>TypeScript</strong></a>, <a className="text-gray-600 dark:text-white" href=""><strong>React</strong></a>, <a className="text-gray-600 dark:text-white" href=""><strong>Testing</strong></a>, <a className="text-gray-600 dark:text-white" href=""><strong>your career</strong></a>, and <a className="text-gray-600 dark:text-white" href=""><strong>and more</strong></a>.</h5>
                                    <p className="max-w-full text-lg text-blue-500 py-1">The <a className="text-team-blue underlined" href=""> <strong>blue</strong></a> team is winning.</p>
                                    <br />
                                    <ButtonSmallArrow btnTitle="Start reading the blog" Icon={<ArrowIcon />} />
                                </div>


                            </div>
                        </div>
                    </div>

                </div>

            </div>



        </>
    )
}

export default SectionB
