// import React, { useState, useEffect } from 'react';
// import { Form, FormControl } from 'react-bootstrap';
// import moment from 'moment';
// import { useNavigate, useParams } from 'react-router-dom';
// import { useDispatch, useSelector } from 'react-redux'; // Importing useDispatch and useSelector
// import axios from 'axios';
// import './BookingFormStyles.css';
// import Navbar from '../Navbar';
// import { updateId } from '../../app/idSlice'; // Adjust the import path based on the relative location of BookingForm.js and idSlice.js
// import { configureStore } from '@reduxjs/toolkit';

// const BookingForm = () => {
//   const navigate = useNavigate();
//   const { id } = useParams();
//   const userId = useSelector(state => state.id); // Assuming 'id' is stored in the state under 'id'
//   const dispatch = useDispatch();

//   const [validated, setValidated] = useState(false);
//   const [errorMessage, setErrorMessage] = useState('');
//   const [booking, setBooking] = useState({
//     guestFullName: '',
//     guestEmail: '',
//     checkInDate: '',
//     checkOutDate: '',
//     numOfGuests: '',
//     heading: '',
//     price: '',
//     description: '',
//     image: ''
//   });

//   useEffect(() => {
//     const fetchTripDetails = async () => {
//       try {
//         const response = await axios.get(`http://localhost:8080/trips/${id}`);
//         const { heading, price, description, image } = response.data;
//         setBooking(prevBooking => ({
//           ...prevBooking,
//           heading,
//           price,
//           description,
//           image
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
//         const dataToSend = {
//           guestFullName: booking.guestFullName,
//           guestEmail: booking.guestEmail,
//           checkInDate: booking.checkInDate,
//           checkOutDate: booking.checkOutDate,
//           numOfGuests: booking.numOfGuests,
//           heading: booking.heading,
//           price: booking.price,
//           userId: userId.value// Using dynamically fetched userId
//         };

//         const response = await axios.post('http://localhost:8080/booking', dataToSend);
//         if (response.status >= 200 && response.status < 300) {
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
//       <Navbar />
//       <div className="container">
//         <div className="row">
//           <div className="col-md-6">
//             <div className="booking-details">
//               <h4>Reservation Details</h4>
//               <p><strong>Heading:</strong> {booking.heading}</p>
//               <p><strong>Price:</strong> ₹{booking.price} per night</p>
//               <p><strong>Description:</strong> {booking.description}</p>
//               <p><strong>Image:</strong> {booking.image}</p>
//             </div>
//             <div className="additional-details">
//               <h4>What this place offers</h4>
//               <ul className="offer-list">
//                 <li>Kitchen</li>
//                 <li>Free parking on premises</li>
//                 <li>Private pool</li>
//                 <li>Washing machine</li>
//                 <li>Air conditioning</li>
//                 <li>Garden</li>
//                 <li>Smoking allowed</li>
//                 <li>Unavailable: Carbon monoxide alarm</li>
//                 <li>Unavailable: Smoke alarm</li>
//               </ul>
//             </div>
//           </div>
//           <div className="col-md-6">
//             <div className="booking-form-container">
//               <h4>Reservation Form</h4>
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

import React, { useState, useEffect } from "react";
import { Form, FormControl } from "react-bootstrap";
import moment from "moment";
import { useNavigate, useParams } from "react-router-dom"; // Import useNavigate and useParams
import axios from "axios";
import "./BookingFormStyles.css";
import Navbar from "../Navbar";
import { useSelector } from "react-redux";

const BookingForm = () => {
  const navigate = useNavigate(); // Initialize useNavigate
  const { id } = useParams();

  const [isNumOfGuestsValid, setIsNumOfGuestsValid] = useState(true);
  const [validated, setValidated] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [booking, setBooking] = useState({
    guestFullName: "",
    guestEmail: "",
    checkInDate: "",
    checkOutDate: "",
    numOfGuests: "",
    heading: "",
    price: "",
    description: "",
    image: "",
  });

  useEffect(() => {
    const fetchTripDetails = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/trips/${id}`);
        const heading = response.data.details.heading;
        const price = response.data.details.price;
        const description = response.data.details.description;
        const image = response.data.base64Image;
        setBooking((prevBooking) => ({
          ...prevBooking,
          heading,
          price,
          description,
          image,
        }));
      } catch (error) {
        console.error("Error fetching trip details:", error);
        setErrorMessage(
          "Failed to fetch trip details. Please try again later."
        );
      }
    };

    fetchTripDetails();
  }, [id]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setBooking({ ...booking, [name]: value });
    setErrorMessage("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    if (
      form.checkValidity() === false ||
      !isCheckOutDateValid() ||
      !isNumOfGuestsValid
    ) {
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
          price: calculateTotalPrice(), // Use the calculated total price here
          userId: 1,
        };

        // Create an instance of Axios with timeout configuration
        const axiosInstance = axios.create({
          timeout: 5000, // Set the timeout to 5 seconds (adjust as needed)
        });

        // Send a POST request to the backend API to save the booking details using axiosInstance
        const response = await axiosInstance.post(
          "http://localhost:8080/booking",
          dataToSend
        );
        if (response.status >= 200 && response.status < 300) {
          // Redirect the user to a new page with relevant data
          navigate(
            `/booking-details?guestFullName=${booking.guestFullName}&heading=${
              booking.heading
            }&checkInDate=${booking.checkInDate}&checkOutDate=${
              booking.checkOutDate
            }&numOfGuests=${booking.numOfGuests}&price=${calculateTotalPrice()}`
          );
        } else {
          throw new Error("Failed to save booking details");
        }
      } catch (error) {
        console.error("Error saving booking details:", error);
        setErrorMessage(
          "Failed to save booking details. Please try again later."
        );
      }
      setValidated(true);
    }
  };

  const isCheckOutDateValid = () => {
    if (
      !moment(booking.checkOutDate).isSameOrAfter(moment(booking.checkInDate))
    ) {
      setErrorMessage("Check-out date must be after check-in date");
      return false;
    } else {
      setErrorMessage("");
      return true;
    }
  };

  const handleNumOfGuestsChange = (e) => {
    const { value } = e.target;
    if (value > 10) {
      setIsNumOfGuestsValid(false);
    } else {
      setIsNumOfGuestsValid(true);
    }
    handleInputChange(e);
  };

  const calculateTotalPrice = () => {
    const { price, numOfGuests } = booking;
    return price * numOfGuests;
  };

  return (
    <div>
      <Navbar />

      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="booking-details">
              <h4>Reservation Details</h4>
              <p>
                <strong>Heading:</strong> {booking.heading}
              </p>
              <p>
                <strong>Price:</strong> ₹{booking.price} per night
              </p>
              <p>
                <strong>Description:</strong> {booking.description}
              </p>
              <p>
                <strong>Image:</strong>{" "}
                <img className="booking-image" src={`data:image/jpeg;base64,${booking.image}`}></img>
              </p>
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
                    min={moment().format("YYYY-MM-DD")}
                  />
                  <Form.Control.Feedback type="invalid">
                    Please select a valid check-in date.
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group controlId="checkOutDate">
                  <Form.Label>Check-out Date</Form.Label>
                  <FormControl
                    required
                    type="date"
                    name="checkOutDate"
                    value={booking.checkOutDate}
                    onChange={handleInputChange}
                    min={moment().add(1, "day").format("YYYY-MM-DD")}
                  />
                  <Form.Control.Feedback type="invalid">
                    Please select a valid check-out date.
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group controlId="numOfGuests">
                  <Form.Label>Number of Guests</Form.Label>
                  <FormControl
                    required
                    type="number"
                    name="numOfGuests"
                    value={booking.numOfGuests}
                    onChange={handleNumOfGuestsChange}
                    min={1}
                  />
                  <Form.Control.Feedback type="invalid">
                    {isNumOfGuestsValid
                      ? "Please enter at least 1 guest."
                      : "Please enter a number between 1 and 10"}
                  </Form.Control.Feedback>
                </Form.Group>
                <div className="form-group mt-4 mb-2">
                  <p>Total Price: ₹{calculateTotalPrice()}</p>{" "}
                  {/* Display the total price */}
                  <button
                    type="submit"
                    className="btn btn-hotel"
                    disabled={!isNumOfGuestsValid}
                  >
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
