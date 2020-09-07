
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
                    <MDBRow style={{width:"95%"}}>
                    <MDBCol lg="12">
                        <h3 style={{color:"#016B86",fontFamily:"Montserrat",fontSize:"36px"}} className="font-weight-bold mb-3 p-0">
                        <strong><b>COMMUNITY WORK</b></strong>
                        </h3>
                        <hr style={{width:"40px", border:"2px solid #016B86", margin:"0px"}} />
                        <br></br>
                        <p className="text-muted" style={{color:"#016B86",fontFamily:"Montserrat",fontSize:"16px"}}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris consectetur elementum ligula eu sagittis. Donec euismod lectus ac turpis sollicitudin, at placerat nibh euismod. Aenean ut ultricies magna. Fusce congue, lorem ut sollicitudin rutrum, nulla neque facilisis tortor, et tempor augue magna at eros. Aenean et sapien dolor. Nunc venenatis justo vitae felis suscipit, volutpat venenatis libero interdum.
                        </p>
                    </MDBCol>
                    </MDBRow>
                    <br></br><br></br><br></br>
                    <MDBRow>
                    <MDBCol lg="7">
                    <h3 style={{color:"#016B86",fontFamily:"Montserrat", fontSize:"25px"}} className="font-weight-bold mb-3 p-0">
                        <strong>Rations for low income households</strong>
                        </h3>
                        <p className="text-muted" style={{color:"#016B86",fontFamily:"Montserrat",fontSize:"16px"}}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris consectetur elementum ligula eu sagittis. Donec euismod lectus ac turpis sollicitudin, at placerat nibh euismod. Aenean ut ultricies ---magna. Fusce congue, lorem ut sollicitudin rutrum, nulla neque facilisis tortor, et tempor augue magna at eros. Aenean et sapien --dolor. Nunc venenatis justo vitae felis suscipit, volutpat venenatis libero interdum. Maecenas pellentesque tellus et mollis ullamcorper. Etiam quis ullamcorper lorem. Aenean id hendrerit dolor, id tempus nulla. Nulla ultrices sit amet massa quis facilisis. Integer ultricies sdfdhfib sjbkaofoa ropwpeorpqp.
                        </p>
                    </MDBCol>
                    </MDBRow>
                    <MDBRow>
                    <MDBCol lg='7'>
                        <br></br>
                        <h3 className="font-weight-bold mb-3 p-0" style={{fontSize:"24px",color:"#016B86",fontFamily:"Montserrat"}}>
                        <strong>Mission Aahan Vaahan</strong>
                        </h3>
                        <p className="text-muted" style={{color:"#016B86",fontFamily:"Montserrat",fontSize:"16px"}}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris consectetur elementum ligula eu sagittis. Donec euismod lectus ac turpis sollicitudin, at placerat nibh euismod. Aenean ut ultricies ---magna. Fusce congue, lorem ut sollicitudin rutrum, nulla neque facilisis tortor, et tempor augue magna at eros. Aenean et sapien --dolor. Nunc venenatis justo vitae felis suscipit, volutpat venenatis libero interdum. Maecenas pellentesque tellus et mollis ullamcorper. Etiam quis ullamcorper lorem. Aenean id hendrerit dolor, id tempus nulla. Nulla ultrices sit amet massa quis facilisis. Integer ultricies sdfdhfib sjbkaofoa ropwpeorpqp.
                        </p>
                        
                    </MDBCol>
                    <MDBCol md="1"></MDBCol>
                    <MDBCol md="2">
                        <MDBCard style={{width:"177px",height:"214px",backgroundColor:"#CFEEF6"}} className="mb-2">
                            {/* <MDBCardImage   style={{margin:"auto"}} className="img-fluid" src="/babies.png" /> */}
                            <figure>
                                <img  src={require("../images/babies.png")} style={{width: "177px", height:"214px",verticalAlign:"middle"}} alt="Founder" ></img>
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
       
      </>
    );
  }
}

export default CommunityWork;