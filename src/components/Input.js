import React from "react";

/**
 * Input component
 *
 * @param {Object} props - Props
 * @param {string} props.label - Label text
 * @param {string} props.type - Input type
 * @param {string} props.name - Input name
 * @param {string} props.placeholder - Input placeholder
 * @param {string} props.value - Input value
 * @param {function} props.onChange - Input onChange function
 * @returns {JSX.Element}
 * @constructor
 */
const Input = ({ label, type, name, placeholder, value, onChange }) => {
  return (
    <div className="mb-4">
      <label className="block text-white text-sm mb-2">{label}</label>
      <input
        type={type}
        name={name}
        className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required
      />
    </div>
  );
};

export default Input;
