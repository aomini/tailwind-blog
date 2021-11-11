import ButtonSmallArrow from "./Buttons/ButtonSmallArrow"
import ArrowIcon from "./Icons/ArrowIcon"


const SectionA = () => {
    return (
        <>
            <div className="xl:w-full-max mt-10 xl:flex flex-wrap  lg:flex :flex-wrap     md:flex-row  px-3  sm:flex-row  py-20">
                <div className="xl:w-1/6 m-auto pt-5 min-h-5/5  lg:w-3/6 :m-auto flex flex-row md:m-auto sm:m-auto">
                    <div className="xl:px-2 p-1 md:px-0 m-auto sm:px-0 :m-auto ">
                        <div className="aspect-w-14 aspect-h-8 rounded-lg ">
                            <iframe src="https://www.youtube.com/embed/a7VxBwLGcDE" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" ></iframe>
                            <a className="" href="https://www.youtube.com/embed/a7VxBwLGcDE"></a>
                        </div>
                        <h3 className="text-2xl py-1">Introduction video (2:13)</h3>
                        <a href="#"> <p className="text-normal">or, watch the full video here (8:05)</p></a>
                    </div>



                </div>
                <div className="xl:w-3/6 pr-12 m-auto pt-5 min-h-5/5  lg:w-3/6 :m-auto md:flex-row  px-3 ">
                    <div className="xl:pt-16 md:px-0 m-auto sm:px-0 :m-auto ">
                        <h2 className="text-4xl font-medium subpixel-antialiased leading-snug">Hi, I am Kent C. Dodds. I help people make the world better through quality software.</h2><br />
                        <h2 className="text-3xl font-medium text-gray-500 tracking-tight leading-snug">I am also a big extreme sports enthusiast. When I am not hanging out with my family or at the computer you can find me cruising around on my onewheel or hitting the slopes on my snowboard when it ia cold.</h2>
                        <br /><br /><br />



                    </div>
                    <ButtonSmallArrow btnTitle="Learn more about me" Icon={<ArrowIcon />} />


                </div>

            </div>


        </>
    )
}

export default SectionA
