const Footer = (props) => {
    const { count } = props
    
    return (
        <div className="bg-sky-400 text-3xl text-white px-10 py-5">
            <p className="flex flex-wrap items-center justify-center">Итого:<span className="mx-4 text-4xl font-semibold">{count}</span>наименований</p>
        </div>

    )
}

export default Footer