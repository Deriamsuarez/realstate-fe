import React from "react";

const TextareaField = ({ label, name, placeholder, register, error, type, className }) => {
  const isError = error && error.type === name;

  return (
    <fieldset className={className}>
      <label
        htmlFor={name}
        className={`block text-sm font-medium leading-6 ${
          isError ? "text-red-500" : "text-gray-900"
        }`}
      >
        {label}
      </label>
      <div className="relative">
        <textarea
          type={type}
          name={name}
          id={name}
          className={`block w-full h-10 rounded-md border-0 px-4 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ${
            isError
              ? "ring-red-600 placeholder:text-red-400 focus:ring-red-500"
              : "ring-gray-300 placeholder:text-gray-400 focus:ring-primary-500"
          } focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6`}
          placeholder={placeholder}
          {...(register && register(name))}
        />
        {isError && (
          <p className="absolute text-sm text-red-600" id={`${name}-error`}>
            {error.message}
          </p>
        )}
      </div>
    </fieldset>
  );
};

export default TextareaField;
