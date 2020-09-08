import "./Communityworks.css"
import React from "react";
import Wave from '../images/topwaveq.png'
import { MDBBtn,  MDBRow, MDBCol } from "mdbreact";
import {MDBCardBody} from "mdbreact";


class OutlawedSessions extends React.Component{
  render() {
    return (
      <div style={{backgroundImage: `url(${Wave})`,backgroundRepeat: 'no-repeat',width:'100vw',backgroundSize:"100%"}}>
        
       {/* <img  src={require("../images/topwaveq.png")} style={{width: "100vw",verticalAlign:"middle"}} alt="Founder" ></img> */}
      <div style={{padding:"10vw 0px 0px 5vw"}} >
        <MDBCardBody className="my-0 px-5 pb-5 text-left">
                    <MDBRow style={{width:"95%"}}>
                    <MDBCol lg="12">
                        <h3 style={{color:"#016B86",fontFamily:"Montserrat",fontSize:"36px"}} className="font-weight-bold mb-3 p-0">
                        <strong><b>OUTLAWED OUT LOUD</b></strong>
                        </h3>
                        <hr style={{width:"55px", border:"2px solid #016B86", borderRadius:"2px",margin:"0px"}} />
                        <br></br>
                        <p className="text-muted" style={{color:"#016B86",fontFamily:"Montserrat",fontSize:"16px"}}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris consectetur elementum ligula eu sagittis. Donec euismod lectus ac turpis sollicitudin, at placerat nibh euismod. Aenean ut ultricies magna.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris consectetur elementum ligula eu sagittis. Donec euismod lectus ac turpis sollicitudin, at placerat nibh euismod. Aenean ut ultricies magna. Fusce congue, lorem ut sollicitudin rutrum, nulla neque facilisis tortor, et tempor augue magna at eros. Aenean et sapien dolor. Nunc venenatis justo vitae felis suscipit, volutpat venenatis libero interdum.
                        </p>
                    </MDBCol>
                    </MDBRow>
                    <br></br>
                    <MDBRow>
                    <MDBCol lg="4"> 
                         <h3 style={{color:"#016B86",fontFamily:"Montserrat", fontSize:"25px"}} className="font-weight-bold mb-3 p-0">
                        <strong>Sessions so far</strong>
                        </h3>

                        <p className="text-muted" style={{color:"#016B86",fontFamily:"Montserrat",fontSize:"16px"}}>
                        1. lorem ipsum dolor sit amet, consectetur adipiscing elit. mauris consectetur elementum ligula eu sagittis. donec euismod lectus ac turpis sollicitudin, at placerat nibh euismod. aenean.
                        </p>
                        <br></br>
                        <p className="text-muted" style={{color:"#016B86",fontFamily:"Montserrat",fontSize:"16px"}}>
                        2. lorem ipsum dolor sit amet, consectetur adipiscing elit. mauris consectetur elementum ligula eu sagittis. donec euismod lectus ac turpis sollicitudin, at placerat nibh euismod. aenean.
                        </p>
                        <br></br>
                        <p className="text-muted" style={{color:"#016B86",fontFamily:"Montserrat",fontSize:"16px"}}>
                        3. lorem ipsum dolor sit amet, consectetur adipiscing elit. mauris consectetur elementum ligula eu sagittis. donec euismod lectus ac turpis sollicitudin, at placerat nibh euismod. aenean.
                        </p>
                        <br></br>
                        <p className="text-muted" style={{color:"#016B86",fontFamily:"Montserrat",fontSize:"16px"}}>
                        4. lorem ipsum dolor sit amet, consectetur adipiscing elit. mauris consectetur elementum ligula eu sagittis. donec euismod lectus ac turpis sollicitudin, at placerat nibh euismod. aenean.
                        </p>
                        <br></br>
                        <p className="text-muted" style={{color:"#016B86",fontFamily:"Montserrat",fontSize:"16px"}}>
                        5. lorem ipsum dolor sit amet, consectetur adipiscing elit. mauris consectetur elementum ligula eu sagittis. donec euismod lectus ac turpis sollicitudin, at placerat nibh euismod. aenean.
                        </p>
                        <br></br>
                        <MDBBtn
                          style={{
                         
                            fontFamily: "Montserrat",
                          }}
                          color = "info"
                          className="mb-lg-0 mb-4 waves-light"
                        >
                          More sessions
                        </MDBBtn>
                    </MDBCol>
                    {/* <MDBCol  >
                      <MDBRow> */}
                          <MDBCol lg="5"style={{margin:"0px 0px 0px 0px"}}>
                            <br></br>
                            <br></br>
                            <br></br>
                          
                            <img  src={require("../images/bglap.png")} style={{width: "45vw", height:"30vw",borderRadius:"2%",verticalAlign:"middle"}} alt="Founder" ></img>
                          </MDBCol>
                          {/* <MDBCol sm="3"></MDBCol>
                          <MDBCol sm="3"></MDBCol>
                          <MDBCol sm="3"></MDBCol>
                          <MDBCol sm="3"></MDBCol>
                         
                      </MDBRow>
                    </MDBCol> */}
                    </MDBRow>
                </MDBCardBody>
       
      </div>
      </div>
    );
  }
}



export default OutlawedSessions;
              