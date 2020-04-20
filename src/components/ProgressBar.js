import React from "react";

const ProgressBar = ({ page, confirmed }) => {
  return (
    <div className="col-8 w-50">
      <ul className="progressbar">
        <li className={page > 1 ? "active" : null}>Step 1</li>
        <li className={page > 2 ? "active" : null}>Step 2</li>
        <li className={page > 3 ? "active" : null}>Step 3</li>
        <li className={confirmed ? "active" : null}>Step 4</li>
      </ul>
    </div>
  );
};

export default ProgressBar;
