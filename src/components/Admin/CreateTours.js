import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Navbar from "../Navbar";
import "./CreateTours.css";

const Tours = () => {
  const [newTour, setNewTour] = useState({
    heading: "",
    description: "",
    price: "",
    images: [], // Change to an array to store multiple images
  });
  const [imagePreviews, setImagePreviews] = useState([]); // State to hold image previews
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const addTour = async () => {
    try {
      // Validate fields
      if (
        !newTour.heading ||
        !newTour.description ||
        !newTour.price ||
        newTour.images.length === 0
      ) {
        throw new Error(
          "Please fill in all fields and upload at least one image."
        );
      }

      // Validate price (accept only numbers)
      if (isNaN(newTour.price)) {
        throw new Error("Price must be a number.");
      }

      const formData = new FormData();
      formData.append("heading", newTour.heading);
      formData.append("description", newTour.description);
      formData.append("price", newTour.price);
      newTour.images.forEach((image) => {
        formData.append("images", image); // Append each image to the formData
      });

      await axios.post("http://localhost:8080/trips", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      setSuccessMessage("Tour added successfully");
      setNewTour({
        heading: "",
        description: "",
        price: "",
        images: [],
      });
      setImagePreviews([]);
    } catch (error) {
      setErrorMessage(error.message || "Error adding tour");
    } finally {
      // Clear success and error messages after 5 seconds
      setTimeout(() => {
        setSuccessMessage("");
        setErrorMessage("");
      }, 5000);
    }
  };

  const handleImageChange = (e) => {
    const selectedImages = Array.from(e.target.files); // Convert FileList to array
    setNewTour({ ...newTour, images: selectedImages });

    // Generate preview URLs for the selected images
    const previews = selectedImages.map((image) => URL.createObjectURL(image));
    setImagePreviews(previews);
  };

  return (
    <div>
      <Navbar />
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
            onChange={(e) =>
              setNewTour({ ...newTour, heading: e.target.value })
            }
          />
        </div>
        <div className="input-container">
          <label htmlFor="description">Description:</label>
          <textarea
            id="description"
            placeholder="Description"
            value={newTour.description}
            onChange={(e) =>
              setNewTour({ ...newTour, description: e.target.value })
            }
          ></textarea>
        </div>
        <div className="input-container">
          <label htmlFor="price">Price:</label>
          <input
            id="price"
            type="text"
            placeholder="Price"
            value={newTour.price}
            onChange={(e) => setNewTour({ ...newTour, price: e.target.value })}
          />
        </div>
        <div className="input-container">
          <label htmlFor="image">Image:</label>
          <input
            id="image"
            type="file"
            accept="image/*"
            multiple // Allow multiple image selection
            onChange={handleImageChange}
          />
          {/* Render image previews */}
          {imagePreviews.map((preview, index) => (
            <img
              key={index}
              src={preview}
              alt={`Preview ${index}`}
              className="image-preview"
            />
          ))}
        </div>
        <Link to="#" onClick={addTour} className="button-like-link">
          Add Tour
        </Link>
        {/* Container for buttons */}
        <div className="button-container">
          {/* Button to navigate to AllTours page */}
          <Link to="/alltours" className="button-like-link">
            All Tours
          </Link>

          {/* Button to navigate to AllUsers page */}
          <Link to="/allusers" className="button-like-link">
            All Users
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Tours;
