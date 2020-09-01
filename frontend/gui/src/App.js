import React, { Component } from "react";
import "./App.css";
import "antd/dist/antd.css";
import { BrowserRouter as Router } from "react-router-dom";
import BaseRouter from "./routes";
import { connect } from "react-redux";
import * as actions from "./store/actions/auth";
import CustomLayout from "./containers/Layout";

class App extends Component {
  componentDidMount() {
    this.props.ontryAutoSignup();
  }
  render() {
    return (
      <div className="App">
        <Router>
          <CustomLayout {...this.props} style={{width:"100vw"}}>
            <BaseRouter />
          </CustomLayout >
        </Router>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.token !== null,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    ontryAutoSignup: () => dispatch(actions.authCheckState()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
