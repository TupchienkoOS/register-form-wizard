import React from "react";
import Step1 from "./steps/Step1";
import Step2 from "./steps/Step2";
import Step3 from "./steps/Step3";
import Step4 from "./steps/Step4";

export default function LoginSteps({ step, fields, errors, onChangeInput }) {
  return (
    <div>
      {step === 1 && (
        <Step1
          firstName={fields.firstName}
          lastName={fields.lastName}
          password={fields.password}
          repeatPassword={fields.repeatPassword}
          gender={fields.gender}
          errors={errors}
          onChangeInput={onChangeInput}
        />
      )}
      {step === 2 && (
        <Step2
          email={fields.email}
          mobile={fields.mobile}
          country={fields.country}
          city={fields.city}
          errors={errors}
          onChangeInput={onChangeInput}
        />
      )}
      {step === 3 && (
        <Step3
          avatar={fields.avatar}
          errors={errors.avatar}
          onChangeInput={onChangeInput}
        />
      )}
      {step === 4 && (
        <Step4
          firstName={fields.firstName}
          lastName={fields.lastName}
          email={fields.email}
          mobile={fields.mobile}
          countryId={fields.country}
          city={fields.city}
          avatar={fields.avatar}
        />
      )}
    </div>
  );
}
