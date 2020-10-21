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
              src='https://mdbootstrap.com/img/Photos/Horizontal/People/6-col/img%20%283%29.jpg'
              alt='Card cap'
            />
          </MDBView>

          <MDBCardBody cascade className='text-center'>
            <MDBCardTitle className='card-title'>
              <strong>Nithin Christopher</strong>
            </MDBCardTitle>

            <p className='font-weight-bold blue-text'>Frontend-Developer</p>

            <MDBCardText>
              Sed ut perspiciatis unde omnis iste natus sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam.{' '}
            </MDBCardText>

            <MDBCol md='12' className='d-flex justify-content-center'>
              <a href='!#' className='px-2 fa-lg li-ic'>
                <MDBIcon fab icon='linkedin-in'></MDBIcon>
              </a>

              <a href='!#' className='px-2 fa-lg tw-ic'>
                <MDBIcon fab icon='twitter'></MDBIcon>
              </a>

              <a href='!#' className='px-2 fa-lg fb-ic'>
                <MDBIcon fab icon='facebook-f'></MDBIcon>
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
              src='https://mdbootstrap.com/img/Photos/Horizontal/People/6-col/img%20%283%29.jpg'
              alt='Card cap'
            />
          </MDBView>

          <MDBCardBody cascade className='text-center'>
            <MDBCardTitle className='card-title'>
              <strong>Naveen Raj R</strong>
            </MDBCardTitle>

            <p className='font-weight-bold blue-text'>Backend-Developer</p>

            <MDBCardText>
              Sed ut perspiciatis unde omnis iste natus sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam.{' '}
            </MDBCardText>

            <MDBCol md='12' className='d-flex justify-content-center'>
              <a href='!#' className='px-2 fa-lg li-ic'>
                <MDBIcon fab icon='linkedin-in'></MDBIcon>
              </a>

              <a href='!#' className='px-2 fa-lg tw-ic'>
                <MDBIcon fab icon='twitter'></MDBIcon>
              </a>

              <a href='!#' className='px-2 fa-lg fb-ic'>
                <MDBIcon fab icon='facebook-f'></MDBIcon>
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
              src='https://mdbootstrap.com/img/Photos/Horizontal/People/6-col/img%20%283%29.jpg'
              alt='Card cap'
            />
          </MDBView>

          <MDBCardBody cascade className='text-center'>
            <MDBCardTitle className='card-title'>
              <strong>Hariharan K</strong>
            </MDBCardTitle>

            <p className='font-weight-bold blue-text'>Frontend-Developer</p>

            <MDBCardText>
              Sed ut perspiciatis unde omnis iste natus sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam.{' '}
            </MDBCardText>

            <MDBCol md='12' className='d-flex justify-content-center'>
              <a href='!#' className='px-2 fa-lg li-ic'>
                <MDBIcon fab icon='linkedin-in'></MDBIcon>
              </a>

              <a href='!#' className='px-2 fa-lg tw-ic'>
                <MDBIcon fab icon='twitter'></MDBIcon>
              </a>

              <a href='!#' className='px-2 fa-lg fb-ic'>
                <MDBIcon fab icon='facebook-f'></MDBIcon>
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