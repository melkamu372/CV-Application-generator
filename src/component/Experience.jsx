import React, { useState } from "react";

const Experience = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    username: "",
    age: "",
    sex: "",
    location: "",
    department: "",
    school: "",
    motherName: "",
    address: ""
  });

  const [users, setUsers] = useState([]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value
    }));
  };

  const handleAddUser = () => {
    setUsers((prevUsers) => [...prevUsers, formData]);
    setFormData({
      fullName: "",
      username: "",
      age: "",
      sex: "",
      location: "",
      department: "",
      school: "",
      motherName: "",
      address: ""
    });
  };

  return (
    <div>
      <h1>User Registration</h1>
      <label>
        Full Name:
        <input
          type="text"
          name="fullName"
          value={formData.fullName}
          onChange={handleInputChange}
        />
      </label>
      <label>
        Username:
        <input
          type="text"
          name="username"
          value={formData.username}
          onChange={handleInputChange}
        />
      </label>
      <label>
        Age:
        <input
          type="text"
          name="age"
          value={formData.age}
          onChange={handleInputChange}
        />
      </label>
      <label>
        Sex:
        <input
          type="text"
          name="sex"
          value={formData.sex}
          onChange={handleInputChange}
        />
      </label>
      <label>
        Location:
        <input
          type="text"
          name="location"
          value={formData.location}
          onChange={handleInputChange}
        />
      </label>
      <label>
        Department:
        <input
          type="text"
          name="department"
          value={formData.department}
          onChange={handleInputChange}
        />
      </label>
      <label>
        School:
        <input
          type="text"
          name="school"
          value={formData.school}
          onChange={handleInputChange}
        />
      </label>
      <label>
        Mother's Name:
        <input
          type="text"
          name="motherName"
          value={formData.motherName}
          onChange={handleInputChange}
        />
      </label>
      <label>
        Address:
        <input
          type="text"
          name="address"
          value={formData.address}
          onChange={handleInputChange}
        />
      </label>
      <button onClick={handleAddUser}>Add User</button>

      <h2>Registered Users:</h2>
      {users.length > 0 ? (
        <table>
          <thead>
            <tr>
              <th>Full Name</th>
              <th>Username</th>
              <th>Age</th>
              <th>Sex</th>
              <th>Location</th>
              <th>Department</th>
              <th>School</th>
              <th>Mother's Name</th>
              <th>Address</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={index}>
                <td>{user.fullName}</td>
                <td>{user.username}</td>
                <td>{user.age}</td>
                <td>{user.sex}</td>
                <td>{user.location}</td>
                <td>{user.department}</td>
                <td>{user.school}</td>
                <td>{user.motherName}</td>
                <td>{user.address}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No users registered yet.</p>
      )}
    </div>
  );
};


export default Experience;