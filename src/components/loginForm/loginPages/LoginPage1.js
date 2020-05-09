import React from "react";
import { InputField } from "./inputs/InputField.js";

export default function LoginPage1({
  firstName,
  lastName,
  password,
  repeatPassword,
  gender,
  onChangeInput,
  errors,
}) {
  return (
    <div>
      <InputField
        type={"text"}
        id={"firstName"}
        name={"firstName"}
        label={"FirstName"}
        placeholder={"Firstname"}
        value={firstName}
        onChange={onChangeInput}
        error={errors.firstName}
      />
      <InputField
        type={"text"}
        id={"lastName"}
        name={"lastName"}
        label={"LastName"}
        placeholder={"Lastname"}
        value={lastName}
        onChange={onChangeInput}
        error={errors.lastName}
      />
      <InputField
        type={"password"}
        id={"password"}
        name={"password"}
        label={"Password"}
        placeholder={"Password"}
        value={password}
        onChange={onChangeInput}
        error={errors.password}
      />
      <InputField
        type={"password"}
        id={"repeatPassword"}
        name={"repeatPassword"}
        label={"Repeat password"}
        placeholder={"Repeat password"}
        value={repeatPassword}
        onChange={onChangeInput}
        error={errors.repeatPassword}
      />
      <div>
        <label className="mb-0 mt-1">Gender</label>
      </div>
      <div className="form-check">
        <input
          className="form-check-input"
          type="radio"
          id="genderMale"
          name="gender"
          value="male"
          checked={gender === "male"}
          onChange={onChangeInput}
        />
        <label className="form-check-label" htmlFor="genderMale">
          Male
        </label>
      </div>
      <div className="form-check form-check-sm">
        <input
          className="form-check-input "
          type="radio"
          id="genderFemale"
          name="gender"
          value="female"
          checked={gender === "female"}
          onChange={onChangeInput}
        />
        <label className="form-check-label" htmlFor="genderFemale">
          Female
        </label>
      </div>
    </div>
  );
}
