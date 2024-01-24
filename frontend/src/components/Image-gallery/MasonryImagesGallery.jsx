import React, {useEffect} from 'react';
import galleryImages from './galleryImages';
import Masonry,  { ResponsiveMasonry } from 'react-responsive-masonry';
import Aos from 'aos';
import 'aos/dist/aos.css';

const MasonryImagesGallery = () => {

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
<ResponsiveMasonry columnsCountBreakPoints={{350:1, 768:3, 992:4}} data-aos='fade-up'>
<Masonry gutter='1rem' >
{
    galleryImages.map((item, index) => (
        <img 
        className='masonry__img'
        src={item} 
        key={index} 
        alt=''
        style={{width: "100%", display: "block", borderRadius: "10px"}}
        />
    ))
}
</Masonry>
</ResponsiveMasonry>
  )
}

export default MasonryImagesGallery