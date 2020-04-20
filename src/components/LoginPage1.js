import React from "react";
import { Input } from "./Input";

export const LoginPage1 = (firstName) => {
  return (
    <div>
      <Input
        type={"text"}
        id={"firstName"}
        name={"firstName"}
        label={"FirstName"}
        placeholder={"Firstname"}
        value={firstName}
        onChange={this.onChangeInput}
        errors={this.state.errors.firstName}
      />
      <Input
        type={"text"}
        id={"lastName"}
        name={"lastName"}
        label={"LastName"}
        placeholder={"Lastname"}
        value={this.state.lastName}
        onChange={this.onChangeInput}
        errors={this.state.errors.lastName}
      />
      <Input
        type={"password"}
        id={"password"}
        name={"password"}
        label={"Password"}
        placeholder={"Password"}
        value={this.state.password}
        onChange={this.onChangeInput}
        errors={this.state.errors.password}
      />
      <Input
        type={"password"}
        id={"repeatPassword"}
        name={"repeatPassword"}
        label={"Repeat password"}
        placeholder={"Repeat password"}
        value={this.state.repeatPassword}
        onChange={this.onChangeInput}
        errors={this.state.errors.repeatPassword}
      />
      <div>
        <label>Gender</label>
      </div>
      <div className="form-check">
        <input
          className="form-check-input"
          type="radio"
          id="genderMale"
          name="gender"
          value="male"
          checked={this.state.gender === "male"}
          onChange={this.onChangeInput}
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
          checked={this.state.gender === "female"}
          onChange={this.onChangeInput}
        />
        <label className="form-check-label" htmlFor="genderFemale">
          Female
        </label>
      </div>
    </div>
  );
};
