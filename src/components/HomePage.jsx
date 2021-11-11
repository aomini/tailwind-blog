import React from 'react'
import ButtonLarge from './Buttons/ButtonLarge'
import Navbar from './Navbar'
import Image from 'next/image'

const HomePage = () => {
    return (
        <>
            <Navbar />
            <div className="xl:w-6/6 flex flex-row m-auto px-10 md:flex-wrap sm:flex-warp">

                <div className="xl:w-2/6 m-auto my-1 min-h-5/5 ">
                    <div className='w-5/6 m-auto p-2 mt-24'>
                        <h2 className="text-4xl antialiased font-medium tracking-normal w-5/6">Helping people make the world a better place through quality software.</h2>
                        <div className="pt-8 p-2">
                            {/* <button className="bg-gray-800  rounded-full text-white font-bold text-base py-6  px-9 my-2 hover:ring ring-black ring-opacity-100 ring-offset-4 focus:ring-opacity-50   transition duration-700  dark:bg-gray-50 dark:text-black">
                                Read the blog
                            </button><br /> */}
                            <ButtonLarge btnLargeTitle="Read the Blog" className="text-white" />
                            {/* <button className="bg-white rounded-full text-black font-bold text-base py-6  px-9  my-2 border-gray-300 border-2 hover:ring ring-black ring-opacity-100 ring-offset-4 focus:ring-opacity-50 transition duration-700 dark:bg-gray-900 dark:text-white ">
                                Take a course
                            </button> */}
                            <br />
                            <ButtonLarge btnLargeTitle="Take a Course" className="bg-white border-2 text-black" />

                            <div className=" mt-8 py-1 ">
                                <button
                                    href="#"
                                >
                                    <h3 className="flex focus-within:justify-between">
                                        &nbsp;  &nbsp; &nbsp;
                                        <div className="text-xl mx-1 leading-none border-2 rounded-full h-12 w-12 text-black border-black hover:border-red-200 hover:text-teal-500 hover:bg-white mt-4 lg:mt-0 dark:bg-transparent dark:text-white dark:border-white flex items-center justify-center ">

                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                                            </svg>

                                        </div>
                                        <span className="subpixel-antialiased font-medium tracking-tight  text-xl pt-2 text-black dark:text-white">Learn more about Kent</span>
                                    </h3>
                                </button>


                            </div>
                        </div>
                    </div>
                </div>


                <div className=" xl:w-3/6 m-auto my-1 min-h-0  lg:w-3/6  flex items-center p-2 ">
                    <div className="w-5/6 m-auto ml-5 mb-3 p-2 md:m-auto">
                        {/* <img className="object-full " src="https://kentcdodds.com/img/image/upload/w_1300,q_auto,f_auto/kentcdodds.com/illustrations/kody-flying_yellow" /> */}
                        <Image src="/kody-flying_yellow.png" alt="Picture of the author"
                            width={600}
                            height={650}
                        />

                    </div>
                </div>

            </div>
        </>
    )
}

export default HomePage