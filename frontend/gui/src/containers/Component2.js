import React from "react";
import { Spring } from "react-spring/renderprops";
import InfiniteCarousel from "react-leaf-carousel";

import {
  MDBJumbotron,
  MDBContainer,
  MDBRow,
  MDBCol,
} from "mdbreact";
import "./layout.css";
import { MDBCard, MDBCardBody } from "mdbreact";

function Component2() {
  return (
    <Spring
      from={{ opacity: 0 }}
      to={{ opacity: 1 }}
      config={{ delay: 5000, duration: 1000 }}
    >
      {(props) => (
        <div style={{ props }}>
          <div className="innermission" style={{ props }}>
            <MDBContainer
              className="mission"
              style={{ height: "10%", width: "40%" }}
            >
              <MDBRow>
                <MDBCol>
                  <MDBJumbotron
                    style={{
                      borderRadius: "20px",
                      padding: 0,
                      backgroundColor: "#016B86",
                    }}
                  >
                  <MDBRow>
                    <MDBCol className="rounded-100 py-1">
                      <h1 className="reduce"
                        style={{
                          fontFamily:"Montserrat",
                          fontSize:"42px",
                          textAlign:"center",
                          opacity:"1",
                          color:"#FAFAFA",
                          paddingTop:"3vh"
                        }}
                      >OUR MISSION</h1>
                    </MDBCol>
                  </MDBRow>
                  <MDBRow>
                    <MDBCol
                      className="rounded-100 py-1"
                      style={{ color: "white" }}
                    >
                      
                      <p
                        style={{ fontSize: "15px", fontFamily: "Montserrat",paddingLeft:"3vw",paddingRight:"3vw" }}
                        className="mx-2  mb-5 text-center"
                      >
                      OutLawed endeavours to bolster citizen engagement with the law through grassroots-level legal education. We aspire to make knowledge of the law accessible to individuals across socio-economic backgrounds. 
                      </p>
                    </MDBCol>
                    </MDBRow>
                  </MDBJumbotron>
                </MDBCol>
              </MDBRow>
            </MDBContainer>
          </div>
          <div style={{padding:"0vw 0px 0px 5vw"}}>
          <MDBCardBody className="my-5 px-5 pb-5 text-left">
            <MDBRow>
              <MDBCol lg="6">
              <h3
                  style={{
                    color: "#016B86",
                    fontFamily: "Montserrat",
                    fontSize: "36px",
                  }}
                  className="font-weight-bold mb-3 p-0"
                >
                  <strong>
                    <b>OUR METHOD</b>
                  </strong>
                </h3>
              </MDBCol>
            </MDBRow>
            <MDBRow>
              <MDBCol lg="6">
                
                <hr
                  style={{
                    width: "40px",
                    border: "2px solid #016B86",
                    margin: "0px",
                  }}
                />
                <br></br>
                <p
                  className="text-muted"
                  style={{
                    color: "#016B86",
                    fontFamily: "Montserrat",
                    fontSize: "16px",
                  }}
                >
                OutLawed believes in the power of student-to-student and peer learning. In furtherance of this, we engage college students who are studying law, policy, and humanities as our teachers. They are from diverse backgrounds, which allows us to conduct our sessions in regional languages as well. 
                We teach the most practical and hands-on aspects of the law that individuals are most likely to encounter on a daily basis.


                </p>
                
                <a href="/ourworks/law"  rel="noopener noreferrer">
                    <button type="button" style={{backgroundColor:"#68B8CC",border: "none",color:"#FFFFFF",padding:"5px 5px",textAlign:"center",textDecoration:"none",display:"inline-block",fontSize:"15px",borderRadius:"4px",width:"195px",height:"42px",fontWeight:"550",margin:"10px 10px"}}>
                        More About Us
                    </button>
                </a>
              </MDBCol>
              <MDBCol lg="1"></MDBCol>
              <MDBCol lg="4">
                  <img
                    src={require("./images/three.png")}
                    className="img-fluid fixed"
                    style={{width:"420px",height:"23vh"}}
                    alt=""
                  />
                 
              </MDBCol>
            </MDBRow>
            <br></br>
            <br></br>
            <br></br>
            <MDBRow>
              <MDBCol lg="7">
                <h3
                  style={{
                    color: "#016B86",
                    fontFamily: "Montserrat",
                    fontSize: "36px",
                  }}
                  className="font-weight-bold mb-3 p-0"
                >
                  <strong>OUR TEAM</strong>
                </h3>
                <hr
                  className="my-1"
                  style={{
                    border: "2px solid #016B86",
                    width: "40px",
                    margin: "0px",
                  }}
                />
              </MDBCol>
            </MDBRow>
            <MDBRow>
              <MDBCol lg="6">
                <br></br>
                <h3
                  className="font-weight-bold mb-3 p-0"
                  style={{
                    fontSize: "24px",
                    color: "#016B86",
                    fontFamily: "Montserrat",
                  }}
                >
                  <strong>Our Founder</strong>
                </h3>
                <p
                  className="text-muted"
                  style={{
                    color: "#016B86",
                    fontFamily: "Montserrat",
                    fontSize: "16px",
                  }}
                >
                Vibha Nadig is currently a law student, who believes in educational equity and wants to make legal education accessible to everyone. She founded OutLawed to educate school and college students on laws through simplified content that is understandable to persons across socio-economic and regional backgrounds. Apart from advocating the cause of legal literacy, she is on the Youth Board at Reap Benefit, loves debating, and has a new-found passion for baking.     
                </p>
              </MDBCol>
              <MDBCol md="1"></MDBCol>
              <MDBCol md="2" >
                <MDBCard
                  style={{
                    width: "177px",
                    height: "214px",
                    backgroundColor: "#CFEEF6",
                  }}
                  className="mb-2"
                >
                  <figure>
                    <img
                      src={require("./images/babies.png")}
                      style={{
                        width: "177px",
                        height: "214px",
                        verticalAlign: "middle",
                      }}
                      alt="Founder"
                    ></img>
                    <figcaption
                      style={{
                        textAlign: "center",
                        color: "#016B86",
                        fontFamily: "Montserrat",
                        fontSize: "20px",
                        fontWeight: "bold",
                      }}
                    >
                      VIBHA
                    </figcaption>
                  </figure>
                </MDBCard>
              </MDBCol>
            </MDBRow>
            <MDBRow>
              <MDBCol lg="6">
                <br></br>
                <br></br>
                <h3
                  className="font-weight-bold mb-3 p-0"
                  style={{
                    fontSize: "24px",
                    color: "#016B86",
                    fontFamily: "Montserrat",
                  }}
                >
                  <strong>The Core Team</strong>
                </h3>
                <p
                  className="text-muted"
                  style={{
                    color: "#016B86",
                    fontFamily: "Montserrat",
                    fontSize: "16px",
                  }}
                >
                OutLawed believes in the power of youth-driven change. Our teams, including our teachers, entirely consist of college-going students, from law and non-law backgrounds. The Content Team works on the modules that we teach, the Design Team handles our social media and designs the final modules that we use, and the Communication Team manages our interaction with schools, colleges, NGOs, and guest speakers.
                </p>
              </MDBCol>
            </MDBRow>
          </MDBCardBody>
          </div>
          <div
            style={{
              width: "99%",padding:"0vw 0px 0px 5vw"
            }}
          >
            <InfiniteCarousel
              breakpoints={[
                {
                  breakpoint: 300,
                  settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                  },
                },
                {
                  breakpoint: 405,
                  settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                  },
                },
                {
                  breakpoint: 726,
                  settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                  },
                },
                {
                  breakpoint: 1080,
                  settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                  },
                },
                {
                  breakpoint: 1600,
                  settings: {
                    slidesToShow: 5,
                    slidesToScroll: 5,
                  },
                },
              ]}
              dots={false}
              showSides={true}
              sidesOpacity={0.5}
              sideSize={0.1}
              slidesToScroll={6}
              slidesToShow={6}
              scrollOnDevice={true}
              autoCycle={false}
          
            >
              <div>
                <figure>
                  <img
                    style={{
                      width: "177px",
                      height: "214px",
                      borderRadius: "10%",
                    }}
                    alt=""
                    src={require("./images/1.png")}
                  />
                  <figcaption
                    style={{
                      textAlign: "center",
                      color: "#016B86",
                      fontFamily: "Montserrat",
                      fontWeight: "bold",
                      fontSize: "20px",
                    }}
                  >
                    VIDISHA
                  </figcaption>
                </figure>
              </div>
              <div>
                <figure>
                  <img
                    style={{
                      width: "177px",
                      height: "214px",
                      borderRadius: "10%",
                    }}
                    alt=""
                    src={require("./images/2.png")}
                  />
                  <figcaption
                    style={{
                      textAlign: "center",
                      color: "#016B86",
                      fontFamily: "Montserrat",
                      fontSize: "20px",
                      fontWeight: "bold",
                    }}
                  >
                    JWALIKA
                  </figcaption>
                </figure>
              </div>
              <div>
                <figure>
                  <img
                    style={{
                      width: "177px",
                      height: "214px",
                      borderRadius: "10%",
                    }}
                    alt=""
                    src={require("./images/3.png")}
                  />
                  <figcaption
                    style={{
                      textAlign: "center",
                      color: "#016B86",
                      fontFamily: "Montserrat",
                      fontSize: "20px",
                      fontWeight: "bold",
                    }}
                  >
                    SRUSHTI
                  </figcaption>
                </figure>
              </div>
              <div>
                <figure>
                  <img
                    style={{
                      width: "177px",
                      height: "214px",
                      borderRadius: "10%",
                    }}
                    alt=""
                    src={require("./images/4.png")}
                  />
                  <figcaption
                    style={{
                      textAlign: "center",
                      color: "#016B86",
                      fontFamily: "Montserrat",
                      fontSize: "20px",
                      fontWeight: "bold",
                    }}
                  >
                    SHIVANGI
                  </figcaption>
                </figure>
              </div>
              <div>
                <figure>
                  <img
                    style={{
                      width: "177px",
                      height: "214px",
                      borderRadius: "10%",
                    }}
                    alt=""
                    src={require("./images/5.png")}
                  />
                  <figcaption
                    style={{
                      textAlign: "center",
                      color: "#016B86",
                      fontFamily: "Montserrat",
                      fontSize: "20px",
                      fontWeight: "bold",
                    }}
                  >
                    GHANVI
                  </figcaption>
                </figure>
              </div>
              <div>
                <figure>
                  <img
                    style={{
                      width: "177px",
                      height: "214px",
                      borderRadius: "10%",
                    }}
                    alt=""
                    src={require("./images/6.png")}
                  />
                  <figcaption
                    style={{
                      textAlign: "center",
                      color: "#016B86",
                      fontFamily: "Montserrat",
                      fontSize: "20px",
                      fontWeight: "bold",
                    }}
                  >
                    ASHWIN
                  </figcaption>
                </figure>
              </div>
              <div>
                <figure>
                  <img
                    style={{
                      width: "177px",
                      height: "214px",
                      borderRadius: "10%",
                    }}
                    alt=""
                    src={require("./images/7.png")}
                  />
                  <figcaption
                    style={{
                      textAlign: "center",
                      color: "#016B86",
                      fontFamily: "Montserrat",
                      fontSize: "20px",
                      fontWeight: "bold",
                    }}
                  >
                    SANAT
                  </figcaption>
                </figure>
              </div>
              <div>
                <figure>
                  <img
                    style={{
                      width: "177px",
                      height: "214px",
                      borderRadius: "10%",
                    }}
                    alt=""
                    src={require("./images/8.png")}
                  />
                  <figcaption
                    style={{
                      textAlign: "center",
                      color: "#016B86",
                      fontFamily: "Montserrat",
                      fontSize: "20px",
                      fontWeight: "bold",
                    }}
                  >
                    ALVIRA
                  </figcaption>
                </figure>
              </div>
              <div>
                <figure>
                  <img
                    style={{
                      width: "177px",
                      height: "214px",
                      borderRadius: "10%",
                    }}
                    alt=""
                    src={require("./images/9.png")}
                  />
                  <figcaption
                    style={{
                      textAlign: "center",
                      color: "#016B86",
                      fontFamily: "Montserrat",
                      fontSize: "20px",
                      fontWeight: "bold",
                    }}
                  >
                    APOORVA
                  </figcaption>
                </figure>
              </div>
              <div>
                <figure>
                  <img
                    style={{
                      width: "177px",
                      height: "214px",
                      borderRadius: "10%",
                    }}
                    alt=""
                    src={require("./images/10.png")}
                  />
                  <figcaption
                    style={{
                      textAlign: "center",
                      color: "#016B86",
                      fontFamily: "Montserrat",
                      fontSize: "20px",
                      fontWeight: "bold",
                    }}
                  >
                    SHUBHANGI
                  </figcaption>
                </figure>
              </div>
              <div>
                <figure>
                  <img
                    style={{
                      width: "177px",
                      height: "214px",
                      borderRadius: "10%",
                    }}
                    alt=""
                    src={require("./images/11.png")}
                  />
                  <figcaption
                    style={{
                      textAlign: "center",
                      color: "#016B86",
                      fontFamily: "Montserrat",
                      fontSize: "20px",
                      fontWeight: "bold",
                    }}
                  >
                    BHAVYA
                  </figcaption>
                </figure>
              </div>
              <div>
                <figure>
                  <img
                    style={{
                      width: "177px",
                      height: "214px",
                      borderRadius: "10%",
                    }}
                    alt=""
                    src={require("./images/12.png")}
                  />
                  <figcaption
                    style={{
                      textAlign: "center",
                      color: "#016B86",
                      fontFamily: "Montserrat",
                      fontSize: "20px",
                      fontWeight: "bold",
                    }}
                  >
                    KISHAN
                  </figcaption>
                </figure>
              </div>
              <div>
                <figure>
                  <img
                    style={{
                      width: "177px",
                      height: "214px",
                      borderRadius: "10%",
                    }}
                    alt=""
                    src={require("./images/13.png")}
                  />
                  <figcaption
                    style={{
                      textAlign: "center",
                      color: "#016B86",
                      fontFamily: "Montserrat",
                      fontSize: "20px",
                      fontWeight: "bold",
                    }}
                  >
                    ANAGHA
                  </figcaption>
                </figure>
              </div>
              <div>
                <figure>
                  <img
                    style={{
                      width: "177px",
                      height: "214px",
                      borderRadius: "10%",
                    }}
                    alt=""
                    src={require("./images/14.png")}
                  />
                  <figcaption
                    style={{
                      textAlign: "center",
                      color: "#016B86",
                      fontFamily: "Montserrat",
                      fontSize: "20px",
                      fontWeight: "bold",
                    }}
                  >
                    NEHA
                  </figcaption>
                </figure>
              </div>
              <div>
                <figure>
                  <img
                    style={{
                      width: "177px",
                      height: "214px",
                      borderRadius: "10%",
                    }}
                    alt=""
                    src={require("./images/15.png")}
                  />
                  <figcaption
                    style={{
                      textAlign: "center",
                      color: "#016B86",
                      fontFamily: "Montserrat",
                      fontSize: "20px",
                      fontWeight: "bold",
                    }}
                  >
                    KOPAL
                  </figcaption>
                </figure>
              </div>
              <div>
                <figure>
                  <img
                    style={{
                      width: "177px",
                      height: "214px",
                      borderRadius: "10%",
                    }}
                    alt=""
                    src={require("./images/18.png")}
                  />
                  <figcaption
                    style={{
                      textAlign: "center",
                      color: "#016B86",
                      fontFamily: "Montserrat",
                      fontSize: "20px",
                      fontWeight: "bold",
                    }}
                  >
                    MEGHA
                  </figcaption>
                </figure>
              </div>
            </InfiniteCarousel>
          </div>
        </div>
      )}
    </Spring>
  );
}

export default Component2;