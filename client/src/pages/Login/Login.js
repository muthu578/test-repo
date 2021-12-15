import React, { Component } from "react";
import "./Login.scss";
import { Redirect } from "react-router-dom";
import { Button, Row, Col, Modal, Input } from "antd";
import logo from "../../../src/assets/images/icons/logo_SuperMicro.svg";
import leftBanner from "../../../src/assets/images/layout/SCC@2x.png";
import logoSmall from "../../../src/assets/images/logo.svg";
import Dashboard from "../../pages/Dashboard/Dashboard";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      islogged: false,
      loading: false,
      visible: false,
      forgotUI: false,
      fields: {},
      errors: {},
      loginParams: {
        user_id: "",
        user_password: "",
      },
    };
  }
  handleFormChange = (event) => {
    let loginParamsNew = { ...this.state.loginParams };
    let val = event.target.value;
    loginParamsNew[event.target.name] = val;
    this.setState({
      loginParams: loginParamsNew,
    });
  };

  login = (event) => {
    let user_id = this.state.loginParams.user_id;
    let user_password = this.state.loginParams.user_password;
    if (user_id === "admin" && user_password === "123") {
      localStorage.setItem("token", "T");
      this.setState({
        islogged: true,
      });
    }
    event.preventDefault();
  };

  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  showForgot = () => {
    this.setState({
      forgotUI: true,
    });
  };
  showLogin = () => {
    this.setState({
      forgotUI: false,
    });
  };
  handleOk = () => {
    this.setState({ loading: true });
    setTimeout(() => {
      this.setState({ loading: false, visible: false });
    }, 3000);
  };

  handleCancel = () => {
    this.setState({ visible: false, forgotUI: false });
  };

  handleValidation() {
    let fields = this.state.fields;
    let errors = {};
    let formIsValid = true;

    //Name
    if (!fields["name"]) {
      formIsValid = false;
      errors["name"] = "Cannot be empty";
    }

    if (typeof fields["name"] !== "undefined") {
      if (!fields["name"].match(/^[a-zA-Z]+$/)) {
        formIsValid = false;
        errors["name"] = "Only letters";
      }
    }

    //Email
    if (!fields["email"]) {
      formIsValid = false;
      errors["email"] = "Cannot be empty";
    }

    if (typeof fields["email"] !== "undefined") {
      let lastAtPos = fields["email"].lastIndexOf("@");
      let lastDotPos = fields["email"].lastIndexOf(".");

      if (
        !(
          lastAtPos < lastDotPos &&
          lastAtPos > 0 &&
          fields["email"].indexOf("@@") == -1 &&
          lastDotPos > 2 &&
          fields["email"].length - lastDotPos > 2
        )
      ) {
        formIsValid = false;
        errors["email"] = "Email is not valid";
      }
    }

    this.setState({ errors: errors });
    return formIsValid;
  }

  contactSubmit(e) {
    e.preventDefault();
    if (this.handleValidation()) {
      console.log("1");
    } else {
      console.log("2");
    }
  }

  handleChange(field, e) {
    let fields = this.state.fields;
    fields[field] = e.target.value;
    this.setState({ fields });
  }

  render() {
    const { visible, loading } = this.state;

    if (localStorage.getItem("token")) {
      return <Redirect to='/' component={Dashboard} />;
    }
    return (
      <>
        <div className='login'>
          <div className='login__logo'>
            <img src={logo} alt='logo' />
          </div>
          <div className='login__Grp'>
            <Row>
              <Col span={12}>
                <div className='login__left'>
                  <div className='login__left--banner'>
                    <img src={leftBanner} />
                  </div>
                </div>
              </Col>
              <Col span={12}>
                {" "}
                <div className='login__Right'>
                  <div className='login__Right--grp'>
                    <h1>Supermicro Power Manager</h1>
                    <p>
                      Your gateway to the infrastructure Realize the best future
                      of your business
                    </p>
                    <Button onClick={this.showModal} className='btn-white'>
                      Sign in
                    </Button>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </div>
        <Modal
          visible={visible}
          centered
          width={460}
          className='LoginModal'
          onOk={this.handleOk}
          onCancel={this.handleCancel}>
          {this.state.forgotUI === false ? (
            <form onSubmit={this.login} className='form-signin'>
              <div className='logo-small'>
                <img src={logoSmall} />
              </div>
              <div className='header-grp'>
                <h1> Supermicro Power Manager</h1>
                <span> Let's Get Started SCC</span>
              </div>
              <div className='row'>
                <div className='col'>
                  <fieldset className='fieldset'>
                    <Input
                      type='text'
                      name='user_id'
                      className='loginInput'
                      onChange={this.handleFormChange}
                      placeholder='Enter Username'
                    />
                  </fieldset>
                  <fieldset className='fieldset'>
                    <Input
                      type='password'
                      className='loginInput'
                      name='user_password'
                      onChange={this.handleFormChange}
                      placeholder='Enter Password'
                    />
                  </fieldset>
                  <p className='local-user'>Local User</p>
                  <input
                    type='submit'
                    className='btn-primary btn-input'
                    value='Login'
                  />
                </div>
              </div>
              {/* <p>user_id === "admin" && user_password === "123"</p> */}
              <label className='forgot-text'>
                <span onClick={this.showForgot}> Forgot Your Password?</span>
              </label>
            </form>
          ) : (
            <form
              name='contactform'
              className='contactform form-signin'
              onSubmit={this.contactSubmit.bind(this)}>
              <div className='logo-small'>
                <img src={logoSmall} />
              </div>
              <div className='header-grp'>
                <h1> Supermicro Power Manager</h1>
                <span> Let's Get Started SCC</span>
              </div>
              <div className='col-md-6'>
                <fieldset className='fieldset'>
                  <Input
                    refs='email'
                    type='text'
                    className='loginInput'
                    size='30'
                    placeholder='Email'
                    onChange={this.handleChange.bind(this, "email")}
                    value={this.state.fields["email"]}
                  />
                  <span className='error'>{this.state.errors["email"]}</span>
                </fieldset>
              </div>
              <div className='col-md-12'>
                <fieldset className='fieldset'>
                  <input
                    type='submit'
                    className='btn-primary btn-input'
                    value='Login'
                  />
                </fieldset>
              </div>
              <label className='forgot-text'>
                <span onClick={this.showLogin}> Remember it? Sign in here</span>
              </label>
              <p className='copyright'>
                Copyright © 2014-2019 Super Micro Computer, Inc.
              </p>
            </form>
          )}
        </Modal>
      </>
    );
  }
}
export default Login;
