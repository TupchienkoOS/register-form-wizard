import React from "react";
import Step1 from "./steps/Step1";
import Step2 from "./steps/Step2";
import Step3 from "./steps/Step3";
import Step4 from "./steps/Step4";

export default function LoginSteps({ step, values, errors, onChangeInput }) {
  return (
    <div>
      {step === 1 && (
        <Step1
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
        <Step2
          email={values.email}
          mobile={values.mobile}
          country={values.country}
          city={values.city}
          errors={errors}
          onChangeInput={onChangeInput}
        />
      )}
      {step === 3 && (
        <Step3
          avatar={values.avatar}
          errors={errors.avatar}
          onChangeInput={onChangeInput}
        />
      )}
      {step === 4 && (
        <Step4
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
