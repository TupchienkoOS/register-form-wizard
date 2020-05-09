import React from "react";
import PagerButtons from "./PagerButtons";
import ProgressBar from "./ProgressBar";
import LoginPages from "./LoginPages";

const regexEmailStr = /^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i;
const regexMobStr = /(^[+]{0,1}((38){0,1}|8{0,1})0[1-9]{9}$)/i;

class LoginForm extends React.Component {
  constructor() {
    super();
    this.state = {
      fields: {
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
      page: 1,
      confirmed: false,
    };
  }

  validation = () => {
    const page = this.state.page;
    const errors = {};

    const {
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
    } = this.state.fields;

    switch (page) {
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

  // TODO: Add required error and validation
  onPrevPage = () => {
    this.setState({
      page: this.state.page - 1,
    });
  };

  onNextPage = (e) => {
    e.preventDefault();
    const errors = this.validation();
    if (Object.keys(errors).length === 0) {
      this.setState({
        page: this.state.page + 1,
      });
    }
    this.setState({
      errors,
    });
  };

  onConfirmForm = () => {
    this.setState({
      confirmed: true,
    });
  };

  onChangeInput = (event) => {
    const errors = this.state.errors;
    delete errors[event.target.name];
    const { name, value } = event.target;
    this.setState({
      fields: Object.assign(this.state.fields, {
        [name]: value,
      }),
      errors,
    });
  };

  render() {
    const fields = this.state.fields;
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
              <LoginPages
                page={this.state.page}
                fields={fields}
                errors={this.state.errors}
                onChangeInput={this.onChangeInput}
              />
              <PagerButtons
                onPrevPage={this.onPrevPage}
                onNextPage={this.onNextPage}
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
