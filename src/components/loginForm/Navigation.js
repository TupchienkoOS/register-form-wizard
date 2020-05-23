import React from "react";

export const Navigation = ({
  onPrevStep,
  onNextStep,
  step,
  onConfirmForm,
  confirmed,
}) => {
  return (
    <div className="d-flex justify-content-around mt-2">
      <button
        type="button"
        className="btn btn-secondary btn-block btn-sm mt-1"
        onClick={onPrevStep}
        disabled={step === 1}
      >
        Prev
      </button>
      {step === 4 ? (
        <button
          type="button"
          className="btn btn-primary btn-block btn-sm mt-1 ml-1"
          onClick={onConfirmForm}
          disabled={confirmed}
        >
          {confirmed ? "Confirmed" : "Confirm"}
        </button>
      ) : (
        <button
          type="submit"
          className="btn btn-secondary btn-block btn-sm mt-1 ml-1"
          onClick={onNextStep}
        >
          Next
        </button>
      )}
    </div>
  );
};
export default Navigation;
