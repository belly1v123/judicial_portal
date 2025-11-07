const TextArea = ({
    label,
    name,
    value,
    onChange,
    placeholder,
    required = false,
    rows = 4,
    error,
    className = ''
}) => {
    return (
        <div className={`mb-4 ${className}`}>
            {label && (
                <label className="block text-gray-700 font-semibold mb-2">
                    {label}
                    {required && <span className="text-red-500 ml-1">*</span>}
                </label>
            )}
            <textarea
                name={name}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                required={required}
                rows={rows}
                className={`input-field resize-none ${error ? 'border-red-500' : ''}`}
            />
            {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
        </div>
    );
};

export default TextArea;
