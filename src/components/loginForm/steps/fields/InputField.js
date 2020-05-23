import React from "react";
import cx from "classnames";

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
        className={cx({
          "form-control form-control-sm is-invalid": error,
          "form-control form-control-sm": !error,
        })}
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
