import ArrowIcon from "../Icons/ArrowIcon"

const ButtonLarge = (props) => {
    const className = props.className || ""

    return (
        <button href="#" className={`my-2 w-48 h-20 bg-black  rounded-full hover:ring ring-black ring-opacity-100 ring-offset-4 focus:ring-opacity-50  transition duration-500  dark:border-white dark:ring-white  dark:bg-white dark:text-black dark:ring-offset-gray-600  ${className}`}>
            <div className="flex justify-center">
                <span>{props.btnLargeTitle}</span>&nbsp;&nbsp;
                <span className="transform -rotate-45 font-light">
                    {props.Icon}
                </span>
            </div>

        </button>


    )
}

export default ButtonLarge
