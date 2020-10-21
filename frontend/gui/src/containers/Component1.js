import React from "react";
import { Spring } from "react-spring/renderprops";
import Background from "./images/top.svg";
import "./component1.css";

function Component1() {
  return (
    <Spring
      from={{ opacity: 0, marginLeft: -1900 }}
      to={{ opacity: 1, marginLeft: 0 }}
    >
      {(props) => (
        <div style={props} className="trial">
          <div
            style={{
              color: "white",
              float: "left",
              position: "relative",
              height: "90vh",
              width: "100vw",
              verticalAlign: "middle",
              backgroundImage: `url(${Background})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
          >
            <Spring
              from={{ opacity: 0 }}
              to={{ opacity: 1 }}
              config={{ delay: 1000, duration: 1000 }}
            >
              {(props) => (
                <div style={props}>
                  <div
                    style={{
                      position: "absolute",
                      top: "40%",
                      left: "50%",
                      transform: "translate(-50%, -50%)",
                      width: "75vw",
                    }}
                  >
                    <Spring
                      from={{ marginBottom: -100 }}
                      to={{ marginBottom: 0 }}
                      config={{ delay: 1000, duration: 500 }}
                    >
                      {(props) => (
                        <div style={props}>
                            <h1
                              style={{
                                color: "#fafafa",
                                fontFamily: "Montserrat",
                  
                                fontWeight: "600"
                              }}
                              className="subh"
                            >
                              OUTLAWED
                            </h1>
                          <div>
                            <p className="subh" style={{color: "#fafafa",
                                fontFamily: "Montserrat",
                                fontWeight: "normal"}}>
                                SIMPLIFYING WHAT IT MEANS TO BE AN AWARE CITIZEN
                            </p>
                          </div>
                        </div>
                      )}
                    </Spring>
                  </div>
                </div>
              )}
            </Spring>
          </div>
        </div>
      )}
    </Spring>
  );
}

export default Component1;
