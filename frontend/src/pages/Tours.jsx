import React, {useState, useEffect} from 'react'
import CommonSection from '../shared/CommonSection.jsx'

import '../styles/tour.css'
import TourCard from './../shared/TourCard.jsx'
import SearchBar from './../shared/SearchBar.jsx'
import Newsletter from './../shared/Newsletter.jsx'
import { Container, Row, Col } from 'reactstrap'
import CreateTour from '../shared/createTour.jsx'


import useFetch from '../hooks/useFetch.js';
import { BASE_URL } from '../utils/config.js'

import Aos from 'aos';
import 'aos/dist/aos.css';

import LoadingSpinner from '../shared/LoadingSpinner.jsx'

const Tours = () => {

  const [pageCount, setPageCount] = useState(0)
  const [page,setPage] = useState(0)

  const {data:tours, loading, error} = useFetch(`${BASE_URL}/tours?page=${page}`)
  const {data:tourCount} = useFetch(`${BASE_URL}/tours/search/getTourCount`)

useEffect(() => {

  const pages = Math.ceil(tourCount/ 8)
setPageCount(pages)
window.scrollTo(0,0)
}, [page, tourCount, tours])

useEffect(() => {
  Aos.init({ duration: 2000 });
}, []);

 
  return (
 <>

 <CommonSection title={'All Tours'}/>
<section data-aos='fade-up'>
  <Container>
    <Row>
     <SearchBar/>
    </Row>
  </Container>
</section>
 <CreateTour/>

{loading && <LoadingSpinner />}

<section className='pt-0' data-aos='fade-up'>
  <Container>

    {loading && <h4 className='text-center pt-5'>Loading ..... </h4>}
    {error && <h4 className='text-center pt-5'>{error}</h4>}

    {
      !loading && !error &&    (  
      <Row>
      {tours?.map(tour => (
      <Col lg='3' md='6' sm='6' key={tour._id}>
         <TourCard tour={tour}/>
         </Col>
         ))}
    
         <Col lg='12'>
          <div className='pagination d-flex alighn-items-center
          justify-content-center mt-4 gap-3'>
            {[...Array(pageCount).keys()].map(number => (
            <span 
            key={number} 
            onClick={()=> setPage(number)}
            className={page===number ? 'active__page' : ''}
            >
              {number + 1}
            </span>
            ))}
          </div>
          </Col>
        </Row> )
    }
  </Container>
</section >
<Newsletter/>
 </>
  )
}


export default Tours

