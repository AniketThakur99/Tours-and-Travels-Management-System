// import React, { useState, useEffect } from 'react';
// import { Form, FormControl } from 'react-bootstrap';
// import moment from 'moment';
// import { useNavigate, useParams } from 'react-router-dom';
// // import Navbar from '../Navbar'; // Assuming Navbar is not used in this component
// import axios from 'axios'; // Import Axios
// import './BookingFormStyles.css';

// const BookingForm = () => {
//   const navigate = useNavigate();
//   const { id } = useParams();

//   const [validated, setValidated] = useState(false);
//   const [errorMessage, setErrorMessage] = useState('');
//   const [booking, setBooking] = useState({
//     guestFullName: '',
//     guestEmail: '',
//     checkInDate: '',
//     checkOutDate: '',
//     numOfGuests: '',
//     price: '',
//     destinationName: '',
//     isAvaliable: '',
//     description: '',
//     about: '',
//     photo: ''
//   });

//   useEffect(() => {
//     const fetchTripDetails = async () => {
//       try {
//         const response = await axios.get(`http://localhost:8080/trips/${id}`);
//         setBooking(prevBooking => ({
//           ...prevBooking,
//           ...response.data
//         }));
//       } catch (error) {
//         console.error('Error fetching trip details:', error);
//         setErrorMessage('Failed to fetch trip details. Please try again later.');
//       }
//     };

//     fetchTripDetails();
//   }, [id]);

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setBooking({ ...booking, [name]: value });
//     setErrorMessage('');
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const form = e.currentTarget;
//     if (form.checkValidity() === false || !isCheckOutDateValid()) {
//       e.stopPropagation();
//     } else {
//       // Handle form submission
//       console.log('Booking Details:', booking);
//       setValidated(true);
//     }
//   };

//   const isCheckOutDateValid = () => {
//     if (!moment(booking.checkOutDate).isSameOrAfter(moment(booking.checkInDate))) {
//       setErrorMessage('Check-out date must be after check-in date');
//       return false;
//     } else {
//       setErrorMessage('');
//       return true;
//     }
//   };

//   return (
//     <div>
//       {/* <Navbar /> */}
//       <div className="container" style={{ paddingTop: '80px' }}>
//         <div className="row">
//           <div className="col-md-6">
//             <h4>Reservation Details</h4>
//             <p>Heading: {booking.heading}</p>
//             <p>Description: {booking.description}</p>
//             <p>Image: {booking.image}</p>
//             <p>Price: ₹{booking.price} per night</p>
//           </div>
//           <div className="col-md-6">
//             <div className="booking-form-container">
//               <h4 className="mb-4">Reservation Form</h4>
//               <Form noValidate validated={validated} onSubmit={handleSubmit}>
//                 <Form.Group controlId="checkInDate">
//                   <Form.Label>Check-in Date</Form.Label>
//                   <FormControl
//                     required
//                     type="date"
//                     name="checkInDate"
//                     value={booking.checkInDate}
//                     onChange={handleInputChange}
//                     min={moment().format('YYYY-MM-DD')}
//                   />
//                   <Form.Control.Feedback type="invalid">Please select a valid check-in date.</Form.Control.Feedback>
//                 </Form.Group>
//                 <Form.Group controlId="checkOutDate">
//                   <Form.Label>Check-out Date</Form.Label>
//                   <FormControl
//                     required
//                     type="date"
//                     name="checkOutDate"
//                     value={booking.checkOutDate}
//                     onChange={handleInputChange}
//                     min={moment().add(1, 'day').format('YYYY-MM-DD')}
//                   />
//                   <Form.Control.Feedback type="invalid">Please select a valid check-out date.</Form.Control.Feedback>
//                 </Form.Group>
//                 <Form.Group controlId="numOfGuests">
//                   <Form.Label>Number of Guests</Form.Label>
//                   <FormControl
//                     required
//                     type="number"
//                     name="numOfGuests"
//                     value={booking.numOfGuests}
//                     onChange={handleInputChange}
//                     min={1}
//                   />
//                   <Form.Control.Feedback type="invalid">Please enter at least 1 guest.</Form.Control.Feedback>
//                 </Form.Group>
//                 <div className="form-group mt-4 mb-2">
//                   <button type="submit" className="btn btn-hotel">
//                     Continue
//                   </button>
//                 </div>
//               </Form>
//               {errorMessage && <p className="text-danger">{errorMessage}</p>}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default BookingForm;

//-------------------------------------------------------------------------new code----------------------------------------

// import React, { useState, useEffect } from 'react';
// import { Form, FormControl } from 'react-bootstrap';
// import moment from 'moment';
// import { useNavigate, useParams } from 'react-router-dom';
// import axios from 'axios'; // Import Axios
// import './BookingFormStyles.css';

// const BookingForm = () => {
//   const navigate = useNavigate();
//   const { id } = useParams();

//   const [validated, setValidated] = useState(false);
//   const [errorMessage, setErrorMessage] = useState('');
//   const [booking, setBooking] = useState({
    
   
//     checkInDate: '',
//     checkOutDate: '',
//     numOfGuests: '',
//     price: '',
//     heading: '',
//     isAvaliable: '',
//   });

//   useEffect(() => {
//     const fetchTripDetails = async () => {
//       try {
//         const response = await axios.get(`http://localhost:8080/trips/${id}`);
//         setBooking(prevBooking => ({
//           ...prevBooking,
//           ...response.data
//         }));
//       } catch (error) {
//         console.error('Error fetching trip details:', error);
//         setErrorMessage('Failed to fetch trip details. Please try again later.');
//       }
//     };

//     fetchTripDetails();
//   }, [id]);

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setBooking({ ...booking, [name]: value });
//     setErrorMessage('');
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const form = e.currentTarget;
//     if (form.checkValidity() === false || !isCheckOutDateValid()) {
//       e.stopPropagation();
//     } else {
//       try {
//         // Send a POST request to the backend API to save the booking details
//         const response = await axios.post('http://localhost:8080/booking', booking);
//         if (!response.ok) {
//           throw new Error('Failed to save booking details');
//         }
//         // Redirect the user to a new page to view their booking details
//         navigate('/booking-details');
//       } catch (error) {
//         console.error('Error saving booking details:', error);
//         setErrorMessage('Failed to save booking details. Please try again later.');
//       }
//       setValidated(true);
//     }
//   };

//   const isCheckOutDateValid = () => {
//     if (!moment(booking.checkOutDate).isSameOrAfter(moment(booking.checkInDate))) {
//       setErrorMessage('Check-out date must be after check-in date');
//       return false;
//     } else {
//       setErrorMessage('');
//       return true;
//     }
//   };

//   return (
//     <div>
//       <div className="container" style={{ paddingTop: '80px' }}>
//         <div className="row">
//           <div className="col-md-6">
//             <h4>Reservation Details</h4>
//             <p>Heading: {booking.heading}</p>
//             <p>Description: {booking.description}</p>
//             <p>Image: {booking.image}</p>
//             <p>Price: ₹{booking.price} per night</p>
//           </div>
//           <div className="col-md-6">
//             <div className="booking-form-container">
//               <h4 className="mb-4">Reservation Form</h4>
//               <Form noValidate validated={validated} onSubmit={handleSubmit}>
//                 <Form.Group controlId="checkInDate">
//                   <Form.Label>Check-in Date</Form.Label>
//                   <FormControl
//                     required
//                     type="date"
//                     name="checkInDate"
//                     value={booking.checkInDate}
//                     onChange={handleInputChange}
//                     min={moment().format('YYYY-MM-DD')}
//                   />
//                   <Form.Control.Feedback type="invalid">Please select a valid check-in date.</Form.Control.Feedback>
//                 </Form.Group>
//                 <Form.Group controlId="checkOutDate">
//                   <Form.Label>Check-out Date</Form.Label>
//                   <FormControl
//                     required
//                     type="date"
//                     name="checkOutDate"
//                     value={booking.checkOutDate}
//                     onChange={handleInputChange}
//                     min={moment().add(1, 'day').format('YYYY-MM-DD')}
//                   />
//                   <Form.Control.Feedback type="invalid">Please select a valid check-out date.</Form.Control.Feedback>
//                 </Form.Group>
//                 <Form.Group controlId="numOfGuests">
//                   <Form.Label>Number of Guests</Form.Label>
//                   <FormControl
//                     required
//                     type="number"
//                     name="numOfGuests"
//                     value={booking.numOfGuests}
//                     onChange={handleInputChange}
//                     min={1}
//                   />
//                   <Form.Control.Feedback type="invalid">Please enter at least 1 guest.</Form.Control.Feedback>
//                 </Form.Group>
//                 <div className="form-group mt-4 mb-2">
//                   <button type="submit" className="btn btn-hotel">
//                     Continue
//                   </button>
//                 </div>
//               </Form>
//               {errorMessage && <p className="text-danger">{errorMessage}</p>}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default BookingForm;
//--------------------------------------------------------------------newcode------------------------------------------------------

// import React, { useState, useEffect } from 'react';
// import { Form, FormControl } from 'react-bootstrap';
// import moment from 'moment';
// import { useNavigate, useParams } from 'react-router-dom';
// import axios from 'axios'; // Import Axios
// import './BookingFormStyles.css';

// const BookingForm = () => {
//   const navigate = useNavigate();
//   const { id } = useParams();

//   const [validated, setValidated] = useState(false);
//   const [errorMessage, setErrorMessage] = useState('');
//   const [booking, setBooking] = useState({
//     guestFullName: '',
//     guestEmail: '',
//     checkInDate: '',
//     checkOutDate: '',
//     numOfGuests: '',
//     heading: '',
//     price: ''
//   });

//   useEffect(() => {
//     const fetchTripDetails = async () => {
//       try {
//         const response = await axios.get(`http://localhost:8080/trips/${id}`);
//         setBooking(prevBooking => ({
//           ...prevBooking,
//           ...response.data
//         }));
//       } catch (error) {
//         console.error('Error fetching trip details:', error);
//         setErrorMessage('Failed to fetch trip details. Please try again later.');
//       }
//     };

//     fetchTripDetails();
//   }, [id]);

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setBooking({ ...booking, [name]: value });
//     setErrorMessage('');
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const form = e.currentTarget;
//     if (form.checkValidity() === false || !isCheckOutDateValid()) {
//       e.stopPropagation();
//     } else {
//       try {
//         // Add heading and price to the booking object before sending
//         const dataToSend = { ...booking, heading: booking.heading, price: booking.price };
//         console.log(dataToSend)
//         // Send a POST request to the backend API to save the booking details
//         const response = await axios.post('http://localhost:8080/booking', dataToSend);
//         if (response.status >= 200 && response.status < 300) {
//           // Redirect the user to a new page to view their booking details
//           navigate('/booking-details');
//         } else {
//           throw new Error('Failed to save booking details');
//         }
//       } catch (error) {
//         console.error('Error saving booking details:', error);
//         setErrorMessage('Failed to save booking details. Please try again later.');
//       }
//       setValidated(true);
//     }
//   };

//   const isCheckOutDateValid = () => {
//     if (!moment(booking.checkOutDate).isSameOrAfter(moment(booking.checkInDate))) {
//       setErrorMessage('Check-out date must be after check-in date');
//       return false;
//     } else {
//       setErrorMessage('');
//       return true;
//     }
//   };

//   return (
//     <div>
//       <div className="container" style={{ paddingTop: '80px' }}>
//         <div className="row">
//           <div className="col-md-6">
//             <h4>Reservation Details</h4>
//             <p>Heading: {booking.heading}</p>
//             <p>Description: {booking.description}</p>
//             <p>Price: ₹{booking.price} per night</p>
//           </div>
//           <div className="col-md-6">
//             <div className="booking-form-container">
//               <h4 className="mb-4">Reservation Form</h4>
//               <Form noValidate validated={validated} onSubmit={handleSubmit}>
//                 <Form.Group controlId="guestFullName">
//                   <Form.Label>Full Name</Form.Label>
//                   <FormControl
//                     required
//                     type="text"
//                     name="guestFullName"
//                     value={booking.guestFullName}
//                     onChange={handleInputChange}
//                   />
//                 </Form.Group>
//                 <Form.Group controlId="guestEmail">
//                   <Form.Label>Email</Form.Label>
//                   <FormControl
//                     required
//                     type="email"
//                     name="guestEmail"
//                     value={booking.guestEmail}
//                     onChange={handleInputChange}
//                   />
//                 </Form.Group>
//                 <Form.Group controlId="checkInDate">
//                   <Form.Label>Check-in Date</Form.Label>
//                   <FormControl
//                     required
//                     type="date"
//                     name="checkInDate"
//                     value={booking.checkInDate}
//                     onChange={handleInputChange}
//                     min={moment().format('YYYY-MM-DD')}
//                   />
//                   <Form.Control.Feedback type="invalid">Please select a valid check-in date.</Form.Control.Feedback>
//                 </Form.Group>
//                 <Form.Group controlId="checkOutDate">
//                   <Form.Label>Check-out Date</Form.Label>
//                   <FormControl
//                     required
//                     type="date"
//                     name="checkOutDate"
//                     value={booking.checkOutDate}
//                     onChange={handleInputChange}
//                     min={moment().add(1, 'day').format('YYYY-MM-DD')}
//                   />
//                   <Form.Control.Feedback type="invalid">Please select a valid check-out date.</Form.Control.Feedback>
//                 </Form.Group>
//                 <Form.Group controlId="numOfGuests">
//                   <Form.Label>Number of Guests</Form.Label>
//                   <FormControl
//                     required
//                     type="number"
//                     name="numOfGuests"
//                     value={booking.numOfGuests}
//                     onChange={handleInputChange}
//                     min={1}
//                   />
//                   <Form.Control.Feedback type="invalid">Please enter at least 1 guest.</Form.Control.Feedback>
//                 </Form.Group>
//                 <div className="form-group mt-4 mb-2">
//                   <button type="submit" className="btn btn-hotel">
//                     Continue
//                   </button>
//                 </div>
//               </Form>
//               {errorMessage && <p className="text-danger">{errorMessage}</p>}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default BookingForm;

//------------------------------------------------newcode-----------------------------------------------------------------------

import React, { useState, useEffect } from 'react';
import { Form, FormControl } from 'react-bootstrap';
import moment from 'moment';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import './BookingFormStyles.css';
import Navbar from '../Navbar';
import { useSelector } from 'react-redux';

const BookingForm = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  //const userId=useSelector(state=> state.id.value)

  const [validated, setValidated] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [booking, setBooking] = useState({
    guestFullName: '',
    guestEmail: '',
    checkInDate: '',
    checkOutDate: '',
    numOfGuests: '',
    heading: '',
    price: '',
    description: '',
    image: ''
  });

  useEffect(() => {
    const fetchTripDetails = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/trips/${id}`);
        const { heading, price, description, image } = response.data;
        setBooking(prevBooking => ({
          ...prevBooking,
          heading,
          price,
          description,
          image
        }));
      } catch (error) {
        console.error('Error fetching trip details:', error);
        setErrorMessage('Failed to fetch trip details. Please try again later.');
      }
    };

    fetchTripDetails();
  }, [id]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setBooking({ ...booking, [name]: value });
    setErrorMessage('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    if (form.checkValidity() === false || !isCheckOutDateValid()) {
      e.stopPropagation();
    } else {
      try {
        // Send only the required data to the backend
        const dataToSend = {
          guestFullName: booking.guestFullName,
          guestEmail: booking.guestEmail,
          checkInDate: booking.checkInDate,
          checkOutDate: booking.checkOutDate,
          numOfGuests: booking.numOfGuests,
          heading: booking.heading,
          price: booking.price,
          userId: 1
        };
        console.log(dataToSend)
        // Send a POST request to the backend API to save the booking details
        const response = await axios.post('http://localhost:8080/booking', dataToSend);
        if (response.status >= 200 && response.status < 300) {
          // Redirect the user to a new page to view their booking details
          navigate('/booking-details');
        } else {
          throw new Error('Failed to save booking details');
        }
      } catch (error) {
        console.error('Error saving booking details:', error);
        setErrorMessage('Failed to save booking details. Please try again later.');
      }
      setValidated(true);
    }
  };

  const isCheckOutDateValid = () => {
    if (!moment(booking.checkOutDate).isSameOrAfter(moment(booking.checkInDate))) {
      setErrorMessage('Check-out date must be after check-in date');
      return false;
    } else {
      setErrorMessage('');
      return true;
    }
  };

  return (
    <div>
       <Navbar />

    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <div className="booking-details">
            <h4>Reservation Details</h4>
            <p><strong>Heading:</strong> {booking.heading}</p>
            <p><strong>Price:</strong> ₹{booking.price} per night</p>
            <p><strong>Description:</strong> {booking.description}</p>
            <p><strong>Image:</strong> {booking.image}</p>
          </div>
          <div className="additional-details">
            <h4>What this place offers</h4>
            <ul className="offer-list">
              <li>Kitchen</li>
              <li>Free parking on premises</li>
              <li>Private pool</li>
              <li>Washing machine</li>
              <li>Air conditioning</li>
              <li>Garden</li>
              <li>Smoking allowed</li>
              <li>Unavailable: Carbon monoxide alarm</li>
              <li>Unavailable: Smoke alarm</li>
            </ul>
          </div>
        </div>
        <div className="col-md-6">
          <div className="booking-form-container">
            <h4>Reservation Form</h4>
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
              <Form.Group controlId="guestFullName">
                <Form.Label>Full Name</Form.Label>
                <FormControl
                  required
                  type="text"
                  name="guestFullName"
                  value={booking.guestFullName}
                  onChange={handleInputChange}
                />
              </Form.Group>
              <Form.Group controlId="guestEmail">
                <Form.Label>Email</Form.Label>
                <FormControl
                  required
                  type="email"
                  name="guestEmail"
                  value={booking.guestEmail}
                  onChange={handleInputChange}
                />
              </Form.Group>
              <Form.Group controlId="checkInDate">
                <Form.Label>Check-in Date</Form.Label>
                <FormControl
                  required
                  type="date"
                  name="checkInDate"
                  value={booking.checkInDate}
                  onChange={handleInputChange}
                  min={moment().format('YYYY-MM-DD')}
                />
                <Form.Control.Feedback type="invalid">Please select a valid check-in date.</Form.Control.Feedback>
              </Form.Group>
              <Form.Group controlId="checkOutDate">
                <Form.Label>Check-out Date</Form.Label>
                <FormControl
                  required
                  type="date"
                  name="checkOutDate"
                  value={booking.checkOutDate}
                  onChange={handleInputChange}
                  min={moment().add(1, 'day').format('YYYY-MM-DD')}
                />
                <Form.Control.Feedback type="invalid">Please select a valid check-out date.</Form.Control.Feedback>
              </Form.Group>
              <Form.Group controlId="numOfGuests">
                <Form.Label>Number of Guests</Form.Label>
                <FormControl
                  required
                  type="number"
                  name="numOfGuests"
                  value={booking.numOfGuests}
                  onChange={handleInputChange}
                  min={1}
                />
                <Form.Control.Feedback type="invalid">Please enter at least 1 guest.</Form.Control.Feedback>
              </Form.Group>
              <div className="form-group mt-4 mb-2">
                <button type="submit" className="btn btn-hotel">
                  Continue
                </button>
              </div>
            </Form>
            {errorMessage && <p className="text-danger">{errorMessage}</p>}
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default BookingForm;
