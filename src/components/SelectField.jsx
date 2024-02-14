import React from "react";

const SelectField = ({ label, name, options, register, error, className, defaultValue }) => {
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
        <select
          name={name}
          id={name}
          defaultValue={defaultValue}
          className={`block w-full h-10 rounded-md border-0 px-4 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ${
            isError
              ? "ring-red-600 placeholder:text-red-400 focus:ring-red-500"
              : "ring-gray-300 placeholder:text-gray-400 focus:ring-primary-500"
          } focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6`}
          {...(register && register( !name ? parseInt(name) : name ))}
        >
          {options?.map((option) => (
            <option key={option.id} value={option.id}>
              {option.name}
            </option>
          ))}
        </select>
        {isError && (
          <p className="absolute text-sm text-red-600" id={`${name}-error`}>
            {error.message}
          </p>
        )}
      </div>
    </fieldset>
  );
};

export default SelectField;
