const CallButton = ({ number, children, className, ariaLabel }) => {
    return (
        <a href={`tel:${number}`} className={className} aria-label={ariaLabel}>
            {children}
        </a>
    )
}

export default CallButton
