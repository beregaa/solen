const CallButton = ({ number, children, className }) => {
    return (
        <a href={`tel:${number}`} className={className}>
            {children}
        </a>
    )
}

export default CallButton