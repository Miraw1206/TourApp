import React, {useEffect} from 'react'
import './footer.css'
import Aos from 'aos';
import 'aos/dist/aos.css';

import { Container, Row, Col, ListGroup, ListGroupItem} from 'reactstrap';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo1.png';

const quick__links = [
  {
   path: '/home',
   display: 'Home'
 },
 {
   path: '/about',
   display: 'About'
 },
 {
   path: '/tours',
   display: 'Tours'
 },
 ];
 const quick__links2 = [
  {
   path: '/gallery',
   display: 'Gallery'
 },
 {
   path: '/login',
   display: 'Login'
 },
 {
   path: '/register',
   display: 'Register'
 },
 ];

const Footer = () => {

  const year = new Date().getFullYear()

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  
  return (
<footer className='footer'>
  <Container>
    <Row>
      <Col lg='3' data-aos='fade-up'>
        <div className='logo'>
          <img src={logo} alt=''/>
           <p>Explore the world in every step you take.
</p>

            <div className='social__links d-flex align-items-center gap-4'>
              <span>
                <Link to='#'><i class='ri-youtube-line'></i></Link>
              </span>
              <span>
                <Link to='#'><i class='ri-facebook-circle-line'></i></Link>
              </span> 
               <span>
                <Link to='#'><i class='ri-instagram-line'></i></Link>
              </span> 
            </div>
        </div>
      </Col>
      <Col lg='3' data-aos='fade-up'>
        <h5 className='footer__link-title'>Discover </h5>
        <ListGroup className='footer__quick-links'>
          {quick__links.map((item, index) => (
            <ListGroupItem key={index} className='ps-0 border-0'>
              <Link to={item.path}>{item.display}</Link>
            </ListGroupItem>
          ))}
        </ListGroup>
      </Col>
      <Col lg='3' data-aos='fade-up'>
      <h5 className='footer__link-title'>Quick Links </h5>
        <ListGroup className='footer__quick-links'>
          {quick__links2.map((item, index) => (
            <ListGroupItem key={index} className='ps-0 border-0'>
              <Link to={item.path}>{item.display}</Link>
            </ListGroupItem>
          ))}
        </ListGroup>
      </Col>
      <Col lg='3' data-aos='fade-up'>
      <h5 className='footer__link-title'>Contact</h5>
        <ListGroup className='footer__quick-links'>
            <ListGroupItem className='ps-0 border-0 d-flex
            align-items-center gap-3 '>

              <h6 className='mb-0 d-flex align-items-center gap-2'>
             <span>
                 <i class='ri-map-pin-line'></i>
             </span>
               Address:
              </h6> 
              <p className='mb-0'>Jerusalem</p>
            </ListGroupItem>

             <ListGroupItem className='ps-0 border-0 d-flex
            align-items-center gap-3 '>

              <h6 className='mb-0 d-flex align-items-center gap-2'>
             <span>
                 <i class='ri-mail-line'></i>
             </span>
               Email:
              </h6> 
              <p className='mb-0'>flywithme@gmail.com</p>
            </ListGroupItem>

            <ListGroupItem className='ps-0 border-0 d-flex
            align-items-center gap-3 '>

              <h6 className='mb-0 d-flex align-items-center gap-2'>
             <span>
                 <i class='ri-phone-fill'></i>
             </span>
               Phone:
              </h6> 
              <p className='mb-0'>+545 787 7878</p>
            </ListGroupItem>
        </ListGroup>
      </Col>
      
    <Col lg='12' className='text-center pt-5' data-aos='fade-up'>
      <p className='copyright'>Copyright {year}, design and develop by Mira Awaida. All rights reserved.</p>
    </Col>
    </Row>
  </Container>
</footer>  )
}


export default Footer