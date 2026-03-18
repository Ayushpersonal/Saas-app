export default function Button({
    children,
    variant = "primary",
    size = "md",
    className = "",
    iconBefore,
    iconAfter,
    ...props
}) {
    const baseStyles = "inline-flex items-center justify-center font-medium transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed rounded-lg";

    const variants = {
        primary: "bg-indigo-600 text-white hover:bg-indigo-700 focus:ring-indigo-500 shadow-sm",
        secondary: "bg-white text-gray-700 border border-gray-200 hover:bg-gray-50 focus:ring-gray-200 shadow-sm",
        outline: "bg-transparent text-indigo-600 border border-indigo-600 hover:bg-indigo-50 focus:ring-indigo-500",
        ghost: "bg-transparent text-gray-600 hover:bg-gray-100 focus:ring-gray-200",
        danger: "bg-red-600 text-white hover:bg-red-700 focus:ring-red-500 shadow-sm",
    };

    const sizes = {
        sm: "px-3 py-1.5 text-xs",
        md: "px-4 py-2 text-sm",
        lg: "px-6 py-3 text-base",
    };

    return (
        <button
            className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
            {...props}
        >
            {iconBefore && <span className="mr-2">{iconBefore}</span>}
            {children}
            {iconAfter && <span className="ml-2">{iconAfter}</span>}
        </button>
    );
}
