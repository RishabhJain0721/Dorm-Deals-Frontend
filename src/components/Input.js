import React from "react";

const Input = ({ label, type, placeholder, value, onChange }) => {
  return (
    <div className="mb-4">
      <label className="block text-white text-sm mb-2">
        {label}
      </label>
      <input
        type={type}
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default Input;
