// import React from 'react';
// import { useNavigate } from 'react-router-dom';

// const Tripdata = ({ image, heading, text, id, price }) => {
//   const navigate = useNavigate();

//   const handleBookNowClick = () => {
//     // Redirect to the booking form page with trip details as URL parameters
//     navigate(`/booking/${id}?heading=${encodeURIComponent(heading)}&price=${encodeURIComponent(price)}`);
//   };

//   return (
//     <div className="t-card">
//       <div className="t-image">
//         <img src={image} alt="image" />
//       </div>
//       <div className="trip-description">
//         <h4>{heading}</h4>
//         <p>{text}</p>
//       </div>
//       <button onClick={handleBookNowClick} className="book-now-button">Book Now</button>
//     </div>
//   );
// };

// export default Tripdata;


// import React from 'react';
// import { useNavigate } from 'react-router-dom';

// const TripData = ({ image, heading, text, id, price }) => {
//   const navigate = useNavigate();

//   const handleBookNowClick = () => {
//     // Redirect to the booking form page with trip details as URL parameters
//     navigate(`/booking/${id}?heading=${encodeURIComponent(heading)}&price=${encodeURIComponent(price)}`);
//   };

//   return (
//     <div className="t-card">
//       <div className="t-image">
//         <img src={image} alt="image" />
//       </div>
//       <div className="trip-description">
//         <h4>{heading}</h4>
//         <p>{text}</p>
//       </div>
//       <button onClick={handleBookNowClick} className="book-now-button">Book Now</button>
//     </div>
//   );
// };

// export default TripData;



import React from 'react';
import { useNavigate } from 'react-router-dom';

const TripData = ({ image, heading, text, id, price }) => {
  const navigate = useNavigate();

  const handleBookNowClick = () => {
    // Redirect to the booking form page with trip details as URL parameters
    navigate(`/booking/${id}?heading=${encodeURIComponent(heading)}&price=${encodeURIComponent(price)}`);
  };

  return (
    <div className="t-card">
      <div className="t-image">
        <img src={image} alt="image" />
      </div>
      <div className="trip-description">
        <h4>{heading}</h4>
        <p>{text}</p>
        <p>Price: ₹{price}</p>
      </div>
      <button onClick={handleBookNowClick} className="book-now-button">Book Now</button>
    </div>
  );
};

export default TripData;
