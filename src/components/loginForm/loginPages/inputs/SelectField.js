import React from "react";

export const SelectField = ({
  id,
  name,
  label,
  defaultOption,
  value,
  options,
  error,
  onChange,
}) => {
  return (
    <div className="form-group form-group-sm m-1">
      <label htmlFor={id} className="m-1">
        {label}
      </label>
      <select
        className={
          error
            ? "form-control form-control-sm is-invalid"
            : "form-control form-control-sm"
        }
        id={id}
        name={name}
        onChange={onChange}
        value={value}
      >
        <option id="0" value="">
          {defaultOption}
        </option>
        {options.map((item) => {
          return (
            <option key={item.id} id={item.id} value={item.id}>
              {item.name}
            </option>
          );
        })}
      </select>
      {error && (
        <small id="country" className="form-text text-danger">
          {error}
        </small>
      )}
    </div>
  );
};
