// import React, { useState, useEffect, useContext } from 'react';
// import { Container, Row, Col, Form, FormGroup, Button } from 'reactstrap';
// import { useNavigate } from 'react-router-dom';
// import '../styles/updateTour.css';
// import { AuthContext } from './../context/AuthContext.js';
// import { BASE_URL } from './../utils/config.js';

// const UpdateTour = ({ tour }) => {
//   const [update, setUpdate] = useState({
//     title: '',
//     city: '',
//     address: '',
//     distance: 0,
//     photo: '',
//     desc: '',
//     price: 0,
//     maxGroupSize: 0,
//     featured: false,
//   });

//   const [isFormVisible, setIsFormVisible] = useState(false);
//   const { dispatch } = useContext(AuthContext);
//   const navigate = useNavigate();

//   useEffect(() => {
//     if (tour) {
//       setUpdate({
//         title: tour.title,
//         city: tour.city,
//         address: tour.address,
//         distance: tour.distance,
//         photo: tour.photo,
//         desc: tour.desc,
//         price: tour.price,
//         maxGroupSize: tour.maxGroupSize,
//         featured: tour.featured,
//       });
//     }
//   }, [tour]);

//   const handleChange = (e) => {
//     setUpdate((prev) => ({ ...prev, [e.target.id]: e.target.value }));
//   };

//   const handleClick = async (e) => {
//     e.preventDefault();
//     dispatch({ type: 'UPDATE_TOUR' });

//     try {
//       const res = await fetch(`${BASE_URL}/tours/:id`, {
//         method: 'PUT',
//         headers: {
//           'content-type': 'application/json',
//         },
//         credentials: 'include',
//         body: JSON.stringify(update),
//       });

//       const result = await res.json();
//       if (!res.ok) alert(result.message);


//       dispatch({ type: 'UPDATE_SUCCESS', payload: result.data });
//       navigate('/tours');
//     } catch (err) {
//       dispatch({ type: 'UPDATE_FAILURE', payload: err.message });
//     }

//   };

//   const handleCancel = () => {
//     setIsFormVisible(false);
//     document.querySelector('.popup-form').classList.add('hidden');
// };

//   return (
//     <div className={`popup-form ${isFormVisible ? 'visible' : ''}`}>
//       <Container>
//         <Row>
//           <Col lg='8' className='m-auto'>
//             <div className='tour__container d-flex justify-content-between'>
//               <div className='tour__form'>
//                 <div className='tour'></div>
//                 <h2>UPDATE TOUR</h2>

//                 <Form onSubmit={handleClick}>
//                       <FormGroup>
//                         <label>Title:</label>
//                         <input type="text" id="title" value={update.title} onChange={handleChange} />
//                       </FormGroup>
//                       <FormGroup>
//                         <label>City:</label>
//                         <input type="text" id="city" value={update.city} onChange={handleChange} />
//                       </FormGroup>
//                       <FormGroup>
//                         <label>Address:</label>
//                         <input type="text" id="address" value={update.address} onChange={handleChange} />
//                       </FormGroup>
//                       <FormGroup>
//                         <label>Distance:</label>
//                         <input type="number" id="distance" value={update.distance} onChange={handleChange} />
//                       </FormGroup>
//                       <FormGroup>
//                         <label>Image:</label>
//                         <input type="text" id="photo" value={update.photo} onChange={handleChange} />
//                       </FormGroup>
//                       <FormGroup>
//                         <label>Tour Description:</label>
//                         <textarea id="desc" value={update.desc} onChange={handleChange} />
//                       </FormGroup>
//                       <FormGroup>
//                         <label>Price:</label>
//                         <input type="number" id="price" value={update.price} onChange={handleChange} />
//                       </FormGroup>
//                       <FormGroup>
//                         <label>Group size:</label>
//                         <input type="number" id="maxGroupSize" value={update.maxGroupSize} onChange={handleChange} />
//                       </FormGroup>
//                       <FormGroup>
//                         <label>Featured:</label>
//                         <input type="checkbox" id="featured" checked={update.featured} onChange={handleChange} />
//                       </FormGroup>

//                       <Button type="button" onClick={handleClick}>
//                         Update Tour
//                       </Button>
//                       <Button type="button" className='cancel' onClick={handleCancel}>
//                         Cancel
//                       </Button>
//                     </Form>
//               </div>
//             </div>
//           </Col>
//         </Row>
//       </Container>
//     </div>
//   );
// };

// export default UpdateTour;


import React, { useState, useEffect, useContext } from 'react';
import { Container, Row, Col, Form, FormGroup, Button } from 'reactstrap';
import { useNavigate } from 'react-router-dom';
import '../styles/updateTour.css';
import { AuthContext } from './../context/AuthContext.js';
import { BASE_URL } from './../utils/config.js';

const UpdateTour = ({ tour }) => {
  const [update, setUpdate] = useState({
    title: '',
    city: '',
    address: '',
    distance: 0,
    photo: '',
    desc: '',
    price: 0,
    maxGroupSize: 0,
    featured: false,
  });

  const [currentStep, setCurrentStep] = useState(1);
  const [isFormVisible, setIsFormVisible] = useState(false);
  const { dispatch } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (tour) {
      setUpdate({
        title: tour.title,
        city: tour.city,
        address: tour.address,
        distance: tour.distance,
        photo: tour.photo,
        desc: tour.desc,
        price: tour.price,
        maxGroupSize: tour.maxGroupSize,
        featured: tour.featured,
      });
    }
  }, [tour]);

  const handleChange = (e) => {
    setUpdate((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleNextStep = () => {
    setCurrentStep((prevStep) => prevStep + 1);
  };

  const handleClick = async (e) => {
    e.preventDefault();

    if (currentStep < 4) {
      handleNextStep();
    } else {
      dispatch({ type: 'UPDATE_TOUR' });

      try {
        const res = await fetch(`${BASE_URL}/tours/:id`, {
          method: 'PUT',
          headers: {
            'content-type': 'application/json',
          },
          credentials: 'include',
          body: JSON.stringify(update),
        });

        const result = await res.json();
        if (!res.ok) alert(result.message);

        dispatch({ type: 'UPDATE_SUCCESS', payload: result.data });
        navigate('/tours');
      } catch (err) {
        dispatch({ type: 'UPDATE_FAILURE', payload: err.message });
      }
    }
  };

  const handleCancel = () => {
    setCurrentStep(1);
    setIsFormVisible(false);
    document.querySelector('.popup-form').classList.add('hidden');
  };

  return (
    <div className={`popup-form ${isFormVisible ? 'visible' : ''}`}>
      <Container>
        <Row>
          <Col lg='8' className='m-auto'>
            <div className='tour__container d-flex justify-content-between'>
              <div className='tour__form'>
                <div className='tour'></div>
                <h2>UPDATE TOUR</h2>

                <Form onSubmit={handleClick}>
                  {currentStep === 1 && (
                    <>
                      <FormGroup>
                        <label>Title:</label>
                        <input type="text" id="title" value={update.title} onChange={handleChange} />
                      </FormGroup>
                      <FormGroup>
                        <label>City:</label>
                        <input type="text" id="city" value={update.city} onChange={handleChange} />
                      </FormGroup>
                      <FormGroup>
                        <label>Address:</label>
                        <input type="text" id="address" value={update.address} onChange={handleChange} />
                      </FormGroup>
                      <FormGroup>
                        <label>Distance:</label>
                        <input type="number" id="distance" value={update.distance} onChange={handleChange} />
                      </FormGroup>
                    </>
                  )}

                  {currentStep === 2 && (
                    <>
                      <FormGroup>
                        <label>Image:</label>
                        <input type="text" id="photo" value={update.photo} onChange={handleChange} />
                      </FormGroup>
                      <FormGroup>
                        <label>Tour Description:</label>
                        <textarea id="desc" value={update.desc} onChange={handleChange} />
                      </FormGroup>
                    </>
                  )}

                  {currentStep === 3 && (
                    <>
                      <FormGroup>
                        <label>Price:</label>
                        <input type="number" id="price" value={update.price} onChange={handleChange} />
                      </FormGroup>
                      <FormGroup>
                        <label>Group size:</label>
                        <input type="number" id="maxGroupSize" value={update.maxGroupSize} onChange={handleChange} />
                      </FormGroup>
                      <FormGroup>
                        <label>Featured:</label>
                        <input type="checkbox" id="featured" checked={update.featured} onChange={handleChange} />
                      </FormGroup>
                    </>
                  )}
 <Button type="button" className='cancel' onClick={handleCancel}>
                  <i class="ri-close-fill"></i>
                  </Button>
                  <Button type="button" onClick={handleClick}>
                    {currentStep < 4 ? <i class="ri-arrow-right-circle-line"></i> : 'Update Tour'}
                  </Button>
                 
                </Form>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default UpdateTour;


