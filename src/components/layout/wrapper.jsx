const Wrapper = ({children, className, ...props}) => {
    return(
        <div className={`max-w-3xl mx-auto px-4 xl:px-0 ${className}`} {...props}>
            {children}
        </div>
    )
}

export {
    Wrapper
}