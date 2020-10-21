import React from "react";
import { MDBCol, MDBRow } from "mdbreact";
import Wave from './images/topwaveq.png';
import { MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText } from 'mdbreact';

class Outreach extends React.Component {
   
  render() { 
    return (
      <div style={{backgroundImage: `url(${Wave})`,backgroundRepeat: 'no-repeat',width:'100vw',backgroundSize:"100%",fontFamily:"Montserrat",paddingBottom:"3vh"}}>
        <div style={{paddingTop:"20vh",paddingLeft:"8vw",paddingRight :"8vw"}}>
            <MDBRow style={{paddingBottom:"0.5vh"}}>
              <MDBCol md="12"><div><h2 style={{fontFamily:"Montserrat", color:"#016B86", fontSize:"32px",float:"left"}}><strong>RECOGNITION</strong></h2></div><br/></MDBCol>
            </MDBRow>
            
            <MDBRow style={{paddingBottom:"1vh"}}>
              <MDBCol md="12"><div><hr style={{width:"55px", border:"2px solid #016B86", borderRadius:"2px",margin:"0px"}} /><br/></div></MDBCol>
            </MDBRow>

            <MDBRow style={{paddingBottom:"1vh"}}>
              <MDBCol md="12"><p style={{fontFamily:"Montserrat", color:"#6A6680", fontSize:"16px", textAlign:"left"}}>You can read more about our programs and events in the following blogs and news articles:</p></MDBCol>
            </MDBRow>

            <MDBRow>
              <MDBCol sm="8" md="3" style={{paddingBottom:"2vh"}}>
                <a href="https://medium.com/reap-benefit/lockdown-legends-when-outlawed-showed-us-the-power-of-a-youth-organisation-fd3bfca41182" target="_blank" rel="noopener noreferrer">
                  <MDBCard style={{ width: "100%",borderRadius: "5px 5px 5px 5px"}}>
                    <MDBCardImage className="img-fluid" src={require("./images/outreach3.png")} waves style={{borderRadius: "5px 5px 0px 0px" }}/>
                    <MDBCardBody style={{ border: "2px solid #70707099",borderRadius: "0px 0px 5px 5px" }}>
                      <MDBCardTitle style={{ fontWeight:"700",color:"#016B86",fontSize:"24px",textAlign: "left" }}>REAP BENEFIT</MDBCardTitle>
                      <MDBCardText style={{ fontWeight:"500",color:"#6A6680",fontSize:"16px",textAlign: "left" }}>
                        12 - 05 - 2020
                      </MDBCardText>
                    </MDBCardBody>
                  </MDBCard>
                </a>
              </MDBCol>

              <MDBCol sm="8" md="3" style={{paddingBottom:"2vh"}}>
                <a href="https://www.thechangemakertimes.com/post/meet-vibha-nadig-founder-of-outlawed-and-government-school-exchange-program" target="_blank" rel="noopener noreferrer">
                  <MDBCard style={{ width: "100%",borderRadius: "5px 5px 5px 5px" }}>
                    <MDBCardImage className="img-fluid" src={require("./images/outreach1.png")} waves style={{ width: "100%",borderRadius: "5px 5px 0px 0px" }}/>
                    <MDBCardBody style={{ border: "2px solid #70707099",borderRadius: "0px 0px 5px 5px" }}>
                      <MDBCardTitle style={{ fontWeight:"700",color:"#016B86",fontSize:"24px",textAlign: "left" }}>CHANGEMAKER TIMES</MDBCardTitle>
                      <MDBCardText style={{ fontWeight:"500",color:"#6A6680",fontSize:"16px",textAlign: "left" }}>
                        24 - 05 - 2020
                      </MDBCardText>
                    </MDBCardBody>
                  </MDBCard>
                </a>
              </MDBCol>

              <MDBCol sm="8" md="3" style={{paddingBottom:"2vh"}}>
                <a href="https://www.lawctopus.com/webinar-on-personal-data-protection-bill-2019-by-outlawed/" target="_blank" rel="noopener noreferrer">
                  <MDBCard style={{ width: "100%",borderRadius: "5px 5px 5px 5px" }}>
                    <MDBCardImage className="img-fluid" src={require("./images/outreach2.png")} waves style={{ width: "100%",borderRadius: "5px 5px 0px 0px" }}/>
                    <MDBCardBody style={{ border: "2px solid #70707099",borderRadius: "0px 0px 5px 5px" }}>
                      <MDBCardTitle style={{ fontWeight:"700",color:"#016B86",fontSize:"24px",textAlign: "left" }}>LAWCTOPUS</MDBCardTitle>
                      <MDBCardText style={{ fontWeight:"500",color:"#6A6680",fontSize:"16px",textAlign: "left" }}>
                        04 - 04 - 2020
                      </MDBCardText>
                    </MDBCardBody>
                  </MDBCard>
                </a>
              </MDBCol>

              <MDBCol sm="8" md="3" style={{paddingBottom:"2vh"}}>
                <a href="http://tribunenewsline.com/global-change-makers-summit-2020/" target="_blank" rel="noopener noreferrer">
                  <MDBCard style={{ width: "100%",borderRadius: "5px 5px 5px 5px" }}>
                    <MDBCardImage className="img-fluid" src={require("./images/outreach4.png")} waves style={{ width: "100%",borderRadius: "5px 5px 0px 0px" }}/>
                    <MDBCardBody style={{ border: "2px solid #70707099",borderRadius: "0px 0px 5px 5px" }}>
                      <MDBCardTitle style={{ fontWeight:"700",color:"#016B86",fontSize:"24px",textAlign: "left" }}>TRIBUNE NEWSLINE</MDBCardTitle>
                      <MDBCardText style={{ fontWeight:"500",color:"#6A6680",fontSize:"16px",textAlign: "left" }}>
                        24 - 09 - 2020
                      </MDBCardText>
                    </MDBCardBody>
                  </MDBCard>
                </a>
              </MDBCol>
            </MDBRow>

        </div>
      </div>
    );
  }
}

export default Outreach;