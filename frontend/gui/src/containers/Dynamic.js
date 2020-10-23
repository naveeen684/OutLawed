import React, { Component } from 'react';
import { MDBJumbotron, MDBBtn, MDBCardBody,MDBContainer, MDBRow, MDBCol } from "mdbreact";
import Wave from './images/topwaveq.png';
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

        //var { isLoaded,items} = this.state;                  !DATA from REST API
        var isLoaded  = true;
        var items = [
            {
                "id": 1,
                "TypeOfEvent": "1",
                "Title": "Coderz",
                "Description": "Coding Competition",
                "Link": "https://www.studytonight.com/cpp/cpp-and-oops-concepts.php",
                "Date": "2020-10-23"
            },
            {
                "id": 2,
                "TypeOfEvent": "2",
                "Title": "Code",
                "Description": "Coding Competition",
                "Link": "https://www.studytonight.com/cpp/cpp-and-oops-concepts.php",
                "Date": "2020-10-23"
            },
            {
                "id": 3,
                "TypeOfEvent": "1",
                "Title": "C++",
                "Description": "Coding Competition",
                "Link": "https://www.studytonight.com/cpp/cpp-and-oops-concepts.php",
                "Date": "2020-10-23"
            },
            {
                "id": 4,
                "TypeOfEvent": "2",
                "Title": "C ",
                "Description": "Coding Competition",
                "Link": "https://www.studytonight.com/cpp/cpp-and-oops-concepts.php",
                "Date": "2020-10-23"
            },
            {
                "id": 5,
                "TypeOfEvent": "1",
                "Title": "JAVA",
                "Description": "Coding Competition",
                "Link": "https://www.studytonight.com/cpp/cpp-and-oops-concepts.php",
                "Date": "2020-10-23"
            },
            {
                "id": 6,
                "TypeOfEvent": "2",
                "Title": "Python",
                "Description": "Coding Competition",
                "Link": "https://www.studytonight.com/cpp/cpp-and-oops-concepts.php",
                "Date": "2020-10-23"
            },
            {
                "id": 7,
                "TypeOfEvent": "1",
                "Title": "ReactJS",
                "Description": "Coding Competition",
                "Link": "https://www.studytonight.com/cpp/cpp-and-oops-concepts.php",
                "Date": "2020-10-23"
            },
            {
                "id": 8,
                "TypeOfEvent": "2",
                "Title": "VueJS",
                "Description": "Coding Competition",
                "Link": "https://www.studytonight.com/cpp/cpp-and-oops-concepts.php",
                "Date": "2020-10-23"
            },
            {
                "id": 9,
                "TypeOfEvent": "1",
                "Title": "AngularJS",
                "Description": "Coding Competition",
                "Link": "https://www.studytonight.com/cpp/cpp-and-oops-concepts.php",
                "Date": "2020-10-23"
            },
            {
                "id": 10,
                "TypeOfEvent": "2",
                "Title": "Flutter",
                "Description": "Coding Competition",
                "Link": "https://www.studytonight.com/cpp/cpp-and-oops-concepts.php",
                "Date": "2020-10-23"
            },

        ]
        var quiz = items.map(item => {

            if(item.TypeOfEvent==='1')     
                return <div style={{width:"50vw",marginLeft:"auto",marginRight:"auto",display:"block"}} key={item.id}>
                            <MDBContainer className="mt-5 text-center">
                                <MDBRow>
                                    <MDBCol>
                                    <MDBJumbotron>
                                        <h2 className="h1 display-3">{item.Title}</h2>
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

        if(item.TypeOfEvent==='2')     
            return <div style={{width:"50vw",marginLeft:"auto",marginRight:"auto",display:"block"}} key={item.id}>
                        <MDBContainer className="mt-5 text-center">
                            <MDBRow>
                                <MDBCol>
                                <MDBJumbotron>
                                    <h2 className="h1 display-3">{item.Title}</h2>
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
            return <div><h1>MORE Interesting contents are in the way</h1></div>
        }
        else{
            return (
                <div style={{backgroundImage: `url(${Wave})`,backgroundRepeat: 'no-repeat',width:'100vw',backgroundSize:"100%"}}>
                <div style={{paddingTop:"20vh",paddingLeft:"6vw",paddingRight :"8vw"}} >
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
