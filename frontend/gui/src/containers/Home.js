import React from "react";
import { Spring } from "react-spring/renderprops";
import Component1 from "./Component1";
import Component2 from "./Component2";
import {Helmet} from "react-helmet";

const Home = () => {
  return (
    <>

    <Helmet>
          <meta charSet="UTF-8"/>
          <title>Outlawed-Home</title>
        </Helmet>

      <Component1 style={{ top: "100%", width: "98vw" }} />
      <Spring
        from={{ opacity: 0 }}
        to={{ opacity: 1 }}
        config={{ delay: 1000, duration: 100 }}
      >
        {(props) => (
          <div style={props}>
            <Component2 />
          </div>
        )}
      </Spring>
    </>
  );
};

export default Home;
