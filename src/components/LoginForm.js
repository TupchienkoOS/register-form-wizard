import React from "react";
import PagerButtons from "./PagerButtons";
import ProgressBar from "./ProgressBar";
import LoginPage1 from "./loginPages/LoginPage#1";
import LoginPage2 from "./loginPages/LoginPage#2";
import LoginPage3 from "./loginPages/LoginPage#3";
import LoginPage4 from "./loginPages/LoginPage#4";

const validationRules = {
  firstName: { firstName: "Must be 5 characters or more" },
  lastName: { lastName: "Must be 5 characters or more" },
  password: { password: "Must be 6 characters or more" },
  repeatPassword: { repeatPassword: "Must be equal password" },
  gender: { gender: "Required" },
  email: { email: "Email not valid" },
  mobile: { mobile: "Mobile not valid" },
  country: { country: "Select your country" },
  city: { city: "Select your city" },
  avatar: { avatar: "Upload your phot" },
};

class LoginForm extends React.Component {
  constructor() {
    super();
    console.log(this);
    this.state = {
      firstName: "",
      lastName: "",
      gender: "male",
      password: "",
      repeatPassword: "",
      errors: {},
      email: "",
      mobile: "",
      country: "",
      city: "",
      avatar: "",
      page: 1,
      confirmed: false,
    };
  }

  validationPage1 = () => {
    if (this.state.firstName.length < 5) {
      this.setState((prevState, prevProps) => ({
        errors: Object.assign(prevState.errors, validationRules["firstName"]),
      }));
    }
    if (this.state.lastName.length < 5) {
      this.setState((prevState, prevProps) => ({
        errors: Object.assign(prevState.errors, validationRules["lastName"]),
      }));
    }
    if (this.state.password.length < 6) {
      this.setState((prevState, prevProps) => ({
        errors: Object.assign(prevState.errors, validationRules["password"]),
      }));
    }
    if (
      this.state.repeatPassword !== this.state.password ||
      this.state.repeatPassword.length === 0
    ) {
      this.setState((prevState, prevProps) => ({
        errors: Object.assign(
          prevState.errors,
          validationRules["repeatPassword"]
        ),
      }));
    }
    if (this.state.gender === "") {
      this.setState((prevState, prevProps) => ({
        errors: Object.assign(prevState.errors, validationRules["gender"]),
      }));
    }
  };

  validationPage2 = () => {
    if (!this.state.email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)) {
      this.setState((prevState, prevProps) => ({
        errors: Object.assign(prevState.errors, validationRules["email"]),
      }));
    }
    if (!this.state.mobile.match(/(^[+]{0,1}((38){0,1}|8{0,1})0[1-9]{9}$)/i)) {
      this.setState((prevState, prevProps) => ({
        errors: Object.assign(prevState.errors, validationRules["mobile"]),
      }));
    }
    if (this.state.country.length === 0) {
      this.setState((prevState, prevProps) => ({
        errors: Object.assign(prevState.errors, validationRules["country"]),
      }));
    }
    if (this.state.city.length === 0) {
      this.setState((prevState, prevProps) => ({
        errors: Object.assign(prevState.errors, validationRules["city"]),
      }));
    }
  };

  validationPage3 = () => {
    if (this.state.avatar === "") {
      this.setState((prevState, prevProps) => ({
        errors: Object.assign(prevState.errors, validationRules["avatar"]),
      }));
    }
  };

  validation = () => {
    if (this.state.page === 1) {
      this.validationPage1();
    } else if (this.state.page === 2) {
      this.validationPage2();
    } else if (this.state.page === 3) {
      this.validationPage3();
    }
  };

  // TODO: Add required error and validation
  onChangePage = (param) => {
    if (param === "next") {
      this.validation();
      this.setState((prevState, prevProps) => {
        if (Object.keys(prevState.errors).length === 0) {
          this.setState({
            page: this.state.page + 1,
          });
        }
      });
    } else if (param === "prev") {
      this.setState({
        page: this.state.page - 1,
      });
    }
  };

  onChangeAvatar = (event) => {
    const reader = new FileReader();
    reader.onload = (event) => {
      this.setState({
        avatar: event.target.result,
      });
    };
    reader.readAsDataURL(event.target.files[0]);
  };

  onConfirmForm = () => {
    this.setState({
      confirmed: true,
    });
  };

  onChangeInput = (event) => {
    const errors = this.state.errors;
    delete this.state.errors[event.target.name];
    this.setState({
      [event.target.name]: event.target.value,
      errors,
    });
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
              {this.state.page === 1 ? (
                <LoginPage1
                  firstName={this.state.firstName}
                  lastName={this.state.lastName}
                  password={this.state.password}
                  repeatPassword={this.state.repeatPassword}
                  gender={this.state.gender}
                  errors={this.state.errors}
                  onChangeInput={this.onChangeInput}
                />
              ) : null}
              {this.state.page === 2 ? (
                <LoginPage2
                  email={this.state.email}
                  mobile={this.state.mobile}
                  country={this.state.country}
                  city={this.state.city}
                  errors={this.state.errors}
                  onChangeInput={this.onChangeInput}
                />
              ) : null}
              {this.state.page === 3 ? (
                <LoginPage3
                  avatar={this.state.avatar}
                  errors={this.state.errors.avatar}
                  onChangeAvatar={this.onChangeAvatar}
                />
              ) : null}
              {this.state.page === 4 ? (
                <LoginPage4
                  firstName={this.state.firstName}
                  lastName={this.state.lastName}
                  email={this.state.email}
                  mobile={this.state.mobile}
                  countryId={this.state.country}
                  city={this.state.city}
                  avatar={this.state.avatar}
                />
              ) : null}
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
