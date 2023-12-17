/* eslint-disable react/prop-types */
import React from "react";
function Input({ type, label, value, onChange, options }) {
  const inputStyle = `w-full px-2 py-1 text-lg border-2 border-red-300 focus:ring-blue-400 focus:outline-blue-400 rounded-lg`;
  const commonProps = {
    type,
    label,
    value,
    onChange,
    options,
    className: inputStyle,
  };
  return (
    <div className="">
      <label
        htmlFor=""
        className="block text-gray-600 font-bold capitalize leading-4 mb-2"
      >
        Title
      </label>
      {type === "text" && <input {...commonProps} />}
      {type === "date" && <input {...commonProps} />}
      {type === "text-area" && <textarea {...commonProps} />}
      {type === "select" && (
        <select {...commonProps}>
          {options.map((option, index) => (
            <option key={index} value={option.label}>
              {option.label}
            </option>
          ))}
        </select>
      )}
    </div>
  );
}
export default Input;
