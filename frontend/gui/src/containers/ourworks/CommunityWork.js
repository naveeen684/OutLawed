import "./Communityworks.css"
import React from "react";
import Wave from '../images/topwaveq.png'
import InfiniteCarousel from 'react-leaf-carousel';
import { MDBJumbotron, MDBBtn, MDBContainer, MDBRow, MDBCol, MDBCardTitle, MDBIcon } from "mdbreact";
import {MDBCard, MDBCardBody, MDBMask, MDBView} from "mdbreact";
import { MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBCardImage, MDBCardText} from "mdbreact";

class CommunityWork extends React.Component {
  render() {
    return (
      <div style={{backgroundImage: `url(${Wave})`,backgroundRepeat: 'no-repeat',width:'100vw',backgroundSize:"100%"}}>
      
      <div style={{padding:"10vw 0px 0px 5vw" }}>
        
        
        <MDBCardBody className="my-0 px-5 pb-5 text-left">
                    <MDBRow style={{width:"95%"}}>
                    <MDBCol lg="12">
                        <h3 style={{color:"#016B86",fontFamily:"Montserrat",fontSize:"36px"}} className="font-weight-bold mb-3 p-0">
                        <strong><b>COMMUNITY WORK</b></strong>
                        </h3>
                        <hr style={{width:"55px", border:"2px solid #016B86", borderRadius:"2px",margin:"0px"}} />
                        <br></br>
                        <p className="text-muted" style={{color:"#016B86",fontFamily:"Montserrat",fontSize:"16px"}}>
                            While all of our OutLawed Out Loud sessions have been free, we decided to conduct one paid session and use the proceeds to provide rations to the labourers and other vulnerable groups affected by the Covid-19 situation. 
                        </p>
                    </MDBCol>
                    </MDBRow>
                    <br></br>
                    <MDBRow>
                    <MDBCol lg="5"> 
                         <h3 style={{color:"#016B86",fontFamily:"Montserrat", fontSize:"25px"}} className="font-weight-bold mb-3 p-0">
                        <strong>Rations for low income households</strong>
                        </h3>
                        <p className="text-muted" style={{color:"#016B86",fontFamily:"Montserrat",fontSize:"16px"}}>
                        Through our paid session, which was conducted by Dr. Aditya Sondhi on the constitutional issues surrounding the lockdown, we raised Rs. 50,000. We could buy 800+ kg of ration which were donated to more than 120 impoverished families and this would not have been possible without the generous donations by our patrons and Dr. Aditya Sondhi.
                        </p>

                        <br></br>
                        <h3 className="font-weight-bold mb-3 p-0" style={{fontSize:"24px",color:"#016B86",fontFamily:"Montserrat"}}>
                        <strong>Mission Aahan Vaahan</strong>
                        </h3>
                        <p className="text-muted" style={{color:"#016B86",fontFamily:"Montserrat",fontSize:"16px"}}>
                        The migrant work crisis shook the conscience of the whole country and we tried our best to contribute and help the migrants reach their homes during the crisis of the pandemic. We started a volunteering campaign to support the Aahan Vaahan mission aimed at helping migrant workers reach their homes. The volunteers could sign up through our campaign and raise funds individually for which they received a certificate and public recognition. This campaign too was extremely successful and our volunteers collectively raised over Rs. 1,00,000 for the Mission. We are extremely thankful to all our patrons who supported us in helping the underprivileged in times of difficulty.
                        </p>
                    </MDBCol>
                    <MDBCol lg="1"></MDBCol>
                    <MDBCol >
                      <MDBRow >
                          <MDBCol  end >
                            <br></br>
                            <img className="responsive" src={require("../images/ow1.png")} style={{width: "149px", height:"406px",borderRadius:"2%",verticalAlign:"middle"}} alt="Founder" ></img>
                          </MDBCol>
                          <MDBCol  end >
                          <br></br>
                            <img className="responsive" src={require("../images/ow2.png")} style={{width: "149px", height:"406px",borderRadius:"2%",verticalAlign:"middle"}} alt="Founder" ></img>
                          </MDBCol>
                          <MDBCol  end >
                          <br></br>
                            <img className="responsive" src={require("../images/ow3.png")} style={{marginRight:"5vw",width: "149px", height:"406px",borderRadius:"2%",verticalAlign:"middle"}} alt="Founder" ></img>
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


              