import { MDBCol, MDBContainer, MDBRow } from "mdbreact";
import styled from 'styled-components';
import SchoolCarousel from "./SchoolCarousel";
import Wave from '../images/topwaveq.png';
import React from "react";

const Button = styled.button`
    color:#CFEEF6;
    background: #016B86 0% 0% no-repeat padding-box;
    box-shadow: 0px 20px 90px #00000029;
    border-radius: 10px;
    opacity: 1;
    width:100%;
    padding: 20px 0px 20px 0px;
    border: auto grey;
  `

class SchoolProgram extends React.Component {

  render() {
    return (
      <div style={{backgroundImage: `url(${Wave})`,backgroundRepeat: 'no-repeat',width:'100vw',backgroundSize:"100%",fontFamily:"Montserrat"}}>
        <div style={{paddingTop:"20vh",paddingLeft:"8vw",paddingRight :"8vw"}}>
          {/* <MDBContainer> */}
            <MDBRow style={{paddingBottom:"1vh"}}>
              <MDBCol md="12"><div><h2 style={{fontFamily:"Montserrat", color:"#016B86", fontSize:"32px",float:"left"}}><strong>SCHOOL PROGRAM</strong></h2></div><br/></MDBCol>
            </MDBRow>
            <MDBRow >
              <MDBCol md="12"><div><hr style={{width:"55px", border:"2px solid #016B86", borderRadius:"2px",margin:"0px"}} /><br/></div></MDBCol>
            </MDBRow>
            <MDBRow>
              <MDBCol md="12"><p style={{fontFamily:"Montserrat", color:"#6A6680", fontSize:"16px", textAlign:"left"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris consectetur elementum ligula eu sagittis. Donec euismod lectus ac turpis sollicitudin, at placerat nibh euismod. Aenean ut ultricies magna. Fusce congue, lorem ut sollicitudin rutrum, nulla neque facilisis tortor, et tu tempor augue magna at eros. Aenean et sapien dolor. Nunc venenatis justo vitae felis suscipit, volutpat venenatis libero interdum. Maecenas pellentesque tellus et mollis ullamcorper. Etiam quis ullamcorper lorem. Aenean id hendrerit dolor, id tempus nulla. Nulla ultrices sit amet vf massa quis facilisis. Integer ultricies sdfdhfib sjbkaofoa ropwpeorpqp.lorem ipsum dolor sit amet, consectetur adipiscing elit. mauris lorium consectetur elementum ligula eu sagittis. donec euismod lectus ac turpis sollicitudin, at placerat nibh euismod. aenean ut ultricies magna. fusce congue, lorem ut sollicitudin rutrum, nulla neque facilisis tortor, et tempor augue magna at eros. aenean et sapien dolor. nunc magna venenatis justo vitae felis suscipit, volutpat venenatis libero interdum. maecenas pellentesque tellus et mollis ullamcorper. etiam quis ullamcorper lorem. aenean id hendrerit dolor, id tempus nulla. nulla ultrices sit amet vf</p></MDBCol>
            </MDBRow>
            <MDBRow style={{padding:"3vh 0 1vh"}}>
              <MDBCol md="12"><div><h4 style={{fontFamily:"Montserrat", color:"#016B86", fontSize:"24px",float:"left",fontWeight:"bold"}}>Teacher's training program</h4></div><br/></MDBCol>
            </MDBRow>
            <MDBRow style={{paddingBottom:"1vh"}}>
              <MDBCol md="12"><div><hr style={{width:"55px", border:"2px solid #016B86", borderRadius:"2px",margin:"0px"}} /></div></MDBCol>
            </MDBRow>
            <MDBRow style={{padding:"1vh 0 1vh"}}>
              <MDBCol md="5">
                <div><p style={{fontFamily:"Montserrat", color:"#6A6680", fontSize:"16px", textAlign:"left"}}>OutLawed understands the responsibility that we shoulder in teaching individuals about the law. All our teachers are meticulously trained and well-equipped to teach these workshops.
                  <br/>They are made to undergo two mandatory training programs: </p></div>
                  <div>
                  <dl style={{color:"#6A6680",alignItems:"start"}}>
                    <dd style={{margin:"0px",float:"left",fontSize:"16px",padding:"5px 0px 5px 0px"}}><img src={require("../images/icon_tick.svg")} style={{paddingRight:"10px"}}/>{" "}Teaches the teachers integrity and reliability</dd>
                    <dd style={{margin:"0px",float:"left",fontSize:"16px",padding:"5px 0px 5px 0px"}}><img src={require("../images/icon_tick.svg")} style={{paddingRight:"10px"}}/>{" "}Induces an unbiased mind-set</dd>
                    <dd style={{margin:"0px",float:"left",fontSize:"16px",padding:"5px 0px 5px 0px"}}><img src={require("../images/icon_tick.svg")} style={{paddingRight:"10px"}}/>{" "}Trains the teachers to tackle problems</dd>
                  </dl>
                </div>
              </MDBCol>
              <MDBCol sm="0" md="1"></MDBCol>
              <MDBCol md="6" sm="12">
                <img src={require("../images/spcoll.png")} style={{maxWidth:"70%"}}/>
              </MDBCol>
              <MDBCol md="6" sm="12">
                <MDBRow style={{padding:"5vh 0 1vh"}}>
                <MDBCol md="12"><div><h4 style={{fontFamily:"Montserrat", color:"#016B86", fontSize:"24px",float:"left",fontWeight:"bold"}}>Teaching Methodology</h4></div><br/></MDBCol>
              </MDBRow>
              <MDBRow style={{paddingBottom:"0vh"}}>
                <MDBCol md="12"><div><hr style={{width:"55px", border:"2px solid #016B86", borderRadius:"2px",margin:"0px"}} /></div></MDBCol>
              </MDBRow>
              {/* <div><p style={{fontFamily:"Montserrat", color:"#6A6680", fontSize:"16px", textAlign:"left"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris consectetur elementum ligula eu sagittis. Donec euismod lectus ac turpis sollicitudin, at maxim placerat nibh euismod. Aenean ut ultricies magna. Fusce congue, lorem ut sollicitudin rutrum, nulla nos neque facilisis tortor, et tu losso qui lorium ipsum ma tempor augue magna at eros. Aenean et sapien dolor. Nunc venenatis justo vitae felis suscipit, volutpat venenatis libero interdum. Maecenas pellentesque tellus et mollis ullamcorper. Etiam quis ullamcorper lorem. Aenean id hendrerit dolor, id tempus nulla. Nulla ultrices sit amet vf massa quis facilisis. Integer ultricies sdfdhfib sjbkaofoa ropwpeorpqp.lorem ipsum dolor sit amet, consectetur adipiscing elit. mauris lorium consectetur elementum ligula eu sagittis. donec euismod lectus ac turpis sollicitudin, at placerat nibh euismod. aenean ut ultricies magna. fusce congue, lorem ut sollicitudin rutrum, nulla neque facilisis tortor, et tempor augue magna at eros. aenean et sapien dolor. nunc magna venenatis justo vitae felis suscipit, volutpat venenatis libero interdum. maecenas pellentesque tellus et mollis ullamcorper. etiam quis ullamcorper lorem. aenean id hendrerit dolor, id tempus nulla. nulla ultrices sit amet vf</p></div> */}
                <div >
                  <dl style={{color:"#6A6680",alignItems:"start"}}>
                    <dt style={{textAlign:"left",color:"#68B8CC",fontSize:"16px",fontWeight:"bold",paddingTop:"2vh"}}>What we teach :</dt>
                    <dd style={{margin:"0px",float:"left",fontSize:"16px",padding:"5px 0px 20px 0px",textAlign:"left"}}>First, we believe in the power of self-learning. Our modules are created to allow our teachers to facilitate sessions, while empowering students to discover and create by themselves. We often ask students to step into the shoes of legislators and create laws for women’s empowerment, cyber security, and consumer protection.</dd>
                    <dt style={{textAlign:"left",color:"#68B8CC",fontSize:"16px",fontWeight:"bold"}}>How we teach :</dt>
                    <dd style={{margin:"0px",float:"left",fontSize:"16px",padding:"5px 0px 20px 0px",textAlign:"left"}}>Second, we believe in catering to student needs. As students ourselves, we know that having very little to say in the process hampers the learning experience. OutLawed has committed itself to teaching in the language that students are most comfortable with. We also regularly update our modules and activities based on the target audience and allow flexibility in choosing the topics to be taught. You can see clips of our sessions <a target="_blank" href="https://outlawedind.wordpress.com/">here</a>.</dd>
                    <dt style={{textAlign:"left",color:"#68B8CC",fontSize:"16px",fontWeight:"bold",paddingTop:"2vh"}}>Who we teach :</dt>
                    <dd style={{margin:"0px",float:"left",fontSize:"16px",padding:"5px 0px 20px 0px",textAlign:"left"}}>Third, we believe in following-up with our students. Our engagement does not end when the workshop ends. We have created activities that keep students engaged post-session! You can check out the post-session debate and discussion by our students <a target="_blank" href="https://outlawedind.wordpress.com/">here</a>.</dd>
                  </dl>
                </div>
              </MDBCol>
            </MDBRow>
            <MDBRow style={{paddingTop:"10vh"}}>
              <MDBCol md="12"><div><h2 style={{fontFamily:"Montserrat", color:"#016B86", fontSize:"32px",float:"left"}}><strong>TESTIMONIALS</strong></h2></div><br/></MDBCol>
            </MDBRow>
            <MDBRow >
              <MDBCol md="12"><div><hr style={{width:"55px", border:"2px solid #016B86", borderRadius:"2px",margin:"0px"}} /></div></MDBCol>
            </MDBRow>
            <MDBRow style={{padding:"5vh 0 1vh"}}>
              <MDBCol sm="12">
                <SchoolCarousel />
              </MDBCol>
            </MDBRow>
            <MDBRow style={{padding:"5vh 0 1vh"}}>
              <MDBCol sm="12" md="8" style={{margin:"auto"}}>
                <Button style={{fontSize:"30px",fontFamily:"Montserrat",fontWeight:"600"}}>
                  Login to your account
                </Button>
              </MDBCol>
            </MDBRow>
          {/* </MDBContainer> */}
        </div>
      </div>
    );
  }
}
export default SchoolProgram;
