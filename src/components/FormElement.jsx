const FormElement = (props) => {
    return (
        <div className="mb-4">
            <label className="block text-gray-600 text-xl font-normal mb-2">
                {props.formInputTitle}
            </label>
            <input className="bg-gray-100  rounded w-full py-10 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline hover:ring ring-black  ring-offset-4 focus:ring-opacity-100  transition duration-300" type="text" />
        </div>
    )
}

export default FormElement
