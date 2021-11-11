import ButtonSmallArrow from "./Buttons/ButtonSmallArrow"
import ArrowIcon from "./Icons/ArrowIcon"

const HeadingButton = (Props) => {
    return (
        <div className="py-4 my-2">
            <div className=" m-auto px-10">
                <h1 className="leading-tight pl-4 xl:text-4xl md:text-3xl sm:text-2xl">{Props.headingButtonTextOne}</h1>
            </div>
            <div className="m-auto px-10 py-1 xl:flex justify-between  md:flex-row sm:flex-row">
                <h1 className="leading-tight text-gray-500 pl-4 xl:text-4xl md:text-3xl sm:text-2xl">{Props.headingButtonTextTwo}</h1>
                <div className=" xl:pl-0 md:pl-0 sm:pl-4">
                    {Props.HeadingArrowButton}


                </div>
            </div>
        </div>
    )
}

export default HeadingButton
