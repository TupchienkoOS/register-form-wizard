import React from "react";

const ProgressBar = ({ page, confirmed }) => {
  return (
    <div className="col-8 w-50">
      <ul className="progressbar">
        <li className={page > 1 ? "active" : null}>Basic</li>
        <li className={page > 2 ? "active" : null}>Contacts</li>
        <li className={page > 3 ? "active" : null}>Avatar</li>
        <li className={confirmed ? "active" : null}>Finished</li>
      </ul>
    </div>
  );
};

export default ProgressBar;
