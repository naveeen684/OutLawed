
import InfiniteCarousel from 'react-leaf-carousel';
import React from "react";
import { Spring } from 'react-spring/renderprops';
import Component1 from './Component1';
import Component2 from './Component2';
const Home = () => {

  return (
    <>
    <Component1 style={{width:"98vw"}}/>
    <Spring 
    from = {{opacity:0}}
    to = {{opacity:1}}
    config={{delay:1000,duration:100}}>
      {props=>(
        <div style={props}>
          <Component2 />
        </div>
      )}</Spring>
    </>
  )
}

export default Home;
