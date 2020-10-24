import React from 'react';
import { MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBRow, MDBCol, MDBView, MDBIcon } from 'mdbreact';
import Wave from './images/topwaveq.png';
const CardExample = () => {
  return (
    <div style={{backgroundImage: `url(${Wave})`,backgroundRepeat: 'no-repeat',width:'100vw',backgroundSize:"100%",position:"center top",marginBottom:"15vh"}}>
      <div 
        style={{marginLeft:"auto",marginRight:"auto",display:"block",width:"80%"}}
      >
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      
     <MDBRow>
     <MDBCol lg="12">
                        <h3 style={{color:"#016B86",fontFamily:"Montserrat",textAlign:"left"}} className="subh">
                        <strong><b>Developers</b></strong>
                        </h3>
                        <hr style={{width:"55px", border:"2px solid #016B86", borderRadius:"2px",margin:"0px",backgroundColor:"#016B86"}} />
                        <br></br>
                    </MDBCol>
    </MDBRow> 
    <MDBRow >
      <MDBCol md="4" style={{margin:"auto"}}>
        <MDBCard wide >
          <MDBView >
            <MDBCardImage
              hover
              overlay='white-slight'
              className='card-img-top'
              src='https://instagram.fblr8-1.fna.fbcdn.net/v/t51.2885-15/e35/43731035_636705753393573_3498579161302171648_n.jpg?_nc_ht=instagram.fblr8-1.fna.fbcdn.net&_nc_cat=109&_nc_ohc=g-MifCZsHogAX9L_v09&se=7&_nc_tp=18&oh=ecbe64e2fcb4443f96e6425f3baf716b&oe=5FBAF1A1'
              alt='Card cap'
            />
          </MDBView>

          <MDBCardBody cascade className='text-center'>
            <MDBCardTitle className='card-title'>
              <strong>Nithin Christopher</strong>
            </MDBCardTitle>

            <p className='font-weight-bold blue-text'>Frontend-Developer</p>

            <MDBCardText>
              Full stack developer eager in machine learning.{' '}
            </MDBCardText>

            <MDBCol md='12' className='d-flex justify-content-center'>
              <a href='https://www.linkedin.com/in/nithin-christopher-3297031ab/' className='px-2 fa-lg li-ic'>
                <MDBIcon fab icon='linkedin-in'></MDBIcon>
              </a>
              <a href='mailto:christophernithin@gmail.com' className='px-2 fa-lg tw-ic' >
                <MDBIcon icon="envelope" />
              </a>

            </MDBCol>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
      <MDBCol md="4" style={{margin:"auto"}}>
        <MDBCard wide cascade>
          <MDBView cascade>
            <MDBCardImage
              hover
              overlay='white-slight'
              className='card-img-top'
              src='https://instagram.fblr8-1.fna.fbcdn.net/v/t51.2885-15/e35/75450425_543101239603297_7287517472188093133_n.jpg?_nc_ht=instagram.fblr8-1.fna.fbcdn.net&_nc_cat=101&_nc_ohc=ExntIFn6sSMAX-RevNs&se=7&_nc_tp=18&oh=460adb36f68396c1424c8c351c56c94e&oe=5FBC4331'
              alt='Card cap'
            />
          </MDBView>

          <MDBCardBody cascade className='text-center'>
            <MDBCardTitle className='card-title'>
              <strong>Naveen Raj R</strong>
            </MDBCardTitle>

            <p className='font-weight-bold blue-text'>Backend-Developer</p>

            <MDBCardText>
              Full stack developer, deep learning enthusiast and a data analyst.{' '}
            </MDBCardText>

            <MDBCol md='12' className='d-flex justify-content-center'>
              <a href='https://www.linkedin.com/in/naveenraj-r-657261188' className='px-2 fa-lg li-ic'>
                <MDBIcon fab icon='linkedin-in'></MDBIcon>
              </a>

              <a href='mailto:naveenrajapandian@gmail.com' className='px-2 fa-lg tw-ic'>
                <MDBIcon icon="envelope" />
              </a>
            </MDBCol>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
      <MDBCol md="4" style={{margin:"auto"}}>
        <MDBCard wide cascade>
          <MDBView cascade>
            <MDBCardImage
              hover
              overlay='white-slight'
              className='card-img-top'
              src='https://instagram.fblr8-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/c0.135.1080.1080a/s640x640/65953769_506642783478669_3710395499054908836_n.jpg?_nc_ht=instagram.fblr8-1.fna.fbcdn.net&_nc_cat=109&_nc_ohc=FSjJEyxSBf4AX-p5L0y&oh=d8aef27073604f8b589d1af9a9665035&oe=5FBCA58B'
              alt='Card cap'
            />
          </MDBView>

          <MDBCardBody cascade className='text-center'>
            <MDBCardTitle className='card-title'>
              <strong>Hariharan K</strong>
            </MDBCardTitle>

            <p className='font-weight-bold blue-text'>Frontend-Developer</p>

            <MDBCardText>
              Full stack developer with a keen interest in machine learning.{' '}
            </MDBCardText>

            <MDBCol md='12' className='d-flex justify-content-center'>
              <a href='http://www.linkedin.com/in/hariharan-k-513020185' className='px-2 fa-lg li-ic'>
                <MDBIcon fab icon='linkedin-in'></MDBIcon>
              </a>

              <a href='mailto:hariharankannan1621@gmail.com ' className='px-2 fa-lg tw-ic'>
                <MDBIcon icon='envelope'></MDBIcon>
              </a>

            </MDBCol>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
    </MDBRow>
    </div>
    </div>
  )
}

export default CardExample;