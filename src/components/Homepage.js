import React from 'react'
import Navbar from './Navbar'

const Homepage = () => {
    return (
        <>
            <Navbar />
            <div className=" xl:flex flex-wrap   md:flex-row  px-1 py-8  sm:flex-row ">

                <div className="xl:w-3/6 m-auto my-1 min-h-5/5  lg:w-3/6 flex flex-warp">

                    <div className='w-5/6 m-auto p-2 mt-24'>
                        <h2 className="text-4xl antialiased font-medium tracking-normal w-5/6">Helping people make the world a better place through quality software.</h2>
                        <div className="pt-8 p-2">
                            <button className="bg-gray-800  rounded-full text-white font-bold text-base py-6  px-9 my-2 hover:bg-indigo-500 hover:ring-4   ring-yellow-600 transition duration-1000  dark:bg-gray-50 dark:text-black">
                                Read the blog
                            </button><br />
                            <button className="bg-white rounded-full text-black font-bold text-base py-6  px-9  my-2 border-gray-300 border-2 dark:bg-gray-900 dark:text-white">
                                Take a course
                            </button>
                            <div className=" mt-8 py-1 ">
                                <button
                                    href="#"
                                >
                                    <h3 className="flex focus-within:justify-between">
                                        <div className="inline-block text-xl px-4 py-2 mx-1 leading-none border-2 rounded-full h-12 w-12 text-black border-black hover:border-red-200 hover:text-teal-500 hover:bg-white mt-4 lg:mt-0 dark:bg-black dark:text-white dark:border-white "><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 " fill="none" viewBox="6 3 18 19" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                                        </svg></div> &nbsp;  &nbsp; &nbsp;
                                        <span className="text-2xl pt-2 ">Learn More About Kent</span></h3>
                                </button>

                            </div>
                        </div>
                    </div>
                </div>
                <div className=" xl:w-3/6 m-auto my-1 min-h-0  lg:w-3/6  flex items-center p-2 ">
                    <div className="w-5/6 m-auto ml-5 mb-3 p-2 md:m-auto">
                        <img className="object-cover " src="https://kentcdodds.com/img/image/upload/w_1300,q_auto,f_auto/kentcdodds.com/illustrations/kody-flying_yellow" />

                    </div>
                </div>

            </div>
        </>
    )
}

export default Homepage
