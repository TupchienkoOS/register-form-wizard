import React from "react";
import Countries from "../../../data/Countries";
import Cities from "../../../data/Cities";

export default function LoginPage4({
  firstName,
  lastName,
  email,
  mobile,
  countryId,
  city,
  avatar,
}) {
  const CountryName = () => {
    return Countries.filter((country) => country.id === +countryId)[0].name;
  };

  return (
    <div className="row">
      <div className="col-6">
        <img
          className="img-thumbnail mb-1"
          alt="default icon"
          src={avatar === "" ? "./images/Blank-Profile-Icon.jpg" : avatar}
        />
      </div>
      <div className="col-6">
        <strong>
          {firstName}
          <p>{lastName}</p>
        </strong>
      </div>
      <div className="m-1">
        <span style={{ fontWeight: "bold" }}>Email:</span> {email}
      </div>
      <div className="m-1">
        <strong>Mobile:</strong> {mobile}
      </div>
      <div className="m-1">
        <strong>Location: </strong>
        {CountryName()},{Cities[city].name}
      </div>
    </div>
  );
}
