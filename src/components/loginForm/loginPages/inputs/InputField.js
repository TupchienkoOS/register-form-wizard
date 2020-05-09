import React from "react";
export const InputField = ({
  id,
  label,
  type,
  name,
  placeholder,
  value,
  onChange,
  error,
}) => {
  return (
    <div className="form-group form-group-sm m-1">
      <label htmlFor={id} className="m-1">
        {label}
      </label>
      <input
        type={type}
        className={
          error
            ? "form-control form-control-sm is-invalid"
            : "form-control form-control-sm"
        }
        id={id}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
      {error ? (
        <small id={id} className="form-text text-danger">
          {error}
        </small>
      ) : null}
    </div>
  );
};
