import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./AllUsers.css"; // Import the CSS file
import Navbar from "../Navbar";

const AllUsers = () => {
  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await axios.get("http://localhost:8080/users");
      setUsers(response.data);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  const deleteUser = async (id) => {
    try {
      await axios.delete(`http://localhost:8080/users/${id}`);
      fetchUsers();
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };

  const handleSearch = () => {
    const foundUsers = users.filter(
      (user) => user.userName.toLowerCase() === searchTerm.toLowerCase()
    );
    if (foundUsers.length > 0) {
      // Users found, do something
    } else {
      setErrorMessage("User not found");
      setTimeout(() => {
        setErrorMessage("");
      }, 5000);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div>
      <Navbar />
      <div className="center-container">
        <h1 className="heading">All Users</h1>
        {/* Search bar */}
        <div className="search-container">
          <input
            type="text"
            placeholder="Search by user name..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <Link to="#" onClick={handleSearch} className="search-button">
            Search
          </Link>
        </div>
        {errorMessage && <div className="error-message">{errorMessage}</div>}
        <div className="button-container">
          {/* Button to navigate to AllTours page */}
          <Link to="/alltours" className="button-like-link">
            All Tours
          </Link>

          {/* Button to navigate to CreateTour page */}
          <Link to="/createtour" className="button-like-link">
            Create Tours
          </Link>
        </div>
        <div className="table-container">
          <table className="all-users-table">
            <thead>
              <tr>
                <th>ID</th>
                <th>User Name</th>
                <th>Email Address</th>
                <th>Mobile Number</th>
                <th>Address</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user.id}>
                  <td>{user.id}</td>
                  <td>{user.userName}</td>
                  <td>{user.email}</td>
                  <td>{user.mobNumber}</td>
                  <td>{user.address}</td>
                  <td>
                    <a href="#" className="button-like-link" onClick={() => deleteUser(user.id)}>Delete</a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      {/* Anchor tag for scrolling to top */}
      <a href="#" className="scroll-to-top-link" onClick={scrollToTop}>
        Scroll to Top
      </a>
    </div>
  );
};

export default AllUsers;
