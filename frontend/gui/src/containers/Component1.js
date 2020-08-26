import React from 'react';
import { Spring } from 'react-spring/renderprops';

function Component1() {
    return (
        <Spring 
        from = {{opacity:0, marginLeft : -1900}}
        to = {{opacity:1,marginLeft : 0}}>
        {props=>(    
            <div style={props}>
                <div style={{
                    background: '#049abf',
                    color : 'white',
                    padding : '1.5rem',
                    width : 'fixed'}}>
                    
                    <h1 style={{color:"#fafafa"}}>OUTLAWED</h1>
                    <div>
                        <h1 style={{color:"#fafafa"}}>SIMPLIFYING WHAT IT MEANS TO BE AN AWARE CITIZEN</h1>
                    </div>

                </div>
            </div>
        )}
        </Spring>
    )
}

export default Component1;
