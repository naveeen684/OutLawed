import "./Communityworks.css"
import React from "react";
import Wave from '../images/topwaveq.png'
import {  MDBRow, MDBCol } from "mdbreact";
import { MDBCardBody} from "mdbreact";
class CommunityWork extends React.Component {
  render() {
    return (
      <div style={{backgroundImage: `url(${Wave})`,backgroundRepeat: 'no-repeat',width:'100vw',backgroundSize:"100%"}}>
      
      <div style={{paddingTop:"20vh",paddingLeft:"6vw",paddingRight :"8vw"}}>
        
        
        <MDBCardBody className=" text-left">
                    <MDBRow style={{width:"95%"}}>
                    <MDBCol lg="12">
                        <h3 style={{color:"#016B86",fontFamily:"Montserrat",fontSize:"36px"}} className="font-weight-bold mb-3 p-0">
                        <strong><b>COMMUNITY WORK</b></strong>
                        </h3>
                        <hr style={{width:"55px", border:"2px solid #016B86", borderRadius:"2px",margin:"0px",backgroundColor:"#016B86"}} />
                        <br></br>
                        
                    </MDBCol>
                    </MDBRow>
                    <br></br>
                    <MDBRow>
                    <MDBCol sm="12" lg="5"> 
                         <h3 style={{color:"#016B86",fontFamily:"Montserrat", fontSize:"25px"}} className="font-weight-bold mb-3 p-0">
                        <strong>Rations for low income households</strong>
                        </h3>
                        <p className="text-muted" style={{color:"#016B86",fontFamily:"Montserrat",fontSize:"16px"}}>
                        While all Out Loud sessions were free of cost, we conducted one paid session and used the proceeds to provide rations to wage workers and other vulnerable groups affected by the COVID-19 pandemic. This paid session was conducted by Dr. Aditya Sondhi, on the constitutional issues surrounding the lockdown. We raised Rs. 50,000 and could buy 800+ kgs of rations, which were donated to more than 120 impoverished families. 
                        </p>

                        <br></br>
                        <h3 className="font-weight-bold mb-3 p-0" style={{fontSize:"24px",color:"#016B86",fontFamily:"Montserrat"}}>
                        <strong>Mission Aahan Vaahan</strong>
                        </h3>
                        <p className="text-muted" style={{color:"#016B86",fontFamily:"Montserrat",fontSize:"16px"}}>
                        We also started a volunteering campaign to support the Aahan Vaahan mission that aimed at helping migrant workers reach their homes. This campaign was extremely successful and our volunteers raised over Rs. 1,00,000 for the Mission. 
                        </p>
                    </MDBCol>
                    <MDBCol sm="0" lg="1"></MDBCol>
                    <MDBCol lg="6" >
                      <img className="response" src={require("../images/ow.png")} style={{borderRadius:"2%"}} alt="Founder" ></img>
                      <MDBRow >
                          <MDBCol md="4" sm="4">
                            <br></br>
                            <img className="responsive" src={require("../images/ow1.png")} style={{borderRadius:"2%"}} alt="Founder" ></img>
                          </MDBCol>
                          <MDBCol md="4" sm="4">
                          <br></br>
                            <img className="responsive" src={require("../images/ow2.png")} style={{borderRadius:"2%"}} alt="Founder" ></img>
                          </MDBCol>
                          <MDBCol md="4" sm="4">
                          <br></br>
                            <img className="responsive" src={require("../images/ow3.png")} style={{borderRadius:"2%"}} alt="Founder" ></img>
                          </MDBCol>                         
                      </MDBRow>
                    </MDBCol>
                  <MDBCol lg="1"></MDBCol>
                    </MDBRow>
                </MDBCardBody>
       
      </div>
      </div>
    );
  }
}

export default CommunityWork;


              