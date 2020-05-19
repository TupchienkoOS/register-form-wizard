import React from "react";
import cx from "classnames";

const stepNames = ["Basic", "Contacts", "Avatar", "Finished"];

const ProgressBar = ({ step, confirmed }) => {
  return (
    <div className="col-8 w-50">
      <ul className="progressbar">
        {stepNames.map((stepName, index) => (
          <li
            key={index}
            className={cx({
              active: step === index + 1,
              complete: step > index + 1 || confirmed,
            })}
          >
            {stepName}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProgressBar;
