import React from "react";
import { MDBJumbotron, MDBBtn, MDBContainer, MDBRow, MDBCol, MDBCardTitle, MDBIcon } from "mdbreact";
import {MDBCard, MDBCardBody, MDBMask, MDBView} from "mdbreact";
import { MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBCardImage, MDBCardText} from "mdbreact";
import Component1 from './Component1';
import {Container} from 'reactstrap';
const Home = () => {
  let colour='red';
  const profileCard = {
    top: "1528px",
    left: "1002px",
    width: "177px",
    height: "214px",
    backgroundColor: "#CFEEF6",
    boxShadow: "0px 20px 40px #00000014",
    borderRadius: "5px"
  }
  return (
    <>
    <Component1  style={{marginLeft:'-1000px',width:'100vw'}}/>
    {/* style={{marginLeft:"100px",marginRight:"100px",padding: "0 0",background:'white'}} */}
    <Container style={{padding:"10px 0 0 0"}}>
    <MDBContainer  style={{height:'10%' ,width:'100%',borderRadius: '25px'}}>
      <MDBRow >
        <MDBCol lg="2"></MDBCol>
        <MDBCol lg="8" >
          <MDBJumbotron style={{ padding: '0px' ,backgroundColor: "#016B86",borderRadius: '25px'}}>
              <MDBCol className= "rounded-100 py-1" style={{color:"white"}}>
                <MDBCardTitle className="h1-responsive pt-3 m-5 font-bold"><h1 style={{color:"white"}}>OUR MISSION</h1></MDBCardTitle>
                <p className="mx-5 responsive mb-5 text-center">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat fugiat, laboriosam, voluptatem,
                  optio vero odio nam sit officia accusamus minus error nisi architecto nulla ipsum dignissimos. Odit sed qui, dolorum!
                </p>
              </MDBCol>
          </MDBJumbotron>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
      <MDBCardBody className="my-5 px-5 pb-5 text-left">
        <MDBRow>
          <MDBCol lg="7">
            <h3 className="font-weight-bold mb-3 p-0 text-info">
              <strong>OUR METHOD</strong>
            </h3>
            <hr style={{borderWidth:"4px", width:"40px", color:colour, margin:"0px"}} />
            <p className="text-muted">
              At vero eos et accusamus et iusto odio dignissimos ducimus qui
              blanditiis praesentium voluptatum deleniti atque corrupti quos
              dolores et quas molestias excepturi sint occaecati cupiditate
              non provident.
            </p>
            <MDBBtn
              style={{backgroundColor:"#68B8CC",color:"white"}}
              size="md"
              className="mb-lg-0 mb-4 waves-light"
            >
              More About Us
            </MDBBtn>
          </MDBCol>
          <MDBCol md="5">
            <MDBView className="responsive mb-lg-4 mb-4" hover waves>
              <img src={require("./images/three.png")} className="img-fluid" alt="" />
            <a href="#!">
                <MDBMask overlay="white-slight" />
              </a>
            </MDBView>
          </MDBCol>
        </MDBRow>
        <br></br><br></br><br></br>
        <MDBRow>
          <MDBCol lg="7">
          <h3 className="font-weight-bold mb-3 p-0 text-info">
              <strong>OUR TEAM</strong>
            </h3>
            <hr className="my-1" style={{borderWidth:"4px", width:"40px", color:colour, margin:"0px"}} />
          </MDBCol>
        </MDBRow>
        <MDBRow>
          <MDBCol lg='7'>
            <br></br>
            <h3 className="font-weight-normal mb-3 p-0 text-info" style={{fontSize:"18px"}}>
              <strong>OUR FOUNDER</strong>
            </h3>
            <p className="text-muted">
              At vero eos et accusamus et iusto odio dignissimos ducimus qui
              blanditiis praesentium voluptatum deleniti atque corrupti quos
              dolores et quas molestias excepturi sint occaecati cupiditate
              non provident.
            </p>
            
          </MDBCol>
          <MDBCol md="1"></MDBCol>
          <MDBCol md="3" style={{float:'right'}}>
                <div class="d-flex justify-content-center">
                <MDBCard style={{backgroundColor:"#CFEEF6",float:'right' }} className="mb-2">
                    <MDBCardImage className="img-fluid" src={require("./images/babies.png")}  />
                </MDBCard>
                </div>
          </MDBCol>
        </MDBRow>
        <MDBRow>
          <MDBCol lg="7">
          <br></br>
            <h3 className="font-weight-bold mb-3 p-0 text-info" style={{fontSize:"18px"}}>
              <strong>The Core Team</strong>
            </h3>
            <p className="text-muted">
              At vero eos et accusamus et iusto odio dignissimos ducimus qui
              blanditiis praesentium voluptatum deleniti atque corrupti quos
              dolores et quas molestias excepturi sint occaecati cupiditate
              non provident.
            </p>
          </MDBCol>
        </MDBRow>
      </MDBCardBody>
      <MDBCarousel activeItem={1} length={3} slide={true} showControls={true} showIndicators={false} testimonial={true} multiItem>
        <MDBCarouselInner>
         
            <MDBCarouselItem itemId="1">
            <MDBRow>
              <MDBCol md="2">
                <MDBCard style={{backgroundColor:"#CFEEF6"}} className="mb-2">
                  <MDBCardImage className="img-fluid" src={require('./images/1.png')} />
                </MDBCard>
              </MDBCol>
              <MDBCol md="2">
                <MDBCard style={{backgroundColor:"#CFEEF6"}} className="mb-2">
                  <MDBCardImage className="img-fluid" src={require("./images/2.png")} />
                </MDBCard>
              </MDBCol>
              <MDBCol md="2">
                <MDBCard style={{backgroundColor:"#CFEEF6"}} className="mb-2">
                  <MDBCardImage className="img-fluid" src={require("./images/3.png")} />
                </MDBCard>
              </MDBCol>
              <MDBCol md="2">
                <MDBCard style={{backgroundColor:"#CFEEF6"}} className="mb-2">
                  <MDBCardImage className="img-fluid"  src={require("./images/4.png")} />
                </MDBCard>
              </MDBCol>
              <MDBCol md="2">
                <MDBCard style={{backgroundColor:"#CFEEF6"}} className="mb-2">
                  <MDBCardImage className="img-fluid"  src={require("./images/5.png")} />
                </MDBCard>
              </MDBCol>
              <MDBCol md="2">
                <MDBCard style={{backgroundColor:"#CFEEF6"}} className="mb-2">
                  <MDBCardImage className="img-fluid"  src={require("./images/6.png")} />
                </MDBCard>
              </MDBCol>
              </MDBRow>
            </MDBCarouselItem>
            <MDBCarouselItem itemId="2">
            <MDBRow>
              <MDBCol md="2">
                <MDBCard style={{backgroundColor:"#CFEEF6"}} className="mb-2">
                  <MDBCardImage className="img-fluid" src={require("./images/7.png")} />
                </MDBCard>
              </MDBCol>
              <MDBCol md="2">
                <MDBCard style={{backgroundColor:"#CFEEF6"}} className="mb-2">
                  <MDBCardImage className="img-fluid" src={require("./images/8.png")} />
                </MDBCard>
              </MDBCol>
              <MDBCol md="2">
                <MDBCard style={{backgroundColor:"#CFEEF6"}} className="mb-2">
                  <MDBCardImage className="img-fluid" src={require("./images/9.png")} />
                </MDBCard>
              </MDBCol>
              <MDBCol md="2">
                <MDBCard style={{backgroundColor:"#CFEEF6"}} className="mb-2">
                  <MDBCardImage className="img-fluid" src={require("./images/10.png")} />
                </MDBCard>
              </MDBCol>
              <MDBCol md="2">
                <MDBCard style={{backgroundColor:"#CFEEF6"}} className="mb-2">
                  <MDBCardImage className="img-fluid" src={require("./images/11.png")} />
                </MDBCard>
              </MDBCol>
              <MDBCol md="2">
                <MDBCard style={{backgroundColor:"#CFEEF6"}} className="mb-2">
                  <MDBCardImage className="img-fluid" src={require("./images/12.png")} />
                </MDBCard>
              </MDBCol>
              </MDBRow>
            </MDBCarouselItem>
            <MDBCarouselItem itemId="3">
            <MDBRow>
              <MDBCol md="2">
                <MDBCard style={{backgroundColor:"#CFEEF6"}} className="mb-2">
                  <MDBCardImage className="img-fluid" src={require("./images/13.png")} />
                </MDBCard>
              </MDBCol>
              <MDBCol md="2">
                <MDBCard style={{backgroundColor:"#CFEEF6"}} className="mb-2">
                  <MDBCardImage className="img-fluid" src={require("./images/14.png")} />
                </MDBCard>
              </MDBCol>
              <MDBCol md="2">
                <MDBCard style={{backgroundColor:"#CFEEF6"}} className="mb-2">
                  <MDBCardImage className="img-fluid" src={require("./images/15.png")} />
                </MDBCard>
              </MDBCol>
              <MDBCol md="2">
                <MDBCard style={{backgroundColor:"#CFEEF6"}} className="mb-2">
                  <MDBCardImage className="img-fluid" src={require("./images/16.png")} />
                </MDBCard>
              </MDBCol>
              <MDBCol md="2">
                <MDBCard style={{backgroundColor:"#CFEEF6"}} className="mb-2">
                  <MDBCardImage className="img-fluid" src={require("./images/17.png")} />
                </MDBCard>
              </MDBCol>
              <MDBCol md="2">
                <MDBCard style={{backgroundColor:"#CFEEF6"}} className="mb-2">
                  <MDBCardImage className="img-fluid" src={require("./images/18.png")} />
                </MDBCard>
              </MDBCol>
              </MDBRow>
            </MDBCarouselItem>
        </MDBCarouselInner>
      </MDBCarousel>
      </Container>
    </>
  )
}

export default Home;
