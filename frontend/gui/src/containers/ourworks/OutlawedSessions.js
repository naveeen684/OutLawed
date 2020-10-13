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
                        <h3 style={{color:"#016B86",fontFamily:"Montserrat", fontSize:"25px"}} className="font-weight-bold mb-3 p-0">
                        <strong>Out Loud Series: A Summary</strong>
                        </h3>
                        <p className="text-muted" style={{color:"#016B86",fontFamily:"Montserrat",fontSize:"16px"}}>
                        The unexpected lockdown in the country brought unprecedented challenges with it. OutLawed, in an effort to bridge the gap between citizens and the law, came up with a series called Out Loud. It was a series of webinars that discussed legal perspectives on a number of societal issues that resonate with young minds. It was an effort to facilitate community discussion from a legal point of view.
                        </p>
                    </MDBCol>
                    </MDBRow>
                    <br></br>
                    <MDBRow>
                    <MDBCol lg="4">
                        <p className="text-muted" style={{color:"#016B86",fontFamily:"Montserrat",fontSize:"16px"}}>
                        We had two types of sessions. First, student-led and curated sessions that included active debate and discussion from the audience. Second, talks and Q&A sessions with legal stalwarts. We worked with over 10 NGOs, companies, and senior advocates!  
                        </p>
                        <br></br>
                        <p className="text-muted" style={{color:"#016B86",fontFamily:"Montserrat",fontSize:"16px"}}>
                        Through the Out Loud series, we tried to explore topics like gender, sexuality, bond markets, mediation, caste, and the like.  Moreover, it was an attempt to bolster community engagement with the law in a manner that was accessible and engaging.  Over the course of ten weeks of the series, we witnessed very active participation from attendees from diverse backgrounds, reaching around 300 people in some sessions! 
                        </p>
                        <br></br>
                    </MDBCol>
                          <MDBCol>                  
                            <img  src={require("../images/bglap.png")} style={{marginLeft:"auto",marginRight:"auto",display:"block",width: "27vw", height:"18vw",borderRadius:"2%"}} alt="Founder" ></img>
                          </MDBCol>
                         
                    </MDBRow>
                </MDBCardBody>
       
      </div>
      </div>
    );
  }
}



export default OutlawedSessions;
              