import Image from 'next/image'

const Card = (Props) => {
    return (
        <div className="h-auto relative bg-gray-200 p-2  mx-2 rounded-lg lg:w-w-6/12 md:w-6/12 sm:w-full my-1 dark:bg-gray-500">
            <div className="w-2/3 pt-10 mt-20 ml-6 pl-6 md:w-2/3 sm:w-3/3">
                <div className="py-2 leading-tight text-3xl md:text-4xl text-black dark:text-white my-1">{Props.cardHeading}</div>
                <div className=" w-4/6 py-2 leading-tight text-3xl md:text-4xl text-gray-400 my-1">{Props.cardText}</div>
                {/* <ButtonLarge BtnLargeTitle="View Course" Icon={<ArrowIcon />} /> */}
                {Props.ButtonLarge}
            </div>
            {/* <img src={Props.ImageLink} className="absolute -top-12 left-8" alt="Rocket Image" /> */}
            <div className="absolute -top-12 left-6">
                <Image src="/rocket.png" className={""} alt="Rocket Image" width={150} height={150} />
            </div>

        </div>
    )
}

export default Card
