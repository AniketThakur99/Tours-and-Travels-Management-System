import React, { useState, useEffect } from "react";
import axios from "axios";
import "./AllTours.css"; // Import the CSS file
import Navbar from "../Navbar";

const AllTours = () => {
  const [tours, setTours] = useState([]);
  const [editingTour, setEditingTour] = useState(null);
  const [updatedTour, setUpdatedTour] = useState({
    heading: "",
    description: "",
    price: "",
    image: null,
  });
  const [selectedTourType, setSelectedTourType] = useState("");
  const [tourTypes, setTourTypes] = useState([]);

  useEffect(() => {
    fetchTours();
  }, []);

  useEffect(() => {
    const types = [...new Set(tours.map((tour) => tour.tourType))];
    setTourTypes(types);
  }, [tours]);

  const fetchTours = async () => {
    try {
      const response = await axios.get("http://localhost:8080/trips");
      setTours(response.data);
    } catch (error) {
      console.error("Error fetching tours:", error);
    }
  };

  const deleteTour = async (id) => {
    try {
      await axios.delete(`http://localhost:8080/trips/${id}`);
      fetchTours();
    } catch (error) {
      console.error("Error deleting tour:", error);
    }
  };

  const editTour = (tour) => {
    setEditingTour(tour);
    setUpdatedTour({
      heading: tour.heading,
      description: tour.description,
      price: tour.price,
      image: null,
    });
  };

  const handleCloseModal = () => {
    setEditingTour(null);
    setUpdatedTour({
      heading: "",
      description: "",
      price: "",
      image: null,
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUpdatedTour({ ...updatedTour, [name]: value });
  };

  const handleFileChange = (e) => {
    setUpdatedTour({ ...updatedTour, image: e.target.files[0] });
  };

  const handleSubmit = async () => {
    try {
      const formData = new FormData();
      formData.append("heading", updatedTour.heading);
      formData.append("description", updatedTour.description);
      formData.append("price", updatedTour.price);
      formData.append("image", updatedTour.image);

      await axios.put(`http://localhost:8080/trips/${editingTour.id}`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      handleCloseModal();
      fetchTours();
    } catch (error) {
      console.error("Error updating tour:", error);
    }
  };

  const handleDropdownChange = (e) => {
    setSelectedTourType(e.target.value);
  };

  const filteredTours = selectedTourType
    ? tours.filter((tour) => tour.tourType === selectedTourType)
    : tours;

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div>
      <Navbar/>
    
    <div className="all-tours-container">
      <h1 className="heading">All Tours</h1>
      {/* Dropdown menu for tour types */}
      <div className="dropdown-container">
        <select
          value={selectedTourType}
          onChange={handleDropdownChange}
        >
          <option value="">All Tour Types</option>
          {tourTypes.map((type) => (
            <option key={type} value={type}>{type}</option>
          ))}
        </select>
      </div>
      <div className="table-container">
        <table className="all-tours-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Heading</th>
              <th>Description</th>
              <th>Price</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {filteredTours.map((tour) => (
              <tr key={tour.id}>
                <td>{tour.id}</td>
                <td>{tour.heading}</td>
                <td>{tour.description}</td>
                <td>{tour.price}</td>
                <td>
                  <button onClick={() => editTour(tour)}>Edit</button>
                </td>
                <td>
                  <button onClick={() => deleteTour(tour.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {editingTour && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={handleCloseModal}>
              &times;
            </span>
            <h2>Edit Tour</h2>
            <input
              type="text"
              name="heading"
              value={updatedTour.heading}
              onChange={handleInputChange}
            />
            <input
              type="text"
              name="description"
              value={updatedTour.description}
              onChange={handleInputChange}
            />
            <input
              type="text"
              name="price"
              value={updatedTour.price}
              onChange={handleInputChange}
            />
            <input type="file" accept="image/*" onChange={handleFileChange} />
            <button onClick={handleSubmit}>Update Tour</button>
          </div>
        </div>
      )}

      {/* Floating button for scrolling to top */}
      <button className="scroll-to-top-button" onClick={scrollToTop}>
        Scroll to Top
      </button>
    </div>
    </div>
  );
};

export default AllTours;
