import React from "react";
import PagerButtons from "./PagerButtons";
import ProgressBar from "./ProgressBar";
import LoginPage1 from "./loginPages/LoginPage#1";
import LoginPage2 from "./loginPages/LoginPage#2";
import LoginPage3 from "./loginPages/LoginPage#3";
import LoginPage4 from "./loginPages/LoginPage#4";

class LoginForm extends React.Component {
  constructor() {
    super();
    this.state = {
      firstName: "",
      lastName: "",
      gender: "male",
      password: "",
      repeatPassword: "",
      errors: {},
      email: "",
      mobile: "",
      country: "1",
      city: "1",
      avatar: "",
      page: 1,
      confirmed: false,
    };
  }

  onChangePage = (param) => {
    this.setState({
      page: param === "next" ? this.state.page + 1 : this.state.page - 1,
    });
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
    this.setState({ [event.target.name]: event.target.value });
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
                  errors={this.state.errors}
                  onChangeInput={this.onChangeInput}
                />
              ) : null}
              {this.state.page === 3 ? (
                <LoginPage3
                  avatar={this.state.avatar}
                  errors={this.state.errors}
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
