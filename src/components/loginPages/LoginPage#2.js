import React from "react";
import Countries from "../../data/Countries";
import Cities from "../../data/Cities";
import { Input } from "../Input";

export default ({ email, mobile, country, onChangeInput, errors }) => {
  const CitiesFiteredId = Object.keys(Cities).filter(
    (city) => Cities[city].country + "" === country
  );
  return (
    <div>
      <Input
        type={"text"}
        id={"email"}
        name={"email"}
        label={"Email"}
        placeholder={"Email"}
        value={email}
        onChange={onChangeInput}
        errors={errors.email}
      />
      <Input
        type={"tel"}
        id={"mobile"}
        name={"mobile"}
        label={"Mobile"}
        placeholder={"Mobile"}
        value={mobile}
        onChange={onChangeInput}
        errors={errors.mobile}
      />
      <div className="form-group form-group-sm m-1">
        <label htmlFor="country" className="m-1">
          Country
        </label>
        <select
          className="form-control form-control-sm"
          id="country"
          name="country"
          onChange={onChangeInput}
        >
          {" "}
          <option id="0" value="0" defaultValue>
            Select country
          </option>
          {Countries.map((country) => {
            return (
              <option key={country.id} id={country.id} value={country.id}>
                {country.name}
              </option>
            );
          })}
        </select>
        {errors.country ? (
          <small id="country" className="form-text text-danger">
            {errors.country}
          </small>
        ) : null}
      </div>
      <div className="form-group form-group-sm m-1">
        <label htmlFor="city" className="m-1">
          City
        </label>
        <select
          className="form-control form-control-sm"
          id="city"
          name="city"
          placeholder="Select city"
          onChange={onChangeInput}
        >
          <option id="0" value="0" defaultValue>
            Select city
          </option>
          {CitiesFiteredId.map((city) => {
            return (
              <option key={city} id={city} value={city}>
                {Cities[city].name}
              </option>
            );
          })}
        </select>
        {errors.city ? (
          <small id="city" className="form-text text-danger">
            {errors.city}
          </small>
        ) : null}
      </div>
    </div>
  );
};
