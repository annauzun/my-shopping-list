const Button = (props) => {
    const {title} = props

    return (
        <button className="border border-solid rounded-lg text-lg px-4 py-2 shadow-md" >{title}</button>

    )
}
export default Button