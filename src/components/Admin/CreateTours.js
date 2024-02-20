import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Navbar from "../Navbar";
import "./CreateTours.css"; // Updated CSS file
import Footer from "../Footer";
import AboutImg from '../../assets/admin-page.jpg';
import Hero from "../Hero";

const Tours = () => {
  const [newTour, setNewTour] = useState({
    heading: "",
    description: "",
    price: "",
    image: null, // Change to hold a single image
  });
  const [imagePreview, setImagePreview] = useState(null); // State to hold image preview
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const addTour = async () => {
    try {
      // Validate fields
      if (
        !newTour.heading ||
        !newTour.description ||
        !newTour.price ||
        !newTour.image
      ) {
        throw new Error("Please fill in all fields and upload an image.");
      }

      // Validate price (accept only numbers)
      if (isNaN(newTour.price)) {
        throw new Error("Price must be a number.");
      }

      const formData = new FormData();
      formData.append("heading", newTour.heading);
      formData.append("description", newTour.description);
      formData.append("price", newTour.price);
      formData.append("image", newTour.image); // Append the single image to the formData

      console.log(formData);

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
        image: null,
      });
      setImagePreview(null);
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
    const selectedImage = e.target.files[0]; // Get the first selected image
    setNewTour({ ...newTour, image: selectedImage });

    // Generate preview URL for the selected image
    const preview = URL.createObjectURL(selectedImage);
    setImagePreview(preview);
  };

  return (
    <div className="mainPage">
      <Navbar />
      <Hero cName="hero-mid" heroImg={AboutImg} title="Admin" btnClass="hide"/>
      <div className="center-container-admin">
        <h1>Tours</h1>
        <h2>Add New Tour</h2>
        {successMessage && (
          <p className="success-message-admin-createTour">{successMessage}</p>
        )}
        {errorMessage && (
          <p className="error-message-admin-createTour">{errorMessage}</p>
        )}
        <div className="createTours-container-heading">
          {/* <label htmlFor="heading">Heading:</label> */}
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
        <div className="createTour-container-price">
          {/* <label htmlFor="price">Price:</label> */}
          <input
            id="price"
            type="text"
            placeholder="Price"
            value={newTour.price}
            onChange={(e) => setNewTour({ ...newTour, price: e.target.value })}
          />
        </div>
        <div className="createTours-container-description">
          {/* <label className="description-lable" htmlFor="description">Description:</label> */}
          <textarea
            id="description"
            placeholder="Description"
            value={newTour.description}
            onChange={(e) =>
              setNewTour({ ...newTour, description: e.target.value })
            }
          ></textarea>
        </div>
        <div className="imageInput-container-admin">
          {/* <label htmlFor="image">Image:</label> */}
          <input
            id="image"
            type="file"
            accept="image/*"
            onChange={handleImageChange}
          />
          {/* Render image preview */}
          {imagePreview && (
            <img
              src={imagePreview}
              alt="Preview"
              className="image-preview-admin"
            />
          )}
        </div>
        <Link to="#" onClick={addTour} className="addTour-button">
          Add Tour
        </Link>
        {/* Container for buttons */}
        <div>
          {/* Button to navigate to AllTours page */}
          <Link to="/alltours" className="addTour-button">
            All Tours
          </Link>

          {/* Button to navigate to AllUsers page */}
          <Link to="/allusers" className="addTour-button">
            All Users
          </Link>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Tours;
