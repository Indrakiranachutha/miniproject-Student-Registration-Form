// src/users/EditStudent.js
import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useThemeContext } from '../ThemeContext';

export default function EditStudent() {
  const location = useLocation();
  const navigate = useNavigate();
  const studentFromLocation = location.state;
  const { isDarkMode } = useThemeContext();

  const [student, setStudent] = useState({
    id: studentFromLocation.id || "",
    studentName: studentFromLocation.studentName || "",
    rollno: studentFromLocation.rollno || "",
    dob: studentFromLocation.dob || "",
    gender: studentFromLocation.gender || "",
    address: studentFromLocation.address || "",
    email: studentFromLocation.email || "",
    status: studentFromLocation.status || ""
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setStudent({ ...student, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`http://localhost:8084/updateStu/${student.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(student),
      });

      if (response.ok) {
        console.log("Submitted:", student);
        navigate("/");
      } else {
        console.error("Failed to update student");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className={`container ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">Edit User</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">Name</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter your name"
                name="studentName"
                value={student.studentName}
                onChange={handleInputChange}
              />
              {/* Repeat for other fields */}
            </div>
            <button type="submit" className="btn btn-outline-primary">Submit</button>
            <Link className="btn btn-outline-danger mx-2" to="/">Cancel</Link>
          </form>
        </div>
      </div>
    </div>
  );
}