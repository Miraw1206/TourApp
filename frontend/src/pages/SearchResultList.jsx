import React, {useState, useEffect} from 'react';

import Aos from 'aos';
import 'aos/dist/aos.css'; 

import CommonSection from './../shared/CommonSection.jsx';
import {Container, Row, Col} from 'reactstrap';

import { useLocation } from 'react-router-dom';
import TourCard from '../shared/TourCard.jsx';
import Newsletter from './../shared/Newsletter.jsx'

const SearchResultList = () => {
  const location = useLocation()

  const [data] = useState(location.state)
  console.log(data)

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);


  return (
    <>
      <CommonSection title={'Tour Search Result'} />
      <section data-aos='fade-up'>
        <Container>
          <Row>
            {data?.length === 0 ? (
              <h4 className='text-center'> No Tour Found </h4>
            ) : (
              data?.map((tour) => (
                <Col lg='3' className='mb-4' key={tour._id}>
                  <TourCard tour={tour} />
                </Col>
              ))
            )}
          </Row>
        </Container>
      </section>
      <Newsletter />
    </>
  );
  
              }
export default SearchResultList