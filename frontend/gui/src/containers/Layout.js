import React from "react";
import * as actions from "../store/actions/auth";
import { Layout, Menu, Dropdown, Button } from "antd";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import './layout.css';
import logo from './images/logo.jpeg';
import Footer from './Footer';
const { Header, Content } = Layout;

const menu = (
  <Menu>
    <Menu.Item>
      <Link to="/ourworks/community-work">Community work</Link>
    </Menu.Item>
    <Menu.Item>
      <Link to="/ourworks/school-program">School program</Link>
    </Menu.Item>
    <Menu.Item>
      <Link to="/ourworks/outlawed-sessions"> Outlawed sessions</Link>
    </Menu.Item>
  </Menu>
);

class CustomLayout extends React.Component {
  render() {
    return (
      <Layout className="layout" style={{width:"100vw"}} >
        <Header className="navbar" style={{width:"100vw"}}>
          <div className="logo">
            <img src={logo} alt="Logo" className="logo_img" />
          </div>
          <Menu style={{background:'#fafafa',color:'#049abf'}} mode="horizontal" defaultSelectedKeys={["1"]}>
            <Menu.Item key="1">
              <Link to="/">Home</Link>
            </Menu.Item>
            {this.props.isAuthenticated ? (
              <Menu.Item key="2">
                <Dropdown
                  style={{ background: "transparent" }}
                  overlay={menu}
                  arrow
                >
                  <Button
                    style={{
                      background: "transparent",
                      border: "none",
                      color: "white",
                      padding: "0",
                    }}
                  >
                    Our works
                  </Button>
                </Dropdown>
              </Menu.Item>
            ) : (
              <Menu.Item key="3">
                <Link to="/login">Our works</Link>
              </Menu.Item>
            )}

            <Menu.Item key="4">
              <Link to="/collaborations">Collaborations</Link>
            </Menu.Item>

            <Menu.Item key="5">
              <Link to="/outreach">Outreach</Link>
            </Menu.Item>
            {this.props.isAuthenticated ? (
              <Menu.Item key="6" onClick={this.props.logout}>
                Logout
              </Menu.Item>
            ) : (
              <Menu.Item key="7">
                <Link to="/login">Login</Link>
              </Menu.Item>
            )}

            {this.props.isAuthenticated ? (
              <></>
            ) : (
              <Menu.Item key="8">
                <Link to="/signup">Signup</Link>
              </Menu.Item>
            )}
          </Menu>
        </Header>
        <Content >
          <div style={{ background: "#fff", padding: 0, minHeight: 280 }}>
            {this.props.children}
          </div>
        </Content>
        <Footer style={{ textAlign: "center" }}>OutLawed ©2020</Footer>
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
