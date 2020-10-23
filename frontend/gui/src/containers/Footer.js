import React from "react";
import {
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBFooter,
  MDBBtn,
  MDBIcon,
} from "mdbreact";
import { Container } from "reactstrap";

const Footer = () => {
  return (
    <MDBFooter
      className="font-small pt-4 mt-5"
      style={{ background: "#d0eef6" }}
    >
      <MDBContainer fluid className="text-center text-md-left">
        <Container>
          <MDBRow>
            <MDBCol md="4">
              <MDBRow>
                <div>
                  <h3 className="title">
                    <strong>
                      {"Don't miss out,"}
                      <br/> 
                      subscribe to our newsletter today.
                    </strong>
                  </h3>
                </div>
                <div>
                  <MDBBtn social="email" size="md" color="white">
                    <MDBIcon
                      icon="envelope"
                      className="pr-1"
                      style={{ color: "#016b86" }}
                    />{" "}
                    <strong style={{ color: "#016b86" }}>Subscribe</strong>
                  </MDBBtn>
                  {/* style={{background:"white",color:"yellow"}} */}
                  <MDBBtn social="li" size="md" color="info">
                    <MDBIcon fab icon="linkedin" className="pr-1" />{" "}
                    <strong>Linkedin</strong>
                  </MDBBtn>
                  <MDBBtn social="in" size="md" color="info">
                    <MDBIcon fab icon="instagram" className="pr-1" />{" "}
                    <strong>Instagram</strong>
                  </MDBBtn>
                  <MDBBtn social="yt" size="md" color="info">
                    <MDBIcon fab icon="youtube" className="pr-1" />{" "}
                    <strong>Youtube</strong>
                  </MDBBtn>
                  <MDBBtn onClick="facebook.com" social="fb" size="md" color="info">
                    <MDBIcon fab icon="facebook-f" className="pr-1" />{" "}
                    <strong>Facebook</strong>
                  </MDBBtn>
                </div>
              </MDBRow>
            </MDBCol>
            <MDBCol md="8">
              <MDBRow>
                <MDBCol md="2">
                  <h5 className="title" style={{ color: "#049ABF" }}>
                    Home
                  </h5>
                  <dl>
                    <li className="list-unstyled">
                      <a href="#!" style={{ color: "#049ABF" }}>
                        Our Mission
                      </a>
                    </li>
                    <li className="list-unstyled">
                      <a href="#!" style={{ color: "#049ABF" }}>
                        Our Method
                      </a>
                    </li>
                    <li className="list-unstyled">
                      <a href="#!" style={{ color: "#049ABF" }}>
                        Our Team
                      </a>
                    </li>
                  </dl>
                </MDBCol>
                <MDBCol md="3">
                  <h5 className="title" style={{ color: "#049ABF" }}>
                    Our Work
                  </h5>
                  <dl>
                    <li className="list-unstyled">
                      <a href="#!" style={{ color: "#049ABF" }}>
                        Community Works
                      </a>
                    </li>
                    <li className="list-unstyled">
                      <a href="#!" style={{ color: "#049ABF" }}>
                       Legal awareness workshops
                      </a>
                    </li>
                    <li className="list-unstyled">
                      <a href="#!" style={{ color: "#049ABF" }}>
                        OutLoud Sessions
                      </a>
                    </li>
                  </dl>
                </MDBCol>
                <MDBCol md="4">
                  <h5 className="title" style={{ color: "#049ABF" }}>
                    Collaborations
                  </h5>
                  <dl>
                    <li className="list-unstyled">
                      <a href="#!" style={{ color: "#049ABF" }}>
                        Out Loud
                      </a>
                    </li>
                    <li className="list-unstyled">
                      <a href="#!" style={{ color: "#049ABF" }}>
                        Awareness Campaigns
                      </a>
                    </li>
                    <li className="list-unstyled">
                      <a href="#!" style={{ color: "#049ABF" }}>
                        Our Partners
                      </a>
                    </li>
                  </dl>
                </MDBCol>
                <MDBCol md="3">
                  <h5 className="title" style={{ color: "#049ABF" }}>
                    Outreach
                  </h5>
                  <dl>
                    <li className="list-unstyled">
                      <a href="#!" style={{ color: "#049ABF" }}>
                        Media
                      </a>
                    </li>
                    <li className="list-unstyled">
                      <a href="#!" style={{ color: "#049ABF" }}>
                        Recognition
                      </a>
                    </li>
                  </dl>
                </MDBCol>
              </MDBRow>
            </MDBCol>
          </MDBRow>
        </Container>
      </MDBContainer>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright:{" "}
          <a href="https://www.outlawed.com"> outlawed.com </a>
        </MDBContainer>
      </div>
    </MDBFooter>
  );
};

export default Footer;
