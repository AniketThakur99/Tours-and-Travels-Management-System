import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Navbar from "../Navbar";
import "./AllUsers.css"; // Import the CSS file
import Footer from "../Footer";
import AboutImg from '../../assets/admin-page.jpg';
import Hero from "../Hero";

const AllUsers = () => {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState("");
  const [userNames, setUserNames] = useState([]);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    fetchUsers();
  }, []);

  useEffect(() => {
    const allUserNames = [...new Set(users.map((user) => user.userName))];
    setUserNames(allUserNames);
  }, [users]);

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
      setSuccessMessage("User deleted successfully");
      setTimeout(() => {
        setSuccessMessage("");
      }, 5000);
    } catch (error) {
      console.error("Error deleting user:", error);
      setErrorMessage("Error deleting user. Please try again.");
      setTimeout(() => {
        setErrorMessage("");
      }, 5000);
    }
  };

  const handleDropdownChange = (e) => {
    setSelectedUser(e.target.value);
  };

  const filteredUsers = selectedUser
    ? users.filter((user) => user.userName === selectedUser)
    : users;

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
      <div className="allusers-container-admin">
        <h1 className="allusers-heading-admin">All Users</h1>
        <div className="allusers-button-container-admin">
          {/* Button to navigate to AllUsers page */}
          <Link to="/alltours" className="allusers-button-like-link-admin">
            All Tours
          </Link>

          {/* Button to navigate to CreateUser page */}
          <Link to="/createtour" className="allusers-button-like-link-admin">
            Create Tours
          </Link>
        </div>
        {/* Dropdown menu for users */}
        <div className="allusers-dropdown-container-admin">
          <select value={selectedUser} onChange={handleDropdownChange}>
            <option value="">All Users</option>
            {userNames.map((userName) => (
              <option key={userName} value={userName}>
                {userName}
              </option>
            ))}
          </select>
        </div>
        <div className="allusers-table-container-admin">
          <table className="allusers-table-admin">
            <thead>
              <tr>
                <th>ID</th>
                <th>User Name</th>
                <th>Email</th>
                <th>Mobile Number</th>
                <th>Address</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {filteredUsers.map((user) => (
                <tr key={user.id}>
                  <td>{user.id}</td>
                  <td>{user.userName}</td>
                  <td>{user.email}</td>
                  <td>{user.mobNumber}</td>
                  <td>{user.address}</td>
                  <td>
                    <a
                      href="#"
                      className="deleteButton-allUsers"
                      onClick={() => deleteUser(user.id)}
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
        <p className="success-message-allUsers">{successMessage}</p>
      )}
      {/* Error message */}
      {errorMessage && (
        <p className="error-message-allUsers">{errorMessage}</p>
      )}
      {/* Anchor tag for scrolling to top */}
      <a href="#" className="allusers-scroll-to-top-link-admin" onClick={scrollToTop}>
        Scroll to Top
      </a>
      <Footer/>
    </div>
  );
};

export default AllUsers;
