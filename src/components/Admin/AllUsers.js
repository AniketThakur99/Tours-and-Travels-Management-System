import React, { useState, useEffect } from "react";
import axios from "axios";
import "./AllUsers.css"; // Import the CSS file
import Navbar from "../Navbar";

const AllUsers = () => {
  const [users, setUsers] = useState([]);
  const [editingUser, setEditingUser] = useState(null);
  const [updatedUser, setUpdatedUser] = useState({
    userName: "",
    userEmail: "",
    password: "",
    mobileNumber: "",
    address: "",
  });
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

  const editUser = (user) => {
    setEditingUser(user);
    setUpdatedUser(user);
  };

  const handleCloseModal = () => {
    setEditingUser(null);
    setUpdatedUser({
      userName: "",
      userEmail: "",
      password: "",
      mobileNumber: "",
      address: "",
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUpdatedUser({ ...updatedUser, [name]: value });
  };

  const handleSubmit = async () => {
    try {
      await axios.put(`http://localhost:8080/users/${editingUser.id}`, updatedUser);

      handleCloseModal();
      fetchUsers();
    } catch (error) {
      console.error("Error updating user:", error);
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

  return (
    <div>
      <Navbar/>
    <div className="all-users-container">
      <h1 className="heading">All Users</h1>
      {/* Search bar */}
      <div className="search-container">
        <input
          type="text"
          placeholder="Search by user name..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </div>
      {errorMessage && <div className="error-message">{errorMessage}</div>}
      <div className="table-container">
        <table className="all-users-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>User Name</th>
              <th>Email Address</th>
              <th>Mobile Number</th>
              <th>Password</th>
              <th>Address</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.userName}</td>
                <td>{user.userEmail}</td>
                <td>{user.mobileNumber}</td>
                <td>{user.password}</td>
                <td>{user.address}</td>
                <td>
                  <button onClick={() => editUser(user)}>Edit</button>
                </td>
                <td>
                  <button onClick={() => deleteUser(user.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {editingUser && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={handleCloseModal}>
              &times;
            </span>
            <h2>Edit User</h2>
            <input
              type="text"
              name="userName"
              value={updatedUser.userName}
              onChange={handleInputChange}
            />
            <input
              type="text"
              name="userEmail"
              value={updatedUser.userEmail}
              onChange={handleInputChange}
            />
            <input
              type="text"
              name="mobileNumber"
              value={updatedUser.mobileNumber}
              onChange={handleInputChange}
            />
            <input
              type="text"
              name="password"
              value={updatedUser.password}
              onChange={handleInputChange}
            />
            <input
              type="text"
              name="address"
              value={updatedUser.address}
              onChange={handleInputChange}
            />
            <button onClick={handleSubmit}>Update User</button>
          </div>
        </div>
      )}
    </div>
    </div>
  );
};

export default AllUsers;
