import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Navbar from "../Navbar";

const Tours = () => {
  const [newTour, setNewTour] = useState({
    heading: '',
    description: '',
    price: '',
    image: null // Change to null to represent a single image
  });
  const [imagePreview, setImagePreview] = useState(null); // State to hold image preview
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const addTour = async () => {
    try {
      // Validate fields
      if (!newTour.heading || !newTour.description || !newTour.price 
      || !newTour.image
        ) {
        throw new Error('Please fill in all fields.');
      }

      // Validate price (accept only numbers)
      if (isNaN(newTour.price)) {
        throw new Error('Price must be a number.');
      }

      const formData = new FormData();
      formData.append('heading', newTour.heading);
      formData.append('description', newTour.description);
      formData.append('price', newTour.price);
      formData.append('image', newTour.image);
      console.log(formData)
      // Make a POST request to the backend with the FormData
      await axios.post('http://localhost:8080/trips', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });

      setSuccessMessage('Tour added successfully');
      setNewTour({
        heading: '',
        description: '',
        price: '',
        image: null
      });
      setImagePreview(null);
    } catch (error) {
      setErrorMessage(error.message || 'Error adding tour');
    } finally {
      // Clear success and error messages after 5 seconds
      setTimeout(() => {
        setSuccessMessage('');
        setErrorMessage('');
      }, 5000);
    }
  };

  const handleImageChange = (e) => {
    const selectedImage = e.target.files[0];
    setNewTour({ ...newTour, image: selectedImage });

    // Generate preview URL for the selected image
    setImagePreview(URL.createObjectURL(selectedImage));
  };

  return (
    <div>
      {/* <Navbar/> */}
      <div className="center-container">
        <h1>Tours</h1>
        <h2>Add New Tour</h2>
        {successMessage && <p className="success-message">{successMessage}</p>}
        {errorMessage && <p className="error-message">{errorMessage}</p>}
        <div className="input-container">
          <label htmlFor="heading">Heading:</label>
          <input
            id="heading"
            type="text"
            placeholder="Heading"
            value={newTour.heading}
            onChange={e => setNewTour({ ...newTour, heading: e.target.value })}
          />
        </div>
        <div className="input-container">
          <label htmlFor="description">Description:</label>
          <textarea
            id="description"
            placeholder="Description"
            value={newTour.description}
            onChange={e => setNewTour({ ...newTour, description: e.target.value })}
          ></textarea>
        </div>
        <div className="input-container">
          <label htmlFor="price">Price:</label>
          <input
            id="price"
            type="text"
            placeholder="Price"
            value={newTour.price}
            onChange={e => setNewTour({ ...newTour, price: e.target.value })}
          />
        </div>
        <div className="input-container">
          <label htmlFor="image">Image:</label>
          <input
            id="image"
            type="file"
            accept="image/*"
            onChange={handleImageChange}
          />
          {imagePreview && <img src={imagePreview} alt="Preview" className="image-preview" />}
        </div>
        <button onClick={addTour}>Add Tour</button>

        {/* Button to navigate to AllTours page */}
        <Link to="/alltours">
          <button className="all-tours-button">All Tours</button>
        </Link>

        {/* Button to navigate to AllUsers page */}
        <Link to="/allusers">
          <button className="all-users-button">All Users</button>
        </Link>
      </div>
    </div>
  );
};

export default Tours;
