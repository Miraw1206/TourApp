import React ,{useEffect} from 'react'
import Slider from 'react-slick';
import ava01 from '../../assets/images/ava-1.jpg'
import ava02 from '../../assets/images/ava-2.jpg'
import ava03 from '../../assets/images/ava-3.jpg'
import Aos from 'aos';
import 'aos/dist/aos.css';

const Testimonials = () => {
    useEffect(() => {
        Aos.init({ duration: 2000 });
      }, []);
      
    const settings = {
        dots: true,
        infinite: true,
        autoplay: true,
        speed: 1000,
        swipeToSlide: true,
        autoplaySpeed: 2000,
        slidesToShow: 3,

        responsive:[
            {
                breakPoint: 992, 
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                }
            },   
            {
                breakPoint: 576, 
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    }

  return (
  <Slider {...settings} data-aos='fade-up'>
<div className='testimonial py-4 px-3'>
 <p>How am i supposed to know what to write here ?
    its just a random text till i notice and change it 
 </p>

 <div className='d-flex align-items-center gap-4 mt-3'>
    <img src={ava01} className='w-25 h-25 rounded-2' alt='' />
<div>
    <h6 className='mb-0 mt-3'>John Doe</h6>
    <p>Customer</p>
    </div> 
</div>
</div>
<div className='testimonial py-4 px-3'>
 <p>How am i supposed to know what to write here ?
    its just a random text till i notice and change it 
 </p>

 <div className='d-flex align-items-center gap-4 mt-3'>
    <img src={ava02} className='w-25 h-25 rounded-2' alt='' />
<div>
    <h6 className='mb-0 mt-3'>John Doe</h6>
    <p>Customer</p>
    </div> 
</div>
</div>
<div className='testimonial py-4 px-3'>
 <p>How am i supposed to know what to write here ?
    its just a random text till i notice and change it 
 </p>

 <div className='d-flex align-items-center gap-4 mt-3'>
    <img src={ava03} className='w-25 h-25 rounded-2' alt='' />
<div>
    <h6 className='mb-0 mt-3'>John Doe</h6>
    <p>Customer</p>
    </div> 
</div>
</div>
<div className='testimonial py-4 px-3'>
 <p>How am i supposed to know what to write here ?
    its just a random text till i notice and change it 
 </p>

 <div className='d-flex align-items-center gap-4 mt-3'>
    <img src={ava01} className='w-25 h-25 rounded-2' alt='' />
<div>
    <h6 className='mb-0 mt-3'>Paul Floris</h6>
    <p>Customer</p>
    </div> 
</div>
</div>
<div className='testimonial py-4 px-3'>
 <p>How am i supposed to know what to write here ?
    its just a random text till i notice and change it 
 </p>

 <div className='d-flex align-items-center gap-4 mt-3'>
    <img src={ava02} className='w-25 h-25 rounded-2' alt='' />
<div>
    <h6 className='mb-0 mt-3'>Tony Muller</h6>
    <p>Customer</p>
    </div> 
</div>
</div>
<div className='testimonial py-4 px-3'>
 <p>How am i supposed to know what to write here ?
    its just a random text till i notice and change it 
 </p>

 <div className='d-flex align-items-center gap-4 mt-3'>
    <img src={ava03} className='w-25 h-25 rounded-2' alt='' />
<div>
    <h6 className='mb-0 mt-3'>Sam Baker</h6>
    <p>Customer</p>
    </div> 
</div>
</div>
  </Slider>
  )
}

export default Testimonials