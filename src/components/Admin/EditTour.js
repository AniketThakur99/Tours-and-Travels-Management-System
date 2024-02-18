import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from "axios";
import Navbar from "../Navbar";
import "./EditTour.css";

function EditTour() {
  const { tourId } = useParams();
  const [tour, setTour] = useState(null);
  const [editedTour, setEditedTour] = useState(null);
  const [successMessage, setSuccessMessage] = useState("");

  useEffect(() => {
    // Fetch tour data by ID
    const fetchTourById = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8080/trips/${tourId}`
        );
        setTour(response.data);
        setEditedTour(response.data); // Initialize editedTour state with fetched data
      } catch (error) {
        console.error("Error fetching tour:", error);
      }
    };

    // Call the fetch function
    fetchTourById();

    // Cleanup function (optional)
    return () => {
      // Any cleanup code can go here
    };
  }, [tourId]); // Fetch data when tourId changes

  // Handle changes in the input fields
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedTour((prevTour) => ({
      ...prevTour,
      [name]: value,
    }));
  };

  // Handle update click
  const handleUpdateClick = async () => {
    try {
      await axios.put(`http://localhost:8080/trips/${tourId}`, editedTour);
      // Optionally, you can re-fetch the updated data
      const response = await axios.get(`http://localhost:8080/trips/${tourId}`);
      setTour(response.data);
      setSuccessMessage("Updated successfully");
      // Hide success message after 5 seconds
      setTimeout(() => {
        setSuccessMessage("");
      }, 5000);
    } catch (error) {
      console.error("Error updating tour:", error);
    }
  };

  // Render loading state if tour data is being fetched
  if (!tour) {
    return <div>Loading...</div>;
  }

  // Render tour details once data is fetched
  return (
    <div>
      <Navbar />
      <div className="mainContainer">
        <h1>Edit Tour With Id: {tourId}</h1>
        <div>
          <label htmlFor="heading">Heading:</label>
          <input
            type="text"
            id="heading"
            name="heading"
            value={editedTour.heading}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="description">Description:</label>
          <textarea
            id="description"
            name="description"
            value={editedTour.description}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="price">Price:</label>
          <input
            type="text"
            id="price"
            name="price"
            value={editedTour.price}
            onChange={handleInputChange}
          />
        </div>
        {/* Add a link to trigger the update */}
        <div className="button-container">
        <a href="#" className="button-like-link" onClick={handleUpdateClick}>
          Update
        </a>
        </div>
        {/* Render success message if update is successful */}
        {successMessage && <p>{successMessage}</p>}
        <div className="button-container">
          {/* Button to navigate to AllTours page */}
          <Link to="/allusers" className="button-like-link">
            All Users
          </Link>

          {/* Button to navigate to CreateTour page */}
          <Link to="/createtour" className="button-like-link">
            Create Tours
          </Link>

          <Link to="/alltours" className="button-like-link">
            All Tours
          </Link>
        </div>
      </div>
    </div>
  );
}

export default EditTour;
