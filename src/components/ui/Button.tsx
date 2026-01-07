type ButtonProps = {
    label: string;
    onClick: () => void;
    className?: string;
    disabled?: boolean;
};

function Button({ label, onClick, className = "", disabled = false }: ButtonProps) {
    return (
        <button
            onClick={onClick}
            disabled={disabled}
            className={`button-shared ${className}`}
        >
            {label}
        </button>
    );
}

export default Button;
