
import React from "react";
import InfiniteCarousel from 'react-leaf-carousel';
import { MDBJumbotron, MDBBtn, MDBContainer, MDBRow, MDBCol, MDBCardTitle, MDBIcon } from "mdbreact";
import {MDBCard, MDBCardBody, MDBMask, MDBView} from "mdbreact";
import { MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBCardImage, MDBCardText} from "mdbreact";
class CommunityWork extends React.Component {
  render() {
    return (
      <>
        <MDBCardBody className="my-5 px-5 pb-5 text-left">
          <MDBRow>
            <MDBCol lg="7">
              <h3 style={{color:"#016B86",fontFamily:"Montserrat",fontSize:"36px"}} className="font-weight-bold mb-3 p-0">
                <strong><b>COMMUNITY WORK</b></strong>
              </h3>
              <hr style={{width:"40px", border:"2px solid #016B86", margin:"0px"}} />
              <br></br>
              <p className="text-muted" style={{color:"#016B86",fontFamily:"Montserrat",fontSize:"16px"}}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
              <MDBBtn
                style={{backgroundColor:"#68B8CC",color:"white",fontFamily:"Montserrat"}}
                size="md"
                className="mb-lg-0 mb-4 waves-light"
              >
                More About Us
              </MDBBtn>
            </MDBCol>
            <MDBCol md="5">
              <MDBView className="responsive mb-lg-4 mb-4" hover waves>
                <img src="/three.png" className="img-fluid" alt="" />
              <a href="#!">
                  <MDBMask overlay="white-slight" />
                </a>
              </MDBView>
            </MDBCol>
          </MDBRow>
          <br></br><br></br><br></br>
          <MDBRow>
            <MDBCol lg="7">
            <h3 style={{color:"#016B86",fontFamily:"Montserrat", fontSize:"36px"}} className="font-weight-bold mb-3 p-0">
                <strong>OUR TEAM</strong>
              </h3>
              <hr className="my-1" style={{ border:"2px solid #016B86", width:"40px", margin:"0px"}} />
            </MDBCol>
          </MDBRow>
          <MDBRow>
            <MDBCol lg='7'>
              <br></br>
              <h3 className="font-weight-bold mb-3 p-0" style={{fontSize:"24px",color:"#016B86",fontFamily:"Montserrat"}}>
                <strong>OUR FOUNDER</strong>
              </h3>
              <p className="text-muted" style={{color:"#016B86",fontFamily:"Montserrat",fontSize:"16px"}}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris consectetur elementum ligula eu sagittis. Donec euismod lectus ac turpis sollicitudin, at placerat nibh euismod. Aenean ut ultricies ---magna. Fusce congue, lorem ut sollicitudin rutrum, nulla neque facilisis tortor, et tempor augue magna at eros. Aenean et sapien --dolor. Nunc venenatis justo vitae felis suscipit, volutpat venenatis libero interdum. Maecenas pellentesque tellus et mollis ullamcorper. Etiam quis ullamcorper lorem. Aenean id hendrerit dolor, id tempus nulla. Nulla ultrices sit amet massa quis facilisis. Integer ultricies sdfdhfib sjbkaofoa ropwpeorpqp.
              </p>
              
            </MDBCol>
            <MDBCol md="2">
                 <MDBCard style={{width:"177px",height:"214px",backgroundColor:"#CFEEF6"}} className="mb-2">
                    {/* <MDBCardImage   style={{margin:"auto"}} className="img-fluid" src="/babies.png" /> */}
                    <figure>
                        <img  src="/babies.png" style={{width: "177px", height:"214px",verticalAlign:"middle"}} alt="Founder" ></img>
                        <figcaption style={{textAlign:"center",color:"#016B86",fontFamily:"Montserrat",fontSize:"20px",fontWeight:"bold"}}>VIBHA</figcaption>
                    </figure>
                   
                  </MDBCard>
            </MDBCol>
          </MDBRow>
          <MDBRow>
            <MDBCol lg="7">
            <br></br>
              <h3 className="font-weight-bold mb-3 p-0" style={{fontSize:"24px",color:"#016B86",fontFamily:"Montserrat"}}>
                <strong>The Core Team</strong>
              </h3>
              <p className="text-muted" style={{color:"#016B86",fontFamily:"Montserrat",fontSize:"16px"}}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris consectetur elementum ligula eu sagittis. Donec euismod lectus ac turpis sollicitudin, at placerat nibh euismod. Aenean ut ultricies ---magna. Fusce congue, lorem ut sollicitudin rutrum, nulla neque facilisis tortor, et tempor augue magna at eros. Aenean et sapien --dolor. Nunc venenatis justo vitae felis suscipit, volutpat venenatis libero interdum. Maecenas pellentesque tellus et mollis ullamcorper. Etiam quis ullamcorper lorem. Aenean id hendrerit dolor, id tempus nulla. Nulla ultrices sit amet massa quis facilisis. Integer ultricies sdfdhfib sjbkaofoa ropwpeorpqp.
              </p>
            </MDBCol>
          </MDBRow>
        </MDBCardBody>
        <InfiniteCarousel
      breakpoints={[
        {
          breakpoint: 300,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
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
    >
      <div>
        <figure>
          <img
          style={{width:"177px",height:"214px",borderRadius:"10%"}}
            alt=""
            src="/1.png"
          />
          <figcaption style={{textAlign:"center",color:"#016B86",fontFamily:"Montserrat",fontWeight:"bold",fontSize:"20px"}}>VIDISHA</figcaption>
        </figure>
        
      </div>
      <div>
        <figure>
          <img
          style={{width:"177px",height:"214px",borderRadius:"10%"}}
            alt=""
            src="/2.png"
          />
          <figcaption style={{textAlign:"center",color:"#016B86",fontFamily:"Montserrat",fontSize:"20px",fontWeight:"bold"}}>JWALIKA</figcaption>
        </figure>
        
      </div>
      <div>
        <figure>
          <img
          style={{width:"177px",height:"214px",borderRadius:"10%"}}
            alt=""
            src="/3.png"
          />
          <figcaption style={{textAlign:"center",color:"#016B86",fontFamily:"Montserrat",fontSize:"20px",fontWeight:"bold"}}>SRUSHTI</figcaption>
        </figure>
        
      </div>
      <div>
        <figure>
          <img
          style={{width:"177px",height:"214px",borderRadius:"10%"}}
            alt=""
            src="/4.png"
          />
          <figcaption style={{textAlign:"center",color:"#016B86",fontFamily:"Montserrat",fontSize:"20px",fontWeight:"bold"}}>SHIVANGI</figcaption>
        </figure>
        
      </div>
      <div>
        <figure>
          <img
          style={{width:"177px",height:"214px",borderRadius:"10%"}}
            alt=""
            src="/5.png"
          />
          <figcaption style={{textAlign:"center",color:"#016B86",fontFamily:"Montserrat",fontSize:"20px",fontWeight:"bold"}}>GHANVI</figcaption>
        </figure>
        
      </div>
      <div>
        <figure>
          <img
          style={{width:"177px",height:"214px",borderRadius:"10%"}}
            alt=""
            src="/6.png"
          />
          <figcaption style={{textAlign:"center",color:"#016B86",fontFamily:"Montserrat",fontSize:"20px",fontWeight:"bold"}}>ASHWIN</figcaption>
        </figure>
        
      </div>
      <div>
        <figure>
          <img
          style={{width:"177px",height:"214px",borderRadius:"10%"}}
            alt=""
            src="/7.png"
          />
          <figcaption style={{textAlign:"center",color:"#016B86",fontFamily:"Montserrat",fontSize:"20px",fontWeight:"bold"}}>SANAT</figcaption>
        </figure>
        
      </div>
      <div>
        <figure>
          <img
          style={{width:"177px",height:"214px",borderRadius:"10%"}}
            alt=""
            src="/8.png"
          />
          <figcaption style={{textAlign:"center",color:"#016B86",fontFamily:"Montserrat",fontSize:"20px",fontWeight:"bold"}}>ALVIRA</figcaption>
        </figure>
        
      </div>
      <div>
        <figure>
          <img
          style={{width:"177px",height:"214px",borderRadius:"10%"}}
            alt=""
            src="/9.png"
          />
          <figcaption style={{textAlign:"center",color:"#016B86",fontFamily:"Montserrat",fontSize:"20px",fontWeight:"bold"}}>APOORVA</figcaption>
        </figure>
        
      </div>
      <div>
        <figure>
          <img
          style={{width:"177px",height:"214px",borderRadius:"10%"}}
            alt=""
            src="/10.png"
          />
          <figcaption style={{textAlign:"center",color:"#016B86",fontFamily:"Montserrat",fontSize:"20px",fontWeight:"bold"}}>SHUBHANGI</figcaption>
        </figure>
        
      </div>
      <div>
        <figure>
          <img
          style={{width:"177px",height:"214px",borderRadius:"10%"}}
            alt=""
            src="/11.png"
          />
          <figcaption style={{textAlign:"center",color:"#016B86",fontFamily:"Montserrat",fontSize:"20px",fontWeight:"bold"}}>BHAVYA</figcaption>
        </figure>
        
      </div>
      <div>
        <figure>
          <img
          style={{width:"177px",height:"214px",borderRadius:"10%"}}
            alt=""
            src="/12.png"
          />
          <figcaption style={{textAlign:"center",color:"#016B86",fontFamily:"Montserrat",fontSize:"20px",fontWeight:"bold"}}>KISHAN</figcaption>
        </figure>
        
      </div>
      <div>
        <figure>
          <img
          style={{width:"177px",height:"214px",borderRadius:"10%"}}
            alt=""
            src="/13.png"
          />
          <figcaption style={{textAlign:"center",color:"#016B86",fontFamily:"Montserrat",fontSize:"20px",fontWeight:"bold"}}>ANAGHA</figcaption>
        </figure>
        
      </div>
      <div>
        <figure>
          <img
          style={{width:"177px",height:"214px",borderRadius:"10%"}}
            alt=""
            src="/14.png"
          />
          <figcaption style={{textAlign:"center",color:"#016B86",fontFamily:"Montserrat",fontSize:"20px",fontWeight:"bold"}}>NEHA</figcaption>
        </figure>
        
      </div>
      <div>
        <figure>
          <img
          style={{width:"177px",height:"214px",borderRadius:"10%"}}
            alt=""
            src="/15.png"
          />
          <figcaption style={{textAlign:"center",color:"#016B86",fontFamily:"Montserrat",fontSize:"20px",fontWeight:"bold"}}>KOPAL</figcaption>
        </figure>
        
      </div>
      {/* <div>
        <figure>
          <img
          style={{width:"177px",height:"214px",borderRadius:"15%"}}
            alt=""
            src="/16.png"
          />
          <figcaption style={{textAlign:"center",color:"#016B86",fontFamily:"Montserrat",fontSize:"20px",fontWeight:"bold"}}>VIDISHA</figcaption>
        </figure>
        
      </div>
      <div>
        <figure>
          <img
          style={{width:"177px",height:"214px",borderRadius:"15%"}}
            alt=""
            src="/17.png"
          />
          <figcaption style={{textAlign:"center",color:"#016B86",fontFamily:"Montserrat",fontSize:"20px",fontWeight:"bold"}}>VIDISHA</figcaption>
        </figure>
        
      </div> */}
      <div>
        <figure>
          <img
          style={{width:"177px",height:"214px",borderRadius:"10%"}}
            alt=""
            src="/18.png"
          />
          <figcaption style={{textAlign:"center",color:"#016B86",fontFamily:"Montserrat",fontSize:"20px",fontWeight:"bold"}}>MEGHA</figcaption>
        </figure>
        
      </div>
     
    </InfiniteCarousel>
      </>
    );
  }
}

export default CommunityWork;