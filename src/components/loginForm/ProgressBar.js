import React from "react";

const ProgressBar = ({ step, confirmed }) => {
  return (
    <div className="col-8 w-50">
      <ul className="progressbar">
        <li className={step > 1 ? "active" : null}>Basic</li>
        <li className={step > 2 ? "active" : null}>Contacts</li>
        <li className={step > 3 ? "active" : null}>Avatar</li>
        <li className={confirmed ? "active" : null}>Finished</li>
      </ul>
    </div>
  );
};

export default ProgressBar;
