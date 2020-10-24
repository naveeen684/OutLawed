import React, { Component } from 'react';
import { MDBJumbotron, MDBBtn, MDBCardBody,MDBContainer, MDBRow, MDBCol } from "mdbreact";
import Wave from './images/topwaveq.png';
import "./Dynamic.css";
class Dynamic extends Component {
    constructor(props){
        super(props);
        this.state = {
            items: [],
            isLoaded: false,
        }
    }
    componentDidMount(){
        fetch('https://outlawedbackend.herokuapp.com/links/')
        .then(res => res.json())
        .then(json => {
            this.setState({
                isLoaded: true,
                items: json,
            })
        })
    }
    render() {

        var { isLoaded,items} = this.state;                  //!DATA from REST API
        
        var quiz = items.map(item => {

            if(item.TypeOfEvent==='2')     
                return <div key={item.id} className="conts">
                            <MDBContainer className="mt-5 text-center">
                                <MDBRow>
                                    <MDBCol>
                                    <MDBJumbotron>
                                        <h2 className="h1 display-3 jumbo__head">{item.Title}</h2>
                                        <p className="lead">
                                        {item.Description}
                                        </p>
                                        <hr className="my-2" />
                                        <p>
                                        {item.Date}
                                        </p>
                                        <p className="lead">
                                        <a target="_blank" rel="noopener noreferrer" href={item.Link}><MDBBtn color="primary">Partcipate</MDBBtn></a>
                                        </p>
                                    </MDBJumbotron>
                                    </MDBCol>
                                </MDBRow>
                            </MDBContainer>

                    </div>
            return ""
             } 
        );
        var material = items.map(item => {
        if(item.TypeOfEvent==='1')     
            return <div  key={item.id} className="conts">
                        <MDBContainer className="mt-5 text-center">
                            <MDBRow>
                                <MDBCol>
                                <MDBJumbotron className="inner__conts" style={{width:"100%"}}>
                                    <h2 className="h1 display-3 jumbo__head">{item.Title}</h2>
                                    <p className="lead">
                                    {item.Description}
                                    </p>
                                    <hr className="my-2" />
                                    <p>
                                    {item.Date}
                                    </p>
                                    <p className="lead">
                                    <a target="_blank" rel="noopener noreferrer" href={item.Link}><MDBBtn color="primary">Partcipate</MDBBtn></a>
                                    </p>
                                </MDBJumbotron>
                                </MDBCol>
                            </MDBRow>
                        </MDBContainer>

                </div>
        return " "
            }
         );
        if(!isLoaded){
            return <div><h1>Loading...</h1></div>
        }
        else{
            return (
                <div style={{backgroundImage: `url(${Wave})`,backgroundRepeat: 'no-repeat',width:'100vw',backgroundSize:"100%"}}>
                <div  className="outcont">
                  <MDBCardBody className="text-left">
                              <MDBRow style={{width:"95%"}}>
                              <MDBCol lg="12">
                                  <h3 style={{color:"#016B86",fontFamily:"Montserrat",fontSize:"36px"}} className="font-weight-bold mb-3 p-0">
                                  <strong><b>Events</b></strong>
                                  </h3>
                                  <hr style={{width:"55px", border:"2px solid #016B86", borderRadius:"2px",margin:"0px",backgroundColor:"#016B86"}} />
                                  <br></br>
                              </MDBCol>
                              </MDBRow>
                              <br></br>
                              <MDBRow>
                              <MDBCol lg="4">
                                <h3 style={{color:"#016B86",fontFamily:"Montserrat", fontSize:"25px"}} className="font-weight-bold mb-3 p-0">
                                    <strong>Quizzes</strong>
                                    </h3>
                                  <br></br>
                                </MDBCol>       
                              </MDBRow>
                              <br></br>
                              <MDBRow>
                              <MDBCol lg="12">
                                {
                                    quiz
                                }
                                </MDBCol>       
                              </MDBRow>
                              <br></br>
                              <MDBRow>
                              <MDBCol lg="4">
                                <h3 style={{color:"#016B86",fontFamily:"Montserrat", fontSize:"25px"}} className="font-weight-bold mb-3 p-0">
                                    <strong>Materials</strong>
                                    </h3>
                                  <br></br>
                                </MDBCol>       
                              </MDBRow>
                              <br></br>
                              <MDBRow>
                              <MDBCol lg="12">
                                {
                                    material
                                }
                                </MDBCol>       
                              </MDBRow>
                          </MDBCardBody>
                 
                </div>
                </div>
            )
        }
    }
}

export default Dynamic
