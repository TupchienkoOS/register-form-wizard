import React from "react";
import Countries from "../../../data/Countries";
import Cities from "../../../data/Cities";
import { InputField } from "./fields/InputField.js";
import { SelectField } from "./fields/SelectField.js";

export default function Step2({
  email,
  mobile,
  country,
  city,
  onChangeInput,
  errors,
}) {
  const getCitiesOptions = () => {
    const filteredCities = Object.entries(Cities).filter(
      (el) => el[1].country === Number(country)
    );
    return filteredCities.map(([id, city]) => ({
      id,
      name: city.name,
    }));
  };

  return (
    <div>
      <InputField
        type={"text"}
        id={"email"}
        name={"email"}
        label={"Email"}
        placeholder={"Email"}
        value={email}
        onChange={onChangeInput}
        error={errors.email}
      />
      <InputField
        type={"tel"}
        id={"mobile"}
        name={"mobile"}
        label={"Mobile"}
        placeholder={"Mobile"}
        value={mobile}
        onChange={onChangeInput}
        error={errors.mobile}
      />
      <SelectField
        id={"country"}
        name={"country"}
        options={Countries}
        label={"Country"}
        defaultOption={"Select country"}
        value={country}
        onChange={onChangeInput}
        error={errors.country}
      />
      <SelectField
        id={"city"}
        name={"city"}
        options={getCitiesOptions()}
        label={"City"}
        defaultOption={"Select city"}
        value={city}
        onChange={onChangeInput}
        error={errors.city}
      />
    </div>
  );
}
