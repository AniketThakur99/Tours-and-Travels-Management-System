import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';

const BookingDetails = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const bookingId = queryParams.get('bookingId'); // Assuming the booking ID is passed in the query parameters
  const [bookingDetails, setBookingDetails] = useState(null);

  useEffect(() => {
    const fetchBookingDetails = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/booking/${bookingId}`);
        setBookingDetails(response.data);
      } catch (error) {
        console.error('Error fetching booking details:', error);
        // Handle error fetching data
      }
    };

    fetchBookingDetails();
  }, [bookingId]);

  if (!bookingDetails) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>Booking Details</h2>
      <p><strong>Guest Full Name:</strong> {bookingDetails.guestFullName}</p>
      <p><strong>Heading:</strong> {bookingDetails.heading}</p>
      <p><strong>Check-in Date:</strong> {bookingDetails.checkInDate}</p>
      <p><strong>Check-out Date:</strong> {bookingDetails.checkOutDate}</p>
      <p><strong>Number of Guests:</strong> {bookingDetails.numOfGuests}</p>
      <p><strong>Price:</strong> ₹{bookingDetails.price}</p>
      <p>Trip booked successfully for {bookingDetails.heading}</p>
    </div>
  );
};

export default BookingDetails;
