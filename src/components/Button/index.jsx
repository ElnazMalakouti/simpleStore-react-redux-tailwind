const Button = ({children , ...props}) => {
    console.log(props)
    return(
        <button className="w-[150px] h-[50px] bg-[#ffff] text-[#051E42] flex justify-center items-center font-[Lato] font-extrabold text-[18px]" {...props}>
            {children}
        </button>
    )
}

export default Button