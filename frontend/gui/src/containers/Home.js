
//import InfiniteCarousel from 'react-leaf-carousel';
import React from "react";
import { Spring } from "react-spring/renderprops";
import Component1 from "./Component1";
import Component2 from "./Component2";
const Home = () => {
  return (
    <>
<<<<<<< HEAD
    <div style={{width:"99vw"}}>
    <Component1 />
    </div>
    
    <Spring 
    from = {{opacity:0}}
    to = {{opacity:1}}
    config={{delay:1000,duration:100}}>
      {props=>(
        <div style={props}>
            <div style={{width:"99vw"}}>
        <Component2 />
        </div>
          {/* <Component2 /> */}
        </div>
      )}</Spring>
=======
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
>>>>>>> b836cb2518d2e1aa8705cc25be22508f66a40f1f
    </>
  );
};

export default Home;
