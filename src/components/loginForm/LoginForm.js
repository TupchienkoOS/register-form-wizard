import React from "react";
import Navigation from "./Navigation";
import ProgressBar from "./ProgressBar";
import LoginSteps from "./LoginSteps";

const regexEmailStr = /^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i;
const regexMobStr = /(^[+]{0,1}((38){0,1}|8{0,1})0[1-9]{9}$)/i;

class LoginForm extends React.Component {
  constructor() {
    super();
    this.state = {
      values: {
        firstName: "",
        lastName: "",
        gender: "male",
        password: "",
        repeatPassword: "",
        email: "",
        mobile: "",
        country: "",
        city: "",
        avatar: "",
      },
      errors: {},
      step: 1,
      confirmed: false,
    };
  }

  getErrors = () => {
    const {
      step,
      values: {
        firstName,
        lastName,
        password,
        repeatPassword,
        gender,
        email,
        mobile,
        country,
        city,
        avatar,
      },
    } = this.state;
    const errors = {};

    switch (step) {
      case 1:
        if (firstName.length < 5) {
          errors.firstName = "Must be 5 characters or more";
        }

        if (lastName.length < 5) {
          errors.lastName = "Must be 5 characters or more";
        }

        if (password.length < 6) {
          errors.password = "Must be 6 characters or more";
        }

        if (repeatPassword !== password || repeatPassword.length === 0) {
          errors.repeatPassword = "Must be equal password";
        }

        if (gender === "") {
          errors.gender = "Required";
        }
        break;
      case 2:
        if (!email.match(regexEmailStr)) {
          errors.email = "Email not valid";
        }

        if (!mobile.match(regexMobStr)) {
          errors.mobile = "mobile";
        }

        if (country.length === 0) {
          errors.country = "Select your country";
        }

        if (city.length === 0) {
          errors.city = "Select your city";
        }
        break;
      case 3:
        if (avatar === "") {
          errors.avatar = "Upload your photo";
        }

        break;
      default:
    }
    return errors;
  };

  onPrevStep = () => {
    this.setState((state) => ({
      step: state.step - 1,
    }));
  };

  onNextStep = (e) => {
    e.preventDefault();
    const errors = this.getErrors();
    if (Object.keys(errors).length === 0) {
      this.setState({
        errors: {},
        step: this.state.step + 1,
      });
    } else {
      this.setState({
        errors,
      });
    }
  };

  onConfirmForm = () => {
    this.setState({
      confirmed: true,
    });
  };

  onChangeInput = (event) => {
    const { errors, values } = this.state;
    const { name, value } = event.target;
    const updatedValues = { ...values };

    const updatedErrors = { ...errors };
    delete updatedErrors[name];

    if (name === "country") {
      updatedValues.city = "";
    }

    this.setState({
      values: { ...updatedValues, [name]: value },
      errors: updatedErrors,
    });
  };

  render() {
    const { step, values, errors, confirmed } = this.state;
    return (
      <div className="container">
        <div className="row">
          <div className="col-1 mr-5"></div>
          <ProgressBar
            step={this.state.step}
            confirmed={this.state.confirmed}
          />
          <div className="col-3"></div>
        </div>
        <div className="row">
          <div className="col-md-4 col-sm-4 col-xs-12 "></div>
          <div className="col-md-4 col-sm-4 col-xs-12 ">
            <form>
              <LoginSteps
                step={step}
                values={values}
                errors={errors}
                onChangeInput={this.onChangeInput}
              />
              <Navigation
                onPrevStep={this.onPrevStep}
                onNextStep={this.onNextStep}
                step={step}
                onConfirmForm={this.onConfirmForm}
                confirmed={confirmed}
              />
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default LoginForm;
