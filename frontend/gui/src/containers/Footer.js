import React from "react";
import {
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBFooter,
  MDBIcon,
} from "mdbreact";
import imgback from './images/foot.svg';

const Footer = () => {
  return (
    <>
    <MDBFooter
      className="font-small pt-4 mt-5"
      style={{ background: "#d0eef6",backgroundImage:`url('${imgback}')`,backgroundRepeat: "no-repeat", backgroundSize:"100vw auto",backgroundPosition:"center bottom", paddingBottom:"10vw",paddingLeft:"8vw",paddingRight:"8vw",fontFamily:"Montserrat" }}
    >
      <MDBContainer fluid className="text-center text-md-left" style={{ paddingBottom:"1vh" }}>
          <MDBRow>
            <MDBCol sm="12" md="6">
              <MDBRow>
                <MDBCol sm="12">
                  <div>
                      <strong style={{ fontSize:"30px",color:"#049ABF",fontWeight:"bold" }}>
                        Don't miss <span style={{ color:"#016B86" }}>out</span>,
                        <br /> follow us on social media.
                      </strong>
                  </div>
                </MDBCol>
                <div>
                    
                  <a href="https://www.linkedin.com/company/outlawed" target="_blank" rel="noopener noreferrer">
                    <button type="button" style={{backgroundColor:"#68B8CC",border: "none",color:"#FFFFFF",padding:"5px 5px",textAlign:"center",textDecoration:"none",display:"inline-block",fontSize:"12px",borderRadius:"4px",width:"100px",fontWeight:"550",margin:"10px 10px"}}>
                      <MDBIcon fab icon="linkedin" className="pr-1" />{" "}
                        Linkedin
                    </button>
                  </a>
                  <a href="https://instagram.com/outlawedindia?igshid=d061k4du9kyg" target="_blank" rel="noopener noreferrer">
                    <button type="button" style={{backgroundColor:"#68B8CC",border: "none",color:"#FFFFFF",padding:"5px 5px",textAlign:"center",textDecoration:"none",display:"inline-block",fontSize:"12px",borderRadius:"4px",width:"100px",fontWeight:"550",margin:"10px 10px"}}>
                      <MDBIcon fab icon="instagram" className="pr-1" />{" "}
                        Instagram
                    </button>
                  </a>
                  <a href="https://twitter.com/outlawedind?s=09" target="_blank" rel="noopener noreferrer">
                    <button type="button" style={{backgroundColor:"#68B8CC",border: "none",color:"#FFFFFF",padding:"5px 5px",textAlign:"center",textDecoration:"none",display:"inline-block",fontSize:"12px",borderRadius:"4px",width:"100px",fontWeight:"550",margin:"10px 10px"}}>
                      <MDBIcon fab icon="twitter" className="pr-1" />{" "}
                        Twitter
                    </button>
                  </a>
                  <a href="https://www.facebook.com/outlawedind/" target="_blank" rel="noopener noreferrer">
                    <button type="button" style={{backgroundColor:"#68B8CC",border: "none",color:"#FFFFFF",padding:"5px 5px",textAlign:"center",textDecoration:"none",display:"inline-block",fontSize:"12px",borderRadius:"4px",width:"100px",fontWeight:"550",margin:"10px 7px"}}>
                      <MDBIcon fab icon="facebook-f" className="pr-1" />{" "}
                        Facebook
                    </button>
                  </a>
                </div>
              </MDBRow>
            </MDBCol>
            <MDBCol md="6">
              <MDBRow>
                <MDBCol md="2">
                  <a href="/"><h5 className="title" style={{ color: "#049ABF",fontWeight:"600",fontSize:"16px" }}>
                    Home
                  </h5></a>
                  <dl style={{ fontSize:"12px" }}>
                    <li className="list-unstyled">
                      <a href="/" style={{ color: "#049ABF" }}>
                        Our Mission
                      </a>
                    </li>
                    <li className="list-unstyled">
                      <a href="/" style={{ color: "#049ABF" }}>
                        Our Method
                      </a>
                    </li>
                    <li className="list-unstyled">
                      <a href="/" style={{ color: "#049ABF" }}>
                        Our Team
                      </a>
                    </li>
                  </dl>
                </MDBCol>
                <MDBCol sm="12" md="4">
                  <h5 style={{ color: "#049ABF",fontWeight:"600" ,fontSize:"16px",width:"100%",textAlign:"left" }}>
                    Our Work
                  </h5>
                  <dl style={{ fontSize:"12px" }}>
                    <li className="list-unstyled">
                      <a href="/ourworks/community-work" style={{ color: "#049ABF" }}>
                        Community Works
                      </a>
                    </li>
                    <li className="list-unstyled">
                      <a href="/ourworks/school-program" style={{ color: "#049ABF" }}>
                        Legal Awareness Workshops
                      </a>
                    </li>
                    <li className="list-unstyled">
                      <a href="/ourworks/outlawed-sessions" style={{ color: "#049ABF" }}>
                        OutLoud Sessions
                      </a>
                    </li>
                  </dl>
                </MDBCol>
                <MDBCol md="3">
                  <a href="/collaborations">
                  <h5 className="title" style={{ color: "#049ABF",fontWeight:"600",fontSize:"16px" }}>
                    Collaborations
                  </h5>
                  </a>
                  <dl style={{ fontSize:"12px" }}>
                    <li className="list-unstyled">
                      <a href="/collaborations" style={{ color: "#049ABF" }}>
                        Out Loud
                      </a>
                    </li>
                    <li className="list-unstyled">
                      <a href="/collaborations" style={{ color: "#049ABF" }}>
                        Awareness Campaigns
                      </a>
                    </li>
                    <li className="list-unstyled">
                      <a href="/collaborations" style={{ color: "#049ABF" }}>
                        Reap Benefit
                      </a>
                    </li>
                    <li className="list-unstyled">
                      <a href="/collaborations" style={{ color: "#049ABF" }}>
                        Content Work
                      </a>
                    </li>
                    <li className="list-unstyled">
                      <a href="/collaborations" style={{ color: "#049ABF" }}>
                        Our Partners
                      </a>
                    </li>
                  </dl>
                </MDBCol>
                <MDBCol md="3">
                  <a href="/outreach">
                  <h5 className="title" style={{ color: "#049ABF",fontWeight:"600",fontSize:"16px" }}>
                    Outreach
                  </h5>
                  </a>
                  <dl style={{ fontSize:"12px" }}>
                    <li className="list-unstyled">
                      <a href="/outreach" style={{ color: "#049ABF" }}>
                        Media
                      </a>
                    </li>
                    <li className="list-unstyled">
                      <a href="/outreach" style={{ color: "#049ABF" }}>
                        Recognition
                      </a>
                    </li>
                  </dl>
                </MDBCol>
              </MDBRow>
            </MDBCol>
            <MDBCol>
            <div style={{color:"#049ABF",fontWeight:"bold"}}>Email us for enquiries{": "} < a href="mailto:contact@outlawedindia.com" style={{color:"#016B86"}}>contact@outlawedindia.com</a></div>
            </MDBCol>
          </MDBRow>
      </MDBContainer>
    </MDBFooter>
    </>
  );
};

export default Footer;