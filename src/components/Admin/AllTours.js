import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Navbar from "../Navbar";
import "./AllTours.css"; // Import the CSS file
import Footer from "../Footer";
import AboutImg from '../../assets/admin-page.jpg';
import Hero from "../Hero";

const AllTours = () => {
  const [tours, setTours] = useState([]);
  const [selectedHeading, setSelectedHeading] = useState("");
  const [headings, setHeadings] = useState([]);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    fetchTours();
  }, []);

  useEffect(() => {
    const allHeadings = [...new Set(tours.map((tour) => tour.heading))];
    setHeadings(allHeadings);
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
      setSuccessMessage("Deleted successfully");
      setTimeout(() => {
        setSuccessMessage("");
      }, 5000);
    } catch (error) {
      console.error("Error deleting tour:", error);
      setErrorMessage("Error deleting tour. Please try again.");
      setTimeout(() => {
        setErrorMessage("");
      }, 5000);
    }
  };

  const handleDropdownChange = (e) => {
    setSelectedHeading(e.target.value);
  };

  const filteredTours = selectedHeading
    ? tours.filter((tour) => tour.heading === selectedHeading)
    : tours;

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div>
      <Navbar />
      <Hero cName="hero-mid" heroImg={AboutImg} title="Admin" btnClass="hide"/>
      <div className="all-tours-container-admin">
        <h1 className="heading-admin">All Tours</h1>
        <div className="button-container-admin">
          {/* Button to navigate to AllTours page */}
          <Link to="/allusers" className="button-like-link-admin">
            All Users
          </Link>

          {/* Button to navigate to CreateTour page */}
          <Link to="/createtour" className="button-like-link-admin">
            Create Tours
          </Link>
        </div>
        {/* Dropdown menu for headings */}
        <div className="dropdown-container-admin">
          <select value={selectedHeading} onChange={handleDropdownChange}>
            <option value="">All Headings</option>
            {headings.map((heading) => (
              <option key={heading} value={heading}>
                {heading}
              </option>
            ))}
          </select>
        </div>
        <div className="table-container-admin">
          <table className="all-tours-table-admin">
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
                    <Link
                      to={`/edittour/${tour.id}`}
                      className="edit-button-admin"
                    >
                      Edit
                    </Link>
                  </td>
                  <td>
                    <a
                      href="#"
                      className="delete-button-admin"
                      onClick={() => deleteTour(tour.id)}
                    >
                      Delete
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      {/* Success message */}
      {successMessage && (
        <p className="success-message-allTours">{successMessage}</p>
      )}
      {/* Error message */}
      {errorMessage && (
        <p className="error-message-allTours">{errorMessage}</p>
      )}
      {/* Anchor tag for scrolling to top */}
      <a href="#" className="scroll-to-top-link-admin" onClick={scrollToTop}>
        Scroll to Top
      </a>
      <Footer/>
    </div>
  );
};

export default AllTours;
