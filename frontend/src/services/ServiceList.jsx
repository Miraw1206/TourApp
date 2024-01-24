import React from 'react'
import ServiceCard from './ServiceCard.jsx';
import { Col } from 'reactstrap';

import weatherImg from '../assets/images/weather.png';
import guideImg from '../assets/images/guide.png';
import customizationImg from '../assets/images/customization.png';

const servicesData = [
    {
        imgUrl: weatherImg,
        title: 'Calculate weather',
        desc: ' real-time and forecasted weather information, temperature analysis, humidity levels, and personalized settings.',
    },
    {
        imgUrl: guideImg,
        title: 'Best Tour Guide',
        desc: 'Tour guides proficient in multiple languages, enhancing the travel experience with seamless communication for diverse and international audiences.',
    },
    {
        imgUrl: customizationImg,
        title: 'Customization',
        desc: 'Tailor your journey with personalized tour customization, ensuring a unique and unforgettable travel experience.',
    },
]


const ServiceList = () => {
  return (
    <>
    {
        servicesData.map((item, index) => 
        <Col lg='3' md='6' sm='12' className='mb-4' key={index}>
            <ServiceCard item={item}/>
        </Col>)
    }
    </>
    )
}

export default ServiceList