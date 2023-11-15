const Input = (props) => {

    const { type, placeholder, className, name } = props

    return (
        <input type={type} placeholder={placeholder} className={`input input-bordered ${className} w-full max-w-xs placeholder:text-sm`} name={name} />
    )
}

export default Input