import React from "react";
import { Form, Input, Button, Spin } from "antd";
import { UserOutlined, LockOutlined, GoogleOutlined } from "@ant-design/icons";
import { NavLink } from "react-router-dom";
import { LoadingOutlined } from "@ant-design/icons";
import * as actions from "../store/actions/auth";
import { connect } from "react-redux";

const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

class Signup extends React.Component {
  onFinish = (values) => {
    this.props.onAuth(values.email, values.password, values.confirm);
  };

  onVerified = () => {
    this.props.history.push("/");
  };

  onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  render() {
    let errorMessage = null;

    return (
      <div>
        {this.props.token ? this.onVerified() : console.log("no")}
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
            {this.props.error ? (
              <p style={{ color: "red" }}>
                {this.props.error.response.data["email"]}
              </p>
            ) : (
              <></>
            )}

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
            {this.props.error ? (
              <p style={{ color: "red" }}>
                {this.props.error.response.data["password1"]}
              </p>
            ) : (
              <></>
            )}
            <Form.Item
              name="confirm"
              rules={[
                {
                  required: true,
                  message: "Please confirm your password!",
                },

                ({ getFieldValue }) => ({
                  validator(rule, value) {
                    if (!value || getFieldValue("password") === value) {
                      return Promise.resolve();
                    }
                    return Promise.reject(
                      "The two passwords that you entered do not match!"
                    );
                  },
                }),
              ]}
            >
              <Input.Password
                prefix={<LockOutlined className="site-form-item-icon" />}
                type="password"
                placeholder="Password"
              />
            </Form.Item>

            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                className="login-form-button"
                style={{
                  width: "100%",
                }}
              >
                Sign up
              </Button>
              <NavLink style={{ marginRight: "10px" }} to="/login">
                Already have an account Login!
              </NavLink>
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
    token: state.token,
  };
};

const mapDispathToprops = (dispatch) => {
  return {
    onAuth: (email, password1, password2) =>
      dispatch(actions.authSignup(email, password1, password2)),
  };
};

export default connect(mapStateToProps, mapDispathToprops)(Signup);
