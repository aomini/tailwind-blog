const DummyButton = (props) => {
    const className = props.className || ""
    return (

        <button className={`absolute  cursor-text px-10 h-20 rounded-full ${className}`}>
            <p className="text-xl">{props.dummyBtnText}&nbsp;{props.DummyIcon}</p>
        </button>
    )
}

export default DummyButton
