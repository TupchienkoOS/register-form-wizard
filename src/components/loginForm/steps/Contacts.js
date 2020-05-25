import React from "react";
import Countries from "../../../data/Countries";
import Cities from "../../../data/Cities";
import { InputField } from "./fields/InputField.js";
import { SelectField } from "./fields/SelectField.js";

export default function Contacts({
  email,
  mobile,
  country,
  city,
  onChangeInput,
  errors,
}) {
  const getCitiesOptions = (сities) => {
    const filteredCities = Object.entries(сities).filter(
      (el) => Number(el[1].country) === Number(country)
    );
    return getSelectOptions(
      filteredCities.map(([id, city]) => ({
        id,
        name: city.name,
      }))
    );
  };

  const getSelectOptions = (items) => {
    return items.map((item) => {
      return (
        <option key={item.id} id={item.id} value={item.id}>
          {item.name}
        </option>
      );
    });
  };

  return (
    <div>
      <InputField
        type="text"
        id="email"
        name="email"
        label="Email"
        placeholder="Email"
        value={email}
        onChange={onChangeInput}
        error={errors.email}
      />
      <InputField
        type="tel"
        id="mobile"
        name="mobile"
        label="Mobile"
        placeholder="Mobile"
        value={mobile}
        onChange={onChangeInput}
        error={errors.mobile}
      />
      <SelectField
        id="country"
        name="country"
        options={getSelectOptions(Countries)}
        label="Country"
        defaultOption="Select country"
        value={country}
        onChange={onChangeInput}
        error={errors.country}
      />
      <SelectField
        id="city"
        name="city"
        options={getCitiesOptions(Cities)}
        label="City"
        defaultOption="Select city"
        value={city}
        onChange={onChangeInput}
        error={errors.city}
      />
    </div>
  );
}
