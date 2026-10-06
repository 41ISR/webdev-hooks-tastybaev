const Input = ({className, ...rest}) => {
    return (
        <div className="add-task-row">
                        <input
                            className={`input grow${""+className}`}
                            {...rest}
                        />
                    </div>
    )
}

export default Input