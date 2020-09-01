import React from 'react';
import { Spring } from 'react-spring/renderprops';
import './component1.css'

function Component1() {
    return (
        <Spring 
        from = {{opacity:0, marginLeft : -1900}}
        to = {{opacity:1,marginLeft : 0}}>
        {props=>(    
            <div style={props} className="trial">
                <div style={{
                    background: '#049abf',
                    color : 'white',
                    //marginLeft:'-441.9px',
                    float:'left',
                    position: 'relative',
                    height:'100%',
                    width : '100vw',
                    verticalAlign:'middle'}}>
                        <Spring 
                        from = {{opacity:0}}
                        to = {{opacity:1}}
                        config={{delay:1000,duration:1000}}>
                        {props=>(
                            <div style={props}>
                                <div style={{position: 'absolute',
                                    top: '50%',
                                    left: '50%',
                                    transform: 'translate(-50%, -50%)'}}>
                                        <Spring from={{marginBottom:-100}}
                                        to={{marginBottom:0}}
                                        config={{delay:1000,duration:1000}}>
                                            {props=>(
                                                <div>
                                                    <h1 style={{color:"#fafafa"}}>OUTLAWED</h1>
                                                    <div>
                                                        <h1 style={{color:"#fafafa"}}>SIMPLIFYING WHAT IT MEANS TO BE AN AWARE CITIZEN</h1>
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
