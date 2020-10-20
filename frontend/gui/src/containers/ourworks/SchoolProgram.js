import { MDBCol, MDBRow } from "mdbreact";
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
              <MDBCol md="12"><div><h2 style={{fontFamily:"Montserrat", color:"#016B86", fontSize:"32px",float:"left"}}><strong>LAW</strong></h2></div><br/></MDBCol>
            </MDBRow>
            <MDBRow >
              <MDBCol md="12"><div><hr style={{width:"55px", border:"2px solid #016B86", borderRadius:"2px",margin:"0px"}} /><br/></div></MDBCol>
            </MDBRow>
            <MDBRow>
              <MDBCol md="12"><p style={{fontFamily:"Montserrat", color:"#6A6680", fontSize:"16px", textAlign:"left"}}>Our core initiative is LAW - Legal Awareness Workshops. Our Content Team has curated material on over 40 topics that are relevant, contemporary, and important. Through LAW, we hope to engage students to help them learn about the laws that they are most likely with at a personal level.. These modules are taught by college students studying law and policy! </p></MDBCol>
            </MDBRow>
            <MDBRow style={{padding:"3vh 0 1vh"}}>
              <MDBCol md="12"><div><h4 style={{fontFamily:"Montserrat", color:"#016B86", fontSize:"24px",float:"left",fontWeight:"bold"}}>Teacher's training program</h4></div><br/></MDBCol>
            </MDBRow>
            <MDBRow >
              <MDBCol md="12"><div><hr style={{width:"55px", border:"2px solid #016B86", borderRadius:"2px",margin:"0px",backgroundColor:"#016B86"}} /><br/></div></MDBCol>
            </MDBRow>
            <MDBRow style={{padding:"1vh 0 1vh"}}>
              <MDBCol md="5">
                <div><p style={{fontFamily:"Montserrat", color:"#6A6680", fontSize:"16px", textAlign:"left"}}>OutLawed understands the responsibility that we shoulder in teaching individuals about the law. All our teachers are meticulously trained and well-equipped to teach these workshops. 
                  <br/><br />They are made to undergo two mandatory training programs: </p></div>
                  <div>
                  <dl style={{color:"#6A6680",alignItems:"start"}}>
                    <dd style={{margin:"0px",float:"left",fontSize:"16px",padding:"5px 0px 5px 0px"}}><img src={require("../images/icon_tick.svg")} alt="tick" style={{paddingRight:"10px"}}/>{" "}The anti-sexual harassment and gender sensitisation workshop</dd>
                    <dd style={{margin:"0px",float:"left",fontSize:"16px",padding:"5px 0px 20px 0px",textAlign:"left"}}>We believe in creating a safe space for learning. To ensure this, all our teachers are well informed of codes of conduct that they must follow to ensure that everyone is respected, and feels safe.</dd>
                    <dd style={{margin:"0px",float:"left",fontSize:"16px",padding:"5px 0px 5px 0px"}}><img src={require("../images/icon_tick.svg")} alt="tick" style={{paddingRight:"10px"}}/>{" "}The teaching program</dd>
                    <dd style={{margin:"0px",float:"left",fontSize:"16px",padding:"5px 0px 20px 0px",textAlign:"left"}}><dd style={{margin:"0px",float:"left",fontSize:"16px",padding:"5px 0px 20px 0px",textAlign:"left"}}>While our teachers may be students themselves, they have been through comprehensive sessions with experienced teachers to learn about good teaching practices. They have been taught how to facilitate an interactive and fruitful learning experience for students. </dd></dd>
                  </dl>
                </div>
              </MDBCol>
              <MDBCol sm="0" md="1"></MDBCol>
              <MDBCol md="6" sm="12">
                <img src={require("../images/spcoll.png")} alt="members" style={{maxWidth:"70%"}}/>
              </MDBCol>
              <MDBCol md="6" sm="12">
                <MDBRow style={{padding:"5vh 0 1vh"}}>
                <MDBCol md="12"><div><h4 style={{fontFamily:"Montserrat", color:"#016B86", fontSize:"24px",float:"left",fontWeight:"bold"}}>Teaching Methodology</h4></div><br/></MDBCol>
              </MDBRow>
              <MDBRow style={{paddingBottom:"0vh"}}>
                <MDBCol md="12"><div><hr style={{width:"55px", border:"2px solid #016B86", borderRadius:"2px",margin:"0px",backgroundColor:"#016B86"}} /></div></MDBCol>
              </MDBRow>
              {/* <div><p style={{fontFamily:"Montserrat", color:"#6A6680", fontSize:"16px", textAlign:"left"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris consectetur elementum ligula eu sagittis. Donec euismod lectus ac turpis sollicitudin, at maxim placerat nibh euismod. Aenean ut ultricies magna. Fusce congue, lorem ut sollicitudin rutrum, nulla nos neque facilisis tortor, et tu losso qui lorium ipsum ma tempor augue magna at eros. Aenean et sapien dolor. Nunc venenatis justo vitae felis suscipit, volutpat venenatis libero interdum. Maecenas pellentesque tellus et mollis ullamcorper. Etiam quis ullamcorper lorem. Aenean id hendrerit dolor, id tempus nulla. Nulla ultrices sit amet vf massa quis facilisis. Integer ultricies sdfdhfib sjbkaofoa ropwpeorpqp.lorem ipsum dolor sit amet, consectetur adipiscing elit. mauris lorium consectetur elementum ligula eu sagittis. donec euismod lectus ac turpis sollicitudin, at placerat nibh euismod. aenean ut ultricies magna. fusce congue, lorem ut sollicitudin rutrum, nulla neque facilisis tortor, et tempor augue magna at eros. aenean et sapien dolor. nunc magna venenatis justo vitae felis suscipit, volutpat venenatis libero interdum. maecenas pellentesque tellus et mollis ullamcorper. etiam quis ullamcorper lorem. aenean id hendrerit dolor, id tempus nulla. nulla ultrices sit amet vf</p></div> */}
                <div >
                  <dl style={{color:"#6A6680",alignItems:"start"}}>
                    <dt style={{textAlign:"left",color:"#68B8CC",fontSize:"20px",fontWeight:"bold",paddingTop:"2vh"}}>OutLawed has three principles that guide our workshops. </dt>
                    <dd style={{margin:"0px",float:"left",fontSize:"16px",padding:"5px 0px 20px 0px",textAlign:"left"}}><img src={require("../images/icon_tick.svg")} alt="tick" style={{paddingRight:"10px"}}/>{" "}First, we believe in the power of self-learning. Our modules are created to allow our teachers to facilitate sessions, while empowering students to discover and create by themselves. We often ask students to step into the shoes of legislators and create laws for women’s empowerment, cyber security, and consumer protection.</dd>
                    <dd style={{margin:"0px",float:"left",fontSize:"16px",padding:"5px 0px 20px 0px",textAlign:"left"}}><img src={require("../images/icon_tick.svg")} alt="tick" style={{paddingRight:"10px"}}/>{" "}Second, we believe in catering to student needs. As students ourselves, we know that having very little to say in the process hampers the learning experience. OutLawed has committed itself to teaching in the language that students are most comfortable with. We also regularly update our modules and activities based on the target audience and allow flexibility in choosing the topics to be taught. You can see clips of our sessions <a target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/channel/UCj_eQLa5tm6kl-gxZW4yGcA ">here</a>.</dd>
                    <dd style={{margin:"0px",float:"left",fontSize:"16px",padding:"5px 0px 20px 0px",textAlign:"left"}}><img src={require("../images/icon_tick.svg")} alt="tick" style={{paddingRight:"10px"}}/>{" "}Third, we believe in following-up with our students. Our engagement does not end when the workshop ends. We have created activities that keep students engaged post-session! You can check out the post-session debate and discussion by our students <a target="_blank" rel="noopener noreferrer" href="https://www.kialo.com/userprofile/35f22b7b-9275-4415-8370-ffcee2b9af63?back=%2Fschools-should-not-have-compulsory-uniforms-39806%3Fpath%3D39806.0~39806.3%26active%3D~39806.3">here</a>.</dd>
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
                {/* <a href="#"> */}
                <Button href="/Login" style={{fontSize:"30px",fontFamily:"Montserrat",fontWeight:"600"}}>
                  Login to your account
                </Button>
                {/* </a> */}
              </MDBCol>
            </MDBRow>
          {/* </MDBContainer> */}
        </div>
      </div>
    );
  }
}
export default SchoolProgram;
