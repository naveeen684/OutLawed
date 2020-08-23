import React from "react";
import { Form, Input, Button, Spin } from "antd";
import { NavLink } from "react-router-dom";
import { LoadingOutlined } from "@ant-design/icons";
import { connect } from "react-redux";
import * as actions from "../store/actions/auth";
import { UserOutlined, LockOutlined, GoogleOutlined } from "@ant-design/icons";
import GoogleLogin from "react-google-login";

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;

class Login extends React.Component {
  onFinish = (values) => {
    this.props.onAuth(values.email, values.password);
    this.props.history.push("/login");
  };

  onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  googleResponse = (response) => {
    this.props.googleAuth(response.accessToken);
    this.props.history.push("/");
  };

  render() {
    let errorMessage = null;
    if (this.props.error) {
      errorMessage = <p>{this.props.error.message}</p>;
    }
    return (
      <div>
        {this.props.loading ? (
          <Spin indicator={antIcon} />
        ) : (
          <Form
            {...layout}
            name="basic"
            initialValues={{ remember: true }}
            onFinish={this.onFinish}
            onFinishFailed={this.onFinishFailed}
            style={{
              maxWidth: "500px",
            }}
          >
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
                placeholder="Email"
              />
            </Form.Item>
            {
               (this.props.error)?
                  <p>{this.props.error.response.data.['non_field_errors']}</p>:<></>
            }

            <Form.Item
              name="password"
              rules={[
                { required: true, message: "Please input your password!" },
              ]}
            >
              <Input.Password
                prefix={<LockOutlined className="site-form-item-icon" />}
                type="password"
                placeholder="Password"
              />
            </Form.Item>
            {
               (this.props.error)?
                  <p>{this.props.error.response.data.['password1']}</p>:<></>
            }

            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                className="login-form-button"
                style={{
                  width: "100%",
                }}
              >
                Log in
              </Button>
              <h1>LOGIN WITH GOOGLE</h1>
              <GoogleLogin
                clientId="1064931780182-kbk5iorqkft4btnchqij4obalcdc0ste.apps.googleusercontent.com"
                buttonText="LOGIN WITH GOOGLE"
                onSuccess={this.googleResponse}
                onFailure={this.googleResponse}
                cookiePolicy={"single_host_origin"}
              />
              <br />
              Or{" "}
              <NavLink style={{ marginRight: "10px" }} to="/signup">
                register now!
              </NavLink>
            </Form.Item>
            <Form.Item>
              <Form.Item
                style={{
                  float: "right",
                  margin: "0px",
                }}
              >
                Forgot password
              </Form.Item>
            </Form.Item>
          </Form>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    loading: state.loading,
    error: state.error,
  };
};

const mapDispathToprops = (dispatch) => {
  return {
    onAuth: (email, password) =>
      dispatch(actions.authLogin(email, password)),
    googleAuth: (accesstoken) => dispatch(actions.googleLogin(accesstoken)),
  };
};

export default connect(mapStateToProps, mapDispathToprops)(Login);
