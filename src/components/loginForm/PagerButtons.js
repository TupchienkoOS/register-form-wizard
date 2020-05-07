import React from "react";

export const PagerButtons = ({
  onPrevPage,
  onNextPage,
  page,
  onConfirmForm,
  confirmed,
}) => {
  const confirmButton = () => {
    return (
      <div className="d-flex justify-content-center m-1">
        <button
          type="button"
          className="btn btn-primary btn-block btn-sm "
          onClick={() => onConfirmForm()}
          disabled={confirmed}
        >
          {confirmed ? "Confirmed" : "Confirm"}
        </button>
      </div>
    );
  };

  const pagerButtons = () => {
    return (
      <div className="d-flex justify-content-around mt-2">
        <button
          type="button"
          className="btn btn-secondary btn-block btn-sm mt-1"
          onClick={onPrevPage}
          disabled={page === 1 ? true : false}
        >
          Prev
        </button>
        <button
          type="submit"
          className="btn btn-secondary btn-block btn-sm mt-1 ml-1"
          onClick={onNextPage}
        >
          Next
        </button>
      </div>
    );
  };

  return page === 4 ? confirmButton() : pagerButtons();
};
export default PagerButtons;
