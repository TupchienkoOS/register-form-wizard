import React from "react";
import DefaultAvatar from "../../../images/Blank-Profile-Icon.jpg";
import cx from "classnames";

export default function Avatar({ avatar, onChangeInput, error }) {
  const onChangeAvatar = (event) => {
    const reader = new FileReader();
    reader.onload = (event) => {
      onChangeInput({
        target: {
          name: "avatar",
          value: event.target.result,
        },
      });
    };
    reader.readAsDataURL(event.target.files[0]);
  };

  return (
    <div>
      <div>
        <img
          className="img-thumbnail"
          alt="default icon"
          src={avatar || DefaultAvatar}
        />
      </div>
      <div className="custom-file mt-1">
        <input
          type="file"
          className={cx({
            "custom-file-input custom-file-input-sm is-invalid": error,
            "custom-file-input custom-file-input-sm": !error,
          })}
          id="avatar"
          name="avatar"
          onChange={onChangeAvatar}
        ></input>
        <label className="custom-file-label" htmlFor="avatar">
          Choose avatar...
        </label>
        {error && (
          <small id="avatar" className="form-text text-danger">
            {error}
          </small>
        )}
      </div>
    </div>
  );
}
