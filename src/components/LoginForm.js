import React from "react";
import PagerButtons from "./PagerButtons";
import { Input } from "./Input";
import ProgressBar from "./ProgressBar";
import Countries from "../data/Countries";
import Cities from "../data/Cities";

class LoginForm extends React.Component {
  constructor() {
    super();
    this.state = {
      firstName: "",
      lastname: "",
      gender: "male",
      password: "",
      repeatPassword: "",
      errors: {},
      email: "",
      mobile: "",
      country: "1",
      page: 1,
      confirmed: false,
    };
  }

  onChangePage = (param) => {
    this.setState({
      page: param === "next" ? this.state.page + 1 : this.state.page - 1,
    });
  };

  onConfirmForm = () => {
    this.setState({
      confirmed: true,
    });
  };

  onChangeInput = (event) => {
    debugger;
    this.setState({ [event.target.name]: event.target.value });
  };

  loginPage1 = () => {
    return (
      <div>
        <Input
          type={"text"}
          id={"firstName"}
          name={"firstName"}
          label={"FirstName"}
          placeholder={"Firstname"}
          value={this.state.firstName}
          onChange={this.onChangeInput}
          errors={this.state.errors.firstName}
        />
        <Input
          type={"text"}
          id={"lastName"}
          name={"lastName"}
          label={"LastName"}
          placeholder={"Lastname"}
          value={this.state.lastName}
          onChange={this.onChangeInput}
          errors={this.state.errors.lastName}
        />
        <Input
          type={"password"}
          id={"password"}
          name={"password"}
          label={"Password"}
          placeholder={"Password"}
          value={this.state.password}
          onChange={this.onChangeInput}
          errors={this.state.errors.password}
        />
        <Input
          type={"password"}
          id={"repeatPassword"}
          name={"repeatPassword"}
          label={"Repeat password"}
          placeholder={"Repeat password"}
          value={this.state.repeatPassword}
          onChange={this.onChangeInput}
          errors={this.state.errors.repeatPassword}
        />
        <div>
          <label className="mb-0 mt-1">Gender</label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            id="genderMale"
            name="gender"
            value="male"
            checked={this.state.gender === "male"}
            onChange={this.onChangeInput}
          />
          <label className="form-check-label" htmlFor="genderMale">
            Male
          </label>
        </div>
        <div className="form-check form-check-sm">
          <input
            className="form-check-input "
            type="radio"
            id="genderFemale"
            name="gender"
            value="female"
            checked={this.state.gender === "female"}
            onChange={this.onChangeInput}
          />
          <label className="form-check-label" htmlFor="genderFemale">
            Female
          </label>
        </div>
      </div>
    );
  };

  loginPage2 = () => {
    const CitiesFitered = Object.keys(Cities).filter(
      (city) => Cities[city].country + "" === this.state.country
    );
    return (
      <div>
        <Input
          type={"email"}
          id={"email"}
          name={"email"}
          label={"Email"}
          placeholder={"Email"}
          value={this.state.email}
          onChange={this.onChangeInput}
          errors={this.state.errors.email}
        />
        <Input
          type={"tel"}
          id={"mobile"}
          name={"mobile"}
          label={"Mobile"}
          placeholder={"Mobile"}
          value={this.state.mobile}
          onChange={this.onChangeInput}
          errors={this.state.errors.mobile}
        />
        <div className="form-group form-group-sm m-1">
          <label htmlFor="country" className="m-1">
            Country
          </label>
          <select
            className="form-control form-control-sm"
            id="country"
            name="country"
            onChange={this.onChangeInput}
          >
            {Countries.map((country) => {
              return (
                <option key={country.id} id={country.id} value={country.id}>
                  {country.name}
                </option>
              );
            })}
          </select>
        </div>
        <div className="form-group form-group-sm m-1">
          <label htmlFor="city" className="m-1">
            City
          </label>
          <select
            className="form-control form-control-sm"
            id="city"
            onChange={this.onChangeInput}
          >
            {CitiesFitered.map((city) => {
              return (
                <option key={city} id={city} value={city}>
                  {Cities[city].name}
                </option>
              );
            })}
          </select>
        </div>
      </div>
    );
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-1 mr-5"></div>
          <ProgressBar
            page={this.state.page}
            confirmed={this.state.confirmed}
          />
          <div className="col-3"></div>
        </div>
        <div className="row">
          <div className="col-md-4 col-sm-4 col-xs-12 "></div>
          <div className="col-md-4 col-sm-4 col-xs-12 ">
            <form>
              {this.state.page === 1 ? this.loginPage1() : null}
              {this.state.page === 2 ? this.loginPage2() : null}
              <PagerButtons
                onChangePage={this.onChangePage}
                page={this.state.page}
                onConfirmForm={this.onConfirmForm}
                confirmed={this.state.confirmed}
              />
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default LoginForm;
