import React from "react";
import * as actions from "../store/actions/auth";
import { Layout, Menu, Dropdown, Button } from "antd";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import "./layout.css";
import logo from "./images/logo.jpeg";
import toggle from "./images/toggle.png";
import Footer from "./Footer";

import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavItem,
  MDBNavLink,
  MDBNavbarToggler,
  MDBCollapse,
  MDBFormInline,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
} from "mdbreact";
const { Header, Content } = Layout;

class CustomLayout extends React.Component {
  state = {
    isOpen: false,
  };

  toggleCollapse = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };
  render() {
    return (
      <Layout className="layout" style={{ width: "100vw",background: "#fff" }}>
        <MDBNavbar color="white" dark expand="md">
          <MDBNavbarBrand>
            <MDBNavLink to="/">
              <div className="logo">
                <img src={logo} alt="Logo" className="logo_img" />
              </div>
            </MDBNavLink>
          </MDBNavbarBrand>

          <MDBNavbarToggler
            image={toggle}
            onClick={this.toggleCollapse}
            style={{ marginRight: "3%" }}
          />
          <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
            <MDBNavbarNav right style={{ marginRight: "1%" }}>
              <MDBNavItem className="item" active>
                <MDBNavLink to="/">
                  <strong
                    className=" mr-3"
                    style={{ fontSize: "2.2vh" , color: "#049ABF"}}
                  >
                    Home
                  </strong>
                </MDBNavLink>
              </MDBNavItem>
              <MDBNavItem className="item">
                <MDBDropdown>
                  <MDBDropdownToggle nav caret>
                    <strong
                      className=" mr-3"
                      style={{ fontSize: "2.2vh", color: "#049ABF" }}
                    >
                      Our works
                    </strong>
                  </MDBDropdownToggle>
                  <MDBDropdownMenu >
                    <MDBDropdownItem 
                      className="item"
                      href="/ourworks/community-work"
                    >
                      <strong
                        style={{ fontSize: "2vh", color: "#049ABF" }}
                        
                      >
                        Community work
                      </strong>
                    </MDBDropdownItem>
                    <MDBDropdownItem
                      className="item"
                      href="/ourworks/school-program"
                    >
                      <strong style={{ fontSize: "2vh", color: "#049ABF" }} >
                        School program
                      </strong>
                    </MDBDropdownItem>
                    <MDBDropdownItem
                      className="item"
                      href="/ourworks/outlawed-sessions">
                      {/* {
                        this.props.isAuthenticated
                          ? "/ourworks/outlawed-sessions"
                          : "/login"
                      } */}
                    
                      <strong
                        style={{ fontSize: "2vh", color: "#049ABF" }}
                        className=" mr-3"
                      >
                        Outlawed sessions
                      </strong>
                    </MDBDropdownItem>
                  </MDBDropdownMenu>
                </MDBDropdown>
              </MDBNavItem>
              <MDBNavItem className="item">
                <MDBNavLink to="/collaborations">
                  <strong
                    className=" mr-3"
                    style={{ fontSize: "2.2vh" , color: "#049ABF"}}
                  >
                    Collaborations
                  </strong>
                </MDBNavLink>
              </MDBNavItem>
              <MDBNavItem className="item">
                <MDBNavLink to="/outreach">
                  <strong
                    className="mr-3"
                    style={{ fontSize: "2.2vh", color: "#049ABF" }}
                  >
                    Outreach
                  </strong>
                </MDBNavLink>
              </MDBNavItem>
              {this.props.isAuthenticated ? (
                <MDBNavItem className="item">
                  <MDBNavLink to="/login" onClick={this.props.logout}>
                    <strong
                      className=" mr-3"
                      style={{ fontSize: "2.2vh", color: "#049ABF" }}
                    >
                      Logout
                    </strong>
                  </MDBNavLink>
                </MDBNavItem>
              ) : (
                <MDBNavItem className="item">
                  <MDBNavLink to="/login">
                    <strong
                      className=" mr-3"
                      style={{ fontSize: "2.2vh", color: "#049ABF" }}
                    >
                      Login
                    </strong>
                  </MDBNavLink>
                </MDBNavItem>
              )}

              {this.props.isAuthenticated ? (
                <></>
              ) : (
                <MDBNavItem className="item">
                  <MDBNavLink to="/signup">
                    <strong
                      className=" mr-3"
                      style={{ fontSize: "2.2vh", color: "#049ABF" }}
                    >
                      Signup
                    </strong>
                  </MDBNavLink>
                </MDBNavItem>
              )}
            </MDBNavbarNav>
          </MDBCollapse>
        </MDBNavbar>
        <Content>
          <div
            className="content"
            style={{
              background: "#fff",
              padding: 0,
              minHeight: 280,
            }}
          >
            {this.props.children}
          </div>
        </Content>
        <Footer style={{ background: "#fff", color: "#049ABF" }}>OutLawed ©2020</Footer>
      </Layout>
    );
  }
}

const mapDispathToprops = (dispatch) => {
  return {
    logout: () => dispatch(actions.logout()),
  };
};

export default withRouter(connect(null, mapDispathToprops)(CustomLayout));
