import axios from "axios";
import * as actionTypes from "./actionTypes";

var link="https://outlawedbackend.herokuapp.com/";

export const authStart = () => {
  return {
    type: actionTypes.AUTH_START,
  };
};

export const authSuccess = (token) => {
  return {
    type: actionTypes.AUTH_SUCCESS,
    token: token,
  };
};

export const authFail = (error) => {
  return {
    type: actionTypes.AUTH_FAIL,
    error: error,
  };
};

export const logout = () => {
  // console.log("logout");
  localStorage.removeItem("token");
  localStorage.removeItem("expirationDate");

  return {
    type: actionTypes.AUTH_LOGOUT,
  };
};

export const checkAuthTimeout = (expirationTime) => {
  return (dispatch) => {
    setTimeout(() => {
      dispatch(logout());
    }, expirationTime * 1000);
  };
};

export const authLogin = (email, password) => {
  return (dispatch) => {
    dispatch(authStart());
    axios
      .post(link+"rest-auth/login/", {
        email: email,
        password: password,
      })
      .then((res) => {
        const token = res.data.token;
        // console.log(token);
        const expirationDate = new Date(new Date().getTime() + 3600 * 1000);
        localStorage.setItem("token", token);
        localStorage.setItem("expirationDate", expirationDate);
        dispatch(authSuccess(token));
        dispatch(checkAuthTimeout(3600));
      })
      .catch((err) => {
        dispatch(authFail(err));
      });
  };
};

export const googleLogin = (accesstoken) => {
  return (dispatch) => {
    dispatch(authStart());
    // console.log(accesstoken);
    axios
      .post(link+"rest-auth/google/", {
        access_token: accesstoken,
      })
      .then((res) => {
        const token = res.data.token;
        // console.log("normal",res);
        const expirationDate = new Date(new Date().getTime() + 3600 * 1000);
        localStorage.setItem("token", token);
        localStorage.setItem("expirationDate", expirationDate);
        dispatch(authSuccess(token));
        dispatch(checkAuthTimeout(3600));
      })
      .catch((err) => {
        dispatch(authFail(err));
        // console.log(err.response.data);
      });
  };
};

export const authSignup = (email, password1, password2) => {
  return (dispatch) => {
    dispatch(authStart());
    axios
      .post(link+"rest-auth/registration/", {
        email: email,
        password1: password1,
        password2: password2,
      })
      .then((res) => {
        const token = res.data.token;
        // console.log("google",res);
        const expirationDate = new Date(new Date().getTime() + 3600 * 1000);
        localStorage.setItem("token", token);
        localStorage.setItem("expirationDate", expirationDate);
        dispatch(authSuccess(token));
        dispatch(checkAuthTimeout(3600));
      })
      .catch((err, res) => {
        dispatch(authFail(err));
        // console.log(err.response.data);
      });
  };
};

export const authCheckState = () => {
  return (dispatch) => {
    const token = localStorage.getItem("token");
    if (token === undefined) {
      dispatch(logout());
    } else {
      const expirationDate = new Date(localStorage.getItem("expirationDate"));
      if (expirationDate <= new Date()) {
        dispatch(logout());
      } else {
        dispatch(authSuccess(token));
        dispatch(
          checkAuthTimeout(
            (expirationDate.getTime() - new Date().getTime()) / 1000
          )
        );
      }
    }
  };
};
