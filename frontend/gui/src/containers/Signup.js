import React from "react";
import { Form, Input, Button, Spin } from "antd";
import { UserOutlined, LockOutlined, GoogleOutlined } from "@ant-design/icons";
import { NavLink } from "react-router-dom";
import { LoadingOutlined } from "@ant-design/icons";
import { MDBContainer, MDBRow, MDBInput,MDBCol, MDBBtn } from 'mdbreact';
import * as actions from "../store/actions/auth";
import Logo from './images/logos.png';
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
      <div > 
        {this.props.token ? this.onVerified() : console.log("no")}
        {this.props.loading ? (
          <Spin indicator={antIcon} />
        ) : (
        <>
          <MDBRow style={{width:"100vw",height:"98vh"}}>
            <MDBCol lg="8" >
            <br></br>
              <Form
                {...layout}
                name="basic"
                initialValues={{ remember: true }}
                onFinish={this.onFinish}
                onFinishFailed={this.onFinishFailed}
                style={{
                  paddingLeft:"5vw",
                    marginLeft:"5vw",
                    height:"100%",
                    marginTop:"100px",
                    marginBottom:"auto"
                }}
              >
                <h1 style={{color: "#016B86",
                    fontFamily: "Montserrat",
                    fontSize: "30px"
                    }} className="text-left"><strong>Sign Up</strong></h1>
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
                    style={{width:"100%",height:"5vh",borderRadius:"5px",borderColor:"black"}}
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
                    style={{width:"100%",height:"5vh",borderRadius:"5px",borderColor:"black"}}
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
                    style={{width:"100%",height:"5vh",borderRadius:"5px",borderColor:"black"}}
                    placeholder="Confirm Password"
                  />
                </Form.Item>
                <Form.Item>
                  <MDBBtn
                          style={{
                         
                            fontFamily: "Montserrat",
                            color:"white"
                          }}
                          htmlType="submit"
                          color = "#006064 cyan darken-3"
                          className="mb-lg-0 mb-4 login-form-button waves-light"
                        >
                          Sign up
                        </MDBBtn>
                  <br></br>
                  <br></br>
                  <NavLink style={{ marginRight: "10px" }} to="/login">
                    Already have an account? Login!
                  </NavLink>
                </Form.Item>
              </Form>
            </MDBCol>
            <MDBCol lg="4">
               <div style={{backgroundColor:"#016B86",height:"100%",width:"100%",margin:"0px",padding:"0px",backgroundImage: `url(${Logo})`,backgroundRepeat:"no-repeat",backgroundPosition:"right 2vw bottom 5vh"}}>
                  
               </div>
            </MDBCol>
          </MDBRow>
        </>
          
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
