import React from "react";
import defaultAvatar from "../../images/Blank-Profile-Icon.jpg";

export default ({ avatar, onChangeAvatar, errors }) => {
  return (
    <div>
      <div>
        <img
          className="img-thumbnail"
          alt="default icon"
          src={avatar === "" ? defaultAvatar : avatar}
        />
      </div>
      <div className="custom-file mt-1">
        <input
          type="file"
          className={
            errors
              ? "custom-file-input custom-file-input-sm is-invalid"
              : "custom-file-input custom-file-input-sm"
          }
          id="avatar"
          name="avatar"
          onChange={onChangeAvatar}
        ></input>
        <label className="custom-file-label" htmlFor="avatar">
          Choose avatar...
        </label>
        {errors ? (
          <small id="avatar" className="form-text text-danger">
            {errors}
          </small>
        ) : null}
      </div>
    </div>
  );
};
