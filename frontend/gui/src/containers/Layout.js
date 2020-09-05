import React from "react";
import * as actions from "../store/actions/auth";
import { Layout, Menu, Dropdown, Button } from "antd";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
const { Header, Footer, Content } = Layout;

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
      <Layout className="layout">
        <Header>
          <div className="logo" />
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["1"]}>
            <Menu.Item key="1">
              <Link to="/">Home</Link>
            </Menu.Item>
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
        <Content style={{ padding: "0 0px" }}>
          <div style={{ background: "#fff", padding: 24, minHeight: 280 }}>
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
