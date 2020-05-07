import React from "react";
import { Input } from "./input/Input.js";

export default ({
  firstName,
  lastName,
  password,
  repeatPassword,
  gender,
  onChangeInput,
  errors,
}) => {
  return (
    <div>
      <Input
        type={"text"}
        id={"firstName"}
        name={"firstName"}
        label={"FirstName"}
        placeholder={"Firstname"}
        value={firstName}
        onChange={onChangeInput}
        errors={errors.firstName}
      />
      <Input
        type={"text"}
        id={"lastName"}
        name={"lastName"}
        label={"LastName"}
        placeholder={"Lastname"}
        value={lastName}
        onChange={onChangeInput}
        errors={errors.lastName}
      />
      <Input
        type={"password"}
        id={"password"}
        name={"password"}
        label={"Password"}
        placeholder={"Password"}
        value={password}
        onChange={onChangeInput}
        errors={errors.password}
      />
      <Input
        type={"password"}
        id={"repeatPassword"}
        name={"repeatPassword"}
        label={"Repeat password"}
        placeholder={"Repeat password"}
        value={repeatPassword}
        onChange={onChangeInput}
        errors={errors.repeatPassword}
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
};
