import React from "react";
import PagerButtons from "./PagerButtons";
import ProgressBar from "./ProgressBar";
import LoginPages from "./LoginPages";
import defaultAvatar from "../../images/Blank-Profile-Icon.jpg";

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
        avatar: defaultAvatar,
      },
      errors: {},
      page: 1,
      confirmed: false,
    };
  }

  validationPage1 = () => {
    debugger;
    const {
      firstName,
      lastName,
      password,
      repeatPassword,
      gender,
    } = this.state.fields;
    if (firstName.length < 5) {
      this.setState((prevState, prevProps) => ({
        errors: Object.assign(prevState.errors, validationRules["firstName"]),
      }));
    }
    if (lastName.length < 5) {
      this.setState((prevState, prevProps) => ({
        errors: Object.assign(prevState.errors, validationRules["lastName"]),
      }));
    }
    if (password.length < 6) {
      this.setState((prevState, prevProps) => ({
        errors: Object.assign(prevState.errors, validationRules["password"]),
      }));
    }
    if (repeatPassword !== password || repeatPassword.length === 0) {
      this.setState((prevState, prevProps) => ({
        errors: Object.assign(
          prevState.errors,
          validationRules["repeatPassword"]
        ),
      }));
    }
    if (gender === "") {
      this.setState((prevState, prevProps) => ({
        errors: Object.assign(prevState.errors, validationRules["gender"]),
      }));
    }
  };

  validationPage2 = () => {
    const { email, mobile, country, city } = this.state.fields;
    if (!email.match(regexEmailStr)) {
      this.setState((prevState, prevProps) => ({
        errors: Object.assign(prevState.errors, validationRules["email"]),
      }));
    }
    if (!mobile.match(regexMobStr)) {
      this.setState((prevState, prevProps) => ({
        errors: Object.assign(prevState.errors, validationRules["mobile"]),
      }));
    }
    if (country.length === 0) {
      this.setState((prevState, prevProps) => ({
        errors: Object.assign(prevState.errors, validationRules["country"]),
      }));
    }
    if (city.length === 0) {
      this.setState((prevState, prevProps) => ({
        errors: Object.assign(prevState.errors, validationRules["city"]),
      }));
    }
  };

  validationPage3 = () => {
    if (this.state.fields.avatar === "") {
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

  onConfirmForm = () => {
    this.setState({
      confirmed: true,
    });
  };

  onChangeInput = (event) => {
    const errors = this.state.errors;
    delete this.state.errors[event.target.name];
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
