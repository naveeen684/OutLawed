import React from 'react';
import { Spring } from 'react-spring/renderprops';
import Background from './images/top.svg';
import './component1.css'

function Component1() {
    return (
        <Spring
        from = {{opacity:0, marginLeft : -1900}}
        to = {{opacity:1,marginLeft : 0}}>
        {props=>(    
            <div style={{props,width:"99vw"}} className="trial">
                <div style={{
                    color : 'white',
                    float:'left',
                    position: 'relative',
                    height:'90vh',
                    width : '99vw',
                    verticalAlign:'middle',
                    backgroundImage: `url(${Background})`,
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat'
                    }}>
                        {/* <img src={Background} style={{objectFit:"cover"}}/> */}
                        <Spring 
                        from = {{opacity:0}}
                        to = {{opacity:1}}
                        config={{delay:1000,duration:1000}}>
                        {props=>(
                            <div style={props}>
                                <div style={{position: 'absolute',
                                    top: '50%',
                                    left: '50%',
                                    transform: 'translate(-50%, -50%)',
                                    width:"75vw"
                                    }}>
                                        <Spring from={{marginBottom:-100}}
                                        to={{marginBottom:0}}
                                        config={{delay:1000,duration:500}}>
                                            {props=>(
                                                <div style={props}>
                                                    <h1 style={{color:"#fafafa",fontFamily:"Montserrat", fontSize:"140px"}}>OUTLAWED</h1>
                                                    <div>
                                                        <p style={{color:"#fafafa", fontSize:"40px"}}><strong>SIMPLIFYING WHAT IT MEANS TO BE AN AWARE CITIZEN</strong></p>
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
    )
}

export default Component1;
