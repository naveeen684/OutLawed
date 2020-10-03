import React from 'react'
import InfiniteCarousel from 'react-leaf-carousel';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button } from 'reactstrap';


function SchoolCarousel() {
    return (
        <div>
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
                    slidesToScroll: 1,
                  },
                },
                {
                  breakpoint: 1080,
                  settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                  },
                }
              ]}
              dots={false}
              showSides={true}
              sidesOpacity={0.5}
              sideSize={0.1}
              slidesToScroll={1}
              slidesToShow={3}
              scrollOnDevice={true}
              autoCycle={false}
          
            >
              <div>
              <Card style={{height:"75vh",boxShadow:"none"}}>
                <CardImg top src={require("../images/sp1.png")} alt="Card image cap" style={{width:'50%', margin:"auto"}} />
                <CardBody>
                  <CardTitle style={{fontFamily:"Montserrat", fontWeight:"bold", fontSize:"24px", color:"#016B86"}}>Meena</CardTitle>
                  <CardText style={{fontFamily:"Segoe UI", fontStyle:"italic", fontSize:"25px", color:"#707070"}}>"The teachers at OutLawed use examples which every one of us encounter in our daily life. It was very informative and encouraged me to reflect, deal with criticism, learn better and stay motivated."</CardText>
                </CardBody>
              </Card>
              </div>
              <div>
              <Card style={{height:"75vh",boxShadow:"none"}}>
                <CardImg top src={require("../images/sp2.png")} alt="Card image cap" style={{width:'50%', margin:"auto"}} />
                <CardBody>
                  <CardTitle style={{fontFamily:"Montserrat", fontWeight:"bold", fontSize:"24px", color:"#016B86"}}>Mohammed Hirwaniwala</CardTitle>
                  <CardText style={{fontFamily:"Segoe UI", fontStyle:"italic", fontSize:"25px", color:"#707070"}}>"I never knew about contract law and how interesting it was until the OutLawed session!"</CardText>
                </CardBody>
              </Card>
              </div>
              <Card style={{height:"75vh",boxShadow:"none"}}>
                <CardImg top src={require("../images/sp3.png")} alt="Card image cap" style={{width:'50%', margin:"auto"}} />
                <CardBody>
                  <CardTitle style={{fontFamily:"Montserrat", fontWeight:"bold", fontSize:"24px", color:"#016B86"}}>Rajshekar</CardTitle>
                  <CardText style={{fontFamily:"Segoe UI", fontStyle:"italic", fontSize:"25px", color:"#707070"}}>"I was never interested in law before, but the teachers explained everything so clearly and I liked it a lot."</CardText>
                </CardBody>
              </Card>
              <Card style={{height:"75vh",boxShadow:"none"}}>
                <CardImg top src={require("../images/sp4.png")} alt="Card image cap" style={{width:'50%', margin:"auto"}} />
                <CardBody>
                  <CardTitle style={{fontFamily:"Montserrat", fontWeight:"bold", fontSize:"24px", color:"#016B86"}}>Pehal Singhania</CardTitle>
                  <CardText style={{fontFamily:"Segoe UI", fontStyle:"italic", fontSize:"25px", color:"#707070"}}>"The sessions were very interesting. The teachers were confident and very friendly. It was very fun, informative and interactive. I'm really happy I could attend.</CardText>
                </CardBody>
              </Card>
              <Card style={{height:"75vh",boxShadow:"none"}}>
                <CardImg top src={require("../images/sp5.png")} alt="Card image cap" style={{width:'50%', margin:"auto"}} />
                <CardBody>
                  <CardTitle style={{fontFamily:"Montserrat", fontWeight:"bold", fontSize:"24px", color:"#016B86"}}>Jaidev</CardTitle>
                  <CardText style={{fontFamily:"Segoe UI", fontStyle:"italic", fontSize:"25px", color:"#707070"}}>"The sessions conducted by OutLawed were extremely informative and very interactive. Attending these sessions will help people understand how powerful the common man in this country actually is."</CardText>
                </CardBody>
              </Card>
            </InfiniteCarousel>
        </div>
    )
}

export default SchoolCarousel;
