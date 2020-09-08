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
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris consectetur elementum ligula eu sagittis. Donec euismod lectus ac turpis sollicitudin, at placerat nibh euismod. Aenean ut ultricies magna. Fusce congue, lorem ut sollicitudin rutrum, nulla neque facilisis tortor, et tempor augue magna at eros. Aenean et sapien dolor. Nunc venenatis justo vitae felis suscipit, volutpat venenatis libero interdum.
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
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris consectetur elementum ligula eu  Fusce congue, lorem ut sollicitudin rutrum, nulla neque facilisis tortor, et tempor augue magna at eros. Aenean et sapien --dolor. Nunc venenatis justo vitae felis suscipit, volutpat venenatis libero interdum. Maecenas pellentesque tellus et mollis ullamcorper. Etiam quis ullamcorper lorem. Aenean id hendrerit dolor, id tempus nulla. Nulla ultrices sit amet massa quis facilisis. Integer ultricies sdfdhfib sjbkaofoa ropwpeorpqp.
                        </p>

                        <br></br>
                        <h3 className="font-weight-bold mb-3 p-0" style={{fontSize:"24px",color:"#016B86",fontFamily:"Montserrat"}}>
                        <strong>Mission Aahan Vaahan</strong>
                        </h3>
                        <p className="text-muted" style={{color:"#016B86",fontFamily:"Montserrat",fontSize:"16px"}}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris consectetur elementum ligula eu sagittis. Donec euismod lectus ac turpis sollicitudin, at placerat nibh euismod. Aenean ut ultricies ---magna. Fusce congue, lorem ut sollicitudin rutrum, nulla neque facilisis tortor, et tempor augue magna at eros. Aenean et sapien --dolor. Nunc venenatis justo vitae felis suscipit, volutpat venenatis libero interdum.
                        </p>
                    </MDBCol>
                    <MDBCol lg="1"></MDBCol>
                    <MDBCol  >
                      <MDBRow>
                          <MDBCol style={{margin:"0px 0px 0px 0px"}}>
                            <br></br>
                            <img  src={require("../images/ow1.png")} style={{width: "149px", height:"406px",borderRadius:"2%",verticalAlign:"middle"}} alt="Founder" ></img>
                          </MDBCol>
                          <MDBCol style={{margin:"0px 00px 0px 0px"}}>
                          <br></br>
                            <img  src={require("../images/ow2.png")} style={{width: "149px", height:"406px",borderRadius:"2%",verticalAlign:"middle"}} alt="Founder" ></img>
                          </MDBCol>
                          <MDBCol style={{margin:"0px 00px 0px 0px"}}>
                          <br></br>
                            <img  src={require("../images/ow3.png")} style={{width: "149px", height:"406px",borderRadius:"2%",verticalAlign:"middle"}} alt="Founder" ></img>
                          </MDBCol>
                          <MDBCol sm="3"></MDBCol>
                          <MDBCol sm="3"></MDBCol>
                          <MDBCol sm="3"></MDBCol>
                          <MDBCol sm="3"></MDBCol>
                         
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


              