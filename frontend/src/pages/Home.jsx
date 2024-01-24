import React, {useEffect} from 'react'
import '../styles/home.css'
import {Container, Row, Col} from 'reactstrap';

import heroVideo1 from '../assets/images/hero-video1.mp4';
import heroImg02 from '../assets/images/hero-img02.jpg';
import heroVideo from '../assets/images/hero-video.mp4'
import worldImg from '../assets/images/world.png'
import experienceImg from '../assets/images/experience.png'
import Subtitle from '../shared/Subtitle';

import SearchBar from '../shared/SearchBar.jsx';
import ServiceList from '../services/ServiceList.jsx';
import FeaturedTourList from '../components/Featured-tours/FeaturedTourList.jsx';
import MasonryImagesGallery from '../components/Image-gallery/MasonryImagesGallery.jsx';
import Testimonials from '../components/Testimonial/Testimonials.jsx';
import Newsletter from '../shared/Newsletter.jsx';

import Aos from 'aos';
import 'aos/dist/aos.css';


const Home = () => {
  
  useEffect(() => {
  Aos.init({ duration: 2000 });
}, []);


  return <>
    {/* ========== hero section start ========== */}
  <section data-aos='fade-up'>
    <Container>
      <Row>
        <Col lg='6'>
          <div className='hero__content'>
            <div className='hero__subtitle d-flex align-items-center'>
              <Subtitle subtitle={'Know Before You Go'}/>
              <img src={worldImg} alt='' />
            </div>
            <h1>
            Unlock Your Travel 
               <span className='highlight'> Dream
                </span> With Us!
                </h1>
                <p>Discover the world's most adventurous nature, life is so short for a trip.</p>
          </div> 
        </Col>

        <Col lg='2'>
          <div className='hero__img-box hero__video-box mt-5 '>
            <video autoPlay loop src={heroVideo} alt='' controls/>
          </div>
        </Col>
        <Col lg='2'>
          <div className='hero__img-box mt-4'>
            <img src={heroImg02} alt='' />
          </div>
        </Col>
        <Col lg='2'>
          <div className='hero__img-box mt-6'>
            <video autoPlay loop src={heroVideo1} alt='' controls/>
          </div>
        </Col>

        <SearchBar />
      </Row>
    </Container>
  </section>
    {/* ========== hero section end ========== */}

<section data-aos='fade-up'>
  <Container>
  <Row>
    <Col lg='3'>
      <h5 className='services__subtitle'>What we serve</h5>
      <h2 className='services__title'>We offer our best services</h2>
    </Col>
    <ServiceList />
  </Row>
  </Container>
</section>

    {/* ========== featured tour section start ========== */}
    <section data-aos='fade-up'>
      <Container>
        <Row>
          <Col lg='12' className='mb-5'>
            <Subtitle subtitle={'Explore'} />
<h2 className='featured__tour-title'>Our Featured Tours</h2>
          </Col>
          <FeaturedTourList />
        </Row>
      </Container>
    </section>
    {/* ========== featured tour section end ========== */}
    
    {/* ========== experience section start ========== */}
    <section data-aos='fade-up'>
      <Container>
        <Row>
          <Col lg='6'>
          <div className="experience__content">
            <Subtitle subtitle={'Experience'} />

            <h2>With our all experience <br /> we will serve you</h2>
            <p>
Drawing upon our wealth of expertise, we are committed to delivering unparalleled  
              <br />service, ensuring an exceptional experience for every traveler.
            </p>
          </div>
          <div className="counter__wrapper d-flex align-items-center gap-5">
            <div className="counter__box">
              <span> 12k+ </span>
              <h6>Successfull Trip</h6>
            </div>
            <div className="counter__box">
              <span> 2k+ </span>
              <h6>Regular Clients</h6>
            </div> <div className="counter__box">
              <span> 15 </span>
              <h6>Years Experience</h6>
            </div>
          </div>
          </Col>
          <Col lg='6'>
            <div className="experience__img"></div>
            <img src={experienceImg} alt='' />
          </Col>
        </Row>
      </Container>
    </section>
    {/* ========== experience section end ========== */}

    {/* ========== gallery section start ========== */}
    <section data-aos='fade-up'>
      <Container>
        <Row>
          <Col lg='12'>
            <Subtitle subtitle={'Gallery'}/>
            <h2 className='gallery__title'>
              Visit our costumer tour gallery
              </h2>
          </Col>
          <Col lg='12'>
           <MasonryImagesGallery /> 
          </Col>
        </Row>
      </Container>
    </section>
    {/* ========== gallery section end ========== */}

    {/* ========== testimonial section start ========== */}
    <section data-aos='fade-up'>
      <Container>
        <Row>
          <Col lg='12'>
            <Subtitle subtitle={'Fans Love'}/>
            <h2 className='testimonial__title'>What our fans say about us</h2>
          </Col>
          <Col lg='12'>
            <Testimonials/>
          </Col>
        </Row>
      </Container>
    </section>
    {/* ========== testimonial section end ========== */}

  <Newsletter data-aos='fade-up'/>
  </>
}

export default Home