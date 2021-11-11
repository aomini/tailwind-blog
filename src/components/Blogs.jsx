import BlogCard from "./BlogCard"
import ButtonSmallArrow from "./Buttons/ButtonSmallArrow"
import HeadingButton from "./HeadingButton"
import ArrowIcon from "./Icons/ArrowIcon"

const SectionC = () => {
    return (
        <>
            <div className="xl:w-full-max my-10  xl:flex flex-wrap  lg:flex :flex-wrap     md:flex-row  px-3  sm:flex-row  py-20">
                <div className="w-11/12  m-auto p-3">
                    <HeadingButton headingButtonTextOne="Blog recommendations" headingButtonTextTwo="Prepared especially for you." HeadingArrowButton={<ButtonSmallArrow btnTitle="See the full blog" Icon={<ArrowIcon />} />} />

                    <div className="m-auto px-10 py-3 xl:flex justify-between  md:flex-row sm:flex-row">
                        <BlogCard blogCardTitle="September 29th, 2021 — 34 min read" blogCardText="How I built a modern website in 2021" />
                        <BlogCard blogCardTitle="July 13th, 2019 — 6 min read" blogCardText="How I built a modern website in 2021" />
                        <BlogCard blogCardTitle="July 13th, 2019 — 6 min read" blogCardText="How I built a modern website in 2021" />
                    </div>

                </div>
            </div>
        </>

    )
}

export default SectionC
