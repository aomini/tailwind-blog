const ButtonSmallArrow = (props) => {
    return (
        <button

        >
            <h3 className="flex focus-within:justify-between">
                <span className="subpixel-antialiased font-medium tracking-tight  text-xl pt-2 text-black dark:text-white">{props.btnTitle}</span> &nbsp;  &nbsp; &nbsp;
                <div className="group text-2xl mx-1 leading-none border-2 rounded-full h-12 w-12 text-black border-black hover:border-red-200 hover:text-teal-500 hover:bg-white mt-4 lg:mt-0 dark:bg-transparent dark:text-white dark:border-white flex items-center justify-center ">


                    {props.Icon}
                </div>
            </h3>
        </button >
    )
}

export default ButtonSmallArrow
