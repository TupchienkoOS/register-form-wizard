import React from "react";
import Basic from "./steps/Basic";
import Contacts from "./steps/Contacts";
import Avatar from "./steps/Avatar";
import Finished from "./steps/Finished";

export default function LoginSteps({ step, values, errors, onChangeInput }) {
  return (
    <div>
      {step === 1 && (
        <Basic
          firstName={values.firstName}
          lastName={values.lastName}
          password={values.password}
          repeatPassword={values.repeatPassword}
          gender={values.gender}
          errors={errors}
          onChangeInput={onChangeInput}
        />
      )}
      {step === 2 && (
        <Contacts
          email={values.email}
          mobile={values.mobile}
          country={values.country}
          city={values.city}
          errors={errors}
          onChangeInput={onChangeInput}
        />
      )}
      {step === 3 && (
        <Avatar
          avatar={values.avatar}
          errors={errors.avatar}
          onChangeInput={onChangeInput}
        />
      )}
      {step === 4 && (
        <Finished
          firstName={values.firstName}
          lastName={values.lastName}
          email={values.email}
          mobile={values.mobile}
          countryId={values.country}
          city={values.city}
          avatar={values.avatar}
        />
      )}
    </div>
  );
}
