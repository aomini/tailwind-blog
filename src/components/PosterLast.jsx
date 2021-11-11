import ButtonSmallArrow from "./Buttons/ButtonSmallArrow"
import ArrowIcon from "./Icons/ArrowIcon"
import Image from 'next/image'

const PosterLast = () => {
    return (
        <>
            <div className="mt-6 pt-10 pb-10 w-11/12 m-auto flex flex-row md:flex-column sm:flex-column" >
                <div className="mt-8 pt-10 w-6/12 m-auto px-6">
                    <div className="p-8 m-2">
                        <div className="rounded-lg">
                            <Image src="/snow-sports.jpg"
                                alt="Picture of the author"
                                width={660}
                                height={900} objectFit='cover' className="rounded-lg" />
                        </div>
                    </div>
                </div>

                <div className="w-5/12 m-auto mt-6 pt-10">
                    <div className="p-4 mt-1">
                        <div className="mt-4 px-6 py-2 text-5xl">
                            <Image src="/snowboard_nqqlyr.png"
                                alt="Picture of the author"
                                width={350}
                                height={275} />
                        </div>
                        <div className="mt-5 px-6 py-2 text-5xl">
                            <h3>Big extreme sports enthusiast.</h3>
                        </div>
                        <div className="mt-6 px-6 py-1 text-5xl text-gray-400">
                            <h3>With a big heart for helping people.</h3>
                        </div>
                        <div className="mt-5 px-6 py-2 text-xl text-gray-500"><p>I&apos;m a JavaScript engineer and teacher and I&apos;m active in the open source community. And I&apos;m also a husband, father, and an extreme sports and sustainability enthusiast.</p></div>
                        <div className="mt-6 px-6 py-2 text-3xl">
                            <ButtonSmallArrow btnTitle="Learn more about me" Icon={<ArrowIcon />} />
                        </div>
                    </div>
                </div>
            </div >

        </>
    )
}

export default PosterLast
