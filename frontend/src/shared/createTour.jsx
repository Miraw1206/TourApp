// import React, { useState, useContext } from 'react';
// import { useNavigate } from 'react-router-dom';
// import './createTour.css'
// import { Button } from 'reactstrap';


// import { AuthContext } from './../context/AuthContext.js';
// import { BASE_URL } from './../utils/config.js';

// const CreateTour = () => {
//   const [tourData, setTourData] = useState({
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

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setTourData({ ...tourData, [name]: value });
//   };

//   const handleCreateTour = async (e) => {
//     e.preventDefault();

//     dispatch({ type: 'CREATE_TOUR' });

//     try {
//       const res = await fetch(`${BASE_URL}/tours`, {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(tourData),
//       });

//       const data = await res.json();
//       console.log('Tour created:', data);
//       navigate(`/tour/${data._id}`);

//       // After creating the tour, hide the form
//       setIsFormVisible(false);
//     } catch (error) {
//       console.error('Error creating tour:', error);
//     }
//   };
//   const handleCancel = () => {
//     setIsFormVisible(false);
//     document.querySelector('.popup-form').classList.add('hidden');
// };

//   return (
//     <div >
//       <Button className='create' onClick={() => setIsFormVisible(true)}>Create Tour</Button>

//       {isFormVisible && (
//         <div className="popup-form">
//           <form>
//        <label>Title:</label>
//         <input type="text" name="title" value={tourData.title} onChange={handleChange} />

//         <label>City:</label>
//         <input type="text" name="city" value={tourData.city} onChange={handleChange} />

//         <label>Address:</label>
//         <input type="text" name="address" value={tourData.address} onChange={handleChange} />

//         <label>Distance:</label>
//         <input type="number" name="distance" value={tourData.distance} onChange={handleChange} />

//         <label>Photo:</label>
//         <input type="text" name="photo" value={tourData.photo} onChange={handleChange} />

//         <label>Description:</label>
//         <textarea name="desc" value={tourData.desc} onChange={handleChange} />

//         <label>Price:</label>
//         <input type="number" name="price" value={tourData.price} onChange={handleChange} />

//         <label>Max Group Size:</label>
//         <input type="number" name="maxGroupSize" value={tourData.maxGroupSize} onChange={handleChange} />

//         <label>Featured:</label>
//         <input type="checkbox" name="featured" checked={tourData.featured} onChange={handleChange} />

//         <Button type="Button" onClick={handleCreateTour}>
//         Create Tour
//       </Button>
//       <Button type="Button" className='cancel' onClick={handleCancel}>
//                         Cancel
//                       </Button>

//           </form>
//         </div>
//       )}

//     </div>
//   );
// };

// export default CreateTour;


import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import './createTour.css';
import { Button } from 'reactstrap';

import { AuthContext } from './../context/AuthContext.js';
import { BASE_URL } from './../utils/config.js';

const CreateTour = () => {
  const [tourData, setTourData] = useState({
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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTourData({ ...tourData, [name]: value });
  };

  const handleCreateTour = async (e) => {
    e.preventDefault();

    if (currentStep < 4) {
      setCurrentStep(currentStep + 1);
    } else {
      dispatch({ type: 'CREATE_TOUR' });

      try {
        const res = await fetch(`${BASE_URL}/tours`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(tourData),
        });

        const data = await res.json();
        console.log('Tour created:', data);
        navigate(`/tour/${data._id}`);

        // After creating the tour, hide the form
        setIsFormVisible(false);
      } catch (error) {
        console.error('Error creating tour:', error);
      }
    }
  };

  const handleCancel = () => {
    setCurrentStep(1);
    setIsFormVisible(false);
    document.querySelector('.popup-form').classList.add('hidden');
  };

  return (
    <div>
      <Button className="create" onClick={() => setIsFormVisible(true)}>
        Create Tour
      </Button>

      {isFormVisible && (
        <div className="popup-form">
          <form>
            {currentStep === 1 && (
              <>
                <label>Title:</label>
                <input
                  type="text"
                  name="title"
                  value={tourData.title}
                  onChange={handleChange}
                />

                <label>City:</label>
                <input
                  type="text"
                  name="city"
                  value={tourData.city}
                  onChange={handleChange}
                />

                <label>Address:</label>
                <input
                  type="text"
                  name="address"
                  value={tourData.address}
                  onChange={handleChange}
                />

                <label>Distance:</label>
                <input
                  type="number"
                  name="distance"
                  value={tourData.distance}
                  onChange={handleChange}
                />
              </>
            )}

            {currentStep === 2 && (
              <>
                <label>Photo:</label>
                <input
                  type="text"
                  name="photo"
                  value={tourData.photo}
                  onChange={handleChange}
                />

                <label>Description:</label>
                <textarea
                  name="desc"
                  value={tourData.desc}
                  onChange={handleChange}
                />
              </>
            )}

            {currentStep === 3 && (
              <>
                <label>Price:</label>
                <input
                  type="number"
                  name="price"
                  value={tourData.price}
                  onChange={handleChange}
                />

                <label>Max Group Size:</label>
                <input
                  type="number"
                  name="maxGroupSize"
                  value={tourData.maxGroupSize}
                  onChange={handleChange}
                />

                <label>Featured:</label>
                <input 
                  type="checkbox" className='featured'
                  name="featured"
                  checked={tourData.featured}
                  onChange={handleChange}
                />
              </>
            )}
<Button type="button" className="cancel" onClick={handleCancel}>
            <i class="ri-close-fill"></i>
            </Button>
            <Button type="button" onClick={handleCreateTour}>
              {currentStep < 4 ?                   <i class="ri-arrow-right-circle-line"></i>
 : 'Create Tour'}
            </Button>
            
          </form>
        </div>
      )}
    </div>
  );
};

export default CreateTour;
