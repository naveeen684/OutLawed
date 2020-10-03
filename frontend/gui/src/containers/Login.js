import React from "react";
import { Form, Input, Button, Spin } from "antd";
import { NavLink } from "react-router-dom";
import { LoadingOutlined } from "@ant-design/icons";
import { connect } from "react-redux";
import Logo from "./images/logos.png";
import { MDBContainer, MDBRow, MDBCol, MDBBtn } from "mdbreact";
import * as actions from "../store/actions/auth";
import { UserOutlined, LockOutlined, GoogleOutlined } from "@ant-design/icons";
import GoogleLogin from "react-google-login";

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

const antIcon = (
  <LoadingOutlined style={{ fontSize: 20, color: "white" }} spin />
);

class Login extends React.Component {
  onFinish = (values) => {
    this.props.onAuth(values.email, values.password);
  };

  onVerified = () => {
    this.props.history.push("/");
  };

  onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  googleResponse = (response) => {
    this.props.googleAuth(response.accessToken);
  };

  render() {
    let errorMessage = null;
    if (this.props.error) {
      errorMessage = <p style={{ color: "red" }}>{this.props.error.message}</p>;
    }
    return (
      <div>
        {this.props.token ? this.onVerified() : console.log("no")}
        <>
          <MDBRow style={{ width: "100vw", height: "98vh" }}>
            <MDBCol lg="8">
              <br></br>

              <Form
                {...layout}
                name="basic"
                initialValues={{ remember: true }}
                onFinish={this.onFinish}
                onFinishFailed={this.onFinishFailed}
                style={{
                  paddingLeft: "5vw",
                  marginLeft: "5vw",
                  height: "100%",
                  marginTop: "100px",
                  marginBottom: "auto",
                }}
              >
                <h1
                  style={{
                    color: "#016B86",
                    fontFamily: "Montserrat",
                    fontSize: "36px",
                    fontWeight: "normal",
                  }}
                  className="text-left"
                >
                  <strong>LOGIN</strong>
                </h1>
                <br></br>

                <Form.Item
                  name="email"
                  rules={[
                    {
                      type: "email",
                      message: "The input is not valid E-mail!",
                    },
                    {
                      required: true,
                      message: "Please input your E-mail!",
                    },
                  ]}
                >
                  <Input
                    prefix={<GoogleOutlined className="site-form-item-icon" />}
                    type="email"
                    style={{
                      width: "100%",
                      height: "5vh",
                      borderRadius: "5px",
                      borderColor: "black",
                    }}
                    placeholder="Email address"
                  />
                </Form.Item>

                {this.props.error ? (
                  <p
                    style={{
                      color: "red",
                      fontSize: "15px",
                      textAlign: "left",
                      marginTop: "-10px",
                    }}
                  >
                    {this.props.error.response.data["non_field_errors"]}
                  </p>
                ) : (
                  <></>
                )}
                {this.props.error ? (
                  <p
                    style={{
                      color: "red",
                      fontSize: "15px",
                      textAlign: "left",
                      marginTop: "-10px",
                      marginTop: "2px",
                    }}
                  >
                    {this.props.error.response.data["email"]}
                  </p>
                ) : (
                  <></>
                )}

                <Form.Item
                  name="password"
                  rules={[
                    {
                      required: true,
                      message: "Please input your password!",
                    },
                  ]}
                >
                  <Input.Password
                    prefix={<LockOutlined className="site-form-item-icon" />}
                    type="password"
                    style={{
                      width: "100%",
                      height: "5vh",
                      borderRadius: "5px",
                      borderColor: "black",
                    }}
                    placeholder="Password"
                  />
                </Form.Item>
                {this.props.error ? (
                  <p
                    style={{
                      color: "red",
                      fontSize: "15px",
                      textAlign: "left",
                      marginTop: "-10px",
                    }}
                  >
                    {this.props.error.response.data["password1"]}
                  </p>
                ) : (
                  <></>
                )}

                <Form.Item>
                  {/* <Button
                        type="primary"
                        htmlType="submit"
                        className="login-form-button"
                        style={{
                          width: "100%",
                        }}
                      >
                        {this.props.loading ? <Spin indicator={antIcon} /> : "Log in"}
                      </Button> */}
                  <br />
                  <Button
                    style={{
                      fontFamily: "Montserrat",
                      color: "white",
                      backgroundColor: "#006064",
                      width: "40%",
                      padding: "2%",
                      height: "100%",
                    }}
                    htmlType="submit"
                    // color="#006064 cyan darken-3"
                    size="large"
                    className="mb-lg-0"
                  >
                    {this.props.loading ? (
                      <Spin indicator={antIcon} />
                    ) : (
                      "Sign in"
                    )}
                  </Button>
                  <br></br>
                  <br></br>
                  <br></br>
                  {/* <h3 style={{color:"#016B86",textAlign:"center"}}>Or</h3> */}
                  <GoogleLogin
                    className="Google"
                    clientId="1064931780182-kbk5iorqkft4btnchqij4obalcdc0ste.apps.googleusercontent.com"
                    buttonText="LOGIN WITH GOOGLE"
                    onSuccess={this.googleResponse}
                    onFailure={this.googleResponse}
                    cookiePolicy={"single_host_origin"}
                    isSignedIn={true}
                  />
                  <br />
                  <br />
                  <br />
                  Or{" "}
                  <NavLink style={{ marginRight: "10px" }} to="/signup">
                    register now!
                  </NavLink>
                </Form.Item>
                {/* <Form.Item>
                      <Form.Item
                        style={{
                          float: "right",
                          margin: "0px",
                        }}
                      >
                        Forgot password
                      </Form.Item>
                    </Form.Item> */}
              </Form>
            </MDBCol>
            <MDBCol lg="4">
              <div
                style={{
                  backgroundColor: "#016B86",
                  height: "106.6%",
                  width: "106%",
                  margin: "0px",
                  padding: "0px",
                  backgroundImage: `url(${Logo})`,
                  backgroundSize: "20%",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "right 2vw bottom 5vh",
                }}
                className="sideBanner"
              ></div>
            </MDBCol>
          </MDBRow>
        </>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    loading: state.loading,
    error: state.error,
    token: state.token,
  };
};

const mapDispathToprops = (dispatch) => {
  return {
    onAuth: (email, password) => dispatch(actions.authLogin(email, password)),
    googleAuth: (accesstoken) => dispatch(actions.googleLogin(accesstoken)),
  };
};

export default connect(mapStateToProps, mapDispathToprops)(Login);
