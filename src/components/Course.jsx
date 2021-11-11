import ButtonLarge from "./Buttons/ButtonLarge"
import ButtonSmallArrow from "./Buttons/ButtonSmallArrow"
import Card from "./Card"
import HeadingButton from "./HeadingButton"
import ArrowIcon from "./Icons/ArrowIcon"
import Image from 'next/image'

const SectionD = () => {
    return (
        <div className="xl:w-full-max my-10  xl:flex flex-wrap  lg:flex :flex-wrap     md:flex-row  px-3  sm:flex-row  py-20">
            <div className="w-11/12  m-auto p-3 ">
                <HeadingButton headingButtonTextOne="Are you ready to level up?" headingButtonTextTwo="Checkout some of my courses" HeadingArrowButton={<ButtonSmallArrow btnTitle="See all courses" Icon={<ArrowIcon />} />} />

                <div className="m-auto px-10 py-6 my-10 xl:flex justify-between  md:flex-row sm:flex-row">
                    <Card cardHeading="Epic React" cardText="The most comprehensive guide for pros." ButtonLarge={<ButtonLarge btnLargeTitle="View Course" Icon={<ArrowIcon />} className="text-white" />} />

                    <Card cardHeading="Testing JavaScript" cardText="Learn smart, efficient testing methods." ButtonLarge={<ButtonLarge btnLargeTitle="View Course" Icon={<ArrowIcon />} className="text-white" />} />

                </div>
            </div>


        </div>
    )
}

export default SectionD
