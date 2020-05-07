import React from "react";
import LoginPage1 from "./loginPages/LoginPage1";
import LoginPage2 from "./loginPages/LoginPage2";
import LoginPage3 from "./loginPages/LoginPage3";
import LoginPage4 from "./loginPages/LoginPage4";

export default ({ page, fields, errors, onChangeInput }) => {
  return (
    <div>
      {page === 1 ? (
        <LoginPage1
          firstName={fields.firstName}
          lastName={fields.lastName}
          password={fields.password}
          repeatPassword={fields.repeatPassword}
          gender={fields.gender}
          errors={errors}
          onChangeInput={onChangeInput}
        />
      ) : null}
      {page === 2 ? (
        <LoginPage2
          email={fields.email}
          mobile={fields.mobile}
          country={fields.country}
          city={fields.city}
          errors={errors}
          onChangeInput={onChangeInput}
        />
      ) : null}
      {page === 3 ? (
        <LoginPage3
          avatar={fields.avatar}
          errors={errors.avatar}
          onChangeInput={onChangeInput}
        />
      ) : null}
      {page === 4 ? (
        <LoginPage4
          firstName={fields.firstName}
          lastName={fields.lastName}
          email={fields.email}
          mobile={fields.mobile}
          countryId={fields.country}
          city={fields.city}
          avatar={fields.avatar}
        />
      ) : null}
    </div>
  );
};
