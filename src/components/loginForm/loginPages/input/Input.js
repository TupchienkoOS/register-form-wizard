import React from "react";

export const Input = ({
  id,
  label,
  type,
  name,
  placeholder,
  value,
  onChange,
  errors,
}) => {
  return (
    <div className="form-group form-group-sm m-1">
      <label htmlFor={id} className="m-1">
        {label}
      </label>
      <input
        type={type}
        className={
          errors
            ? "form-control form-control-sm is-invalid"
            : "form-control form-control-sm"
        }
        id={id}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
      {errors ? (
        <small id={id} className="form-text text-danger">
          {errors}
        </small>
      ) : null}
    </div>
  );
};
