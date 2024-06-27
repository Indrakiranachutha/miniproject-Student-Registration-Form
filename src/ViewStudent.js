// src/users/ViewStudent.js
import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useThemeContext } from '../ThemeContext';

export default function ViewStudent() {
  const location = useLocation();
  const student = location.state;
  const { isDarkMode } = useThemeContext();
 
  return (
    <div className={`container ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">User Details</h2>

          <div className="card">
            <div className="card-header">
              Details of student rollno : {student.rollno}
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  <b>Name:{student.name}</b>
                </li>
                <li className="list-group-item">
                  <b>dob:{student.dob}</b> 
                </li>
                <li className="list-group-item">
                  <b>gender:{student.gender}</b> 
                </li>
                <li className="list-group-item">
                  <b>phoneNumber:{student.phno}</b> 
                </li>
                <li className="list-group-item">
                  <b>address:{student.address}</b> 
                </li>
                <li className="list-group-item">
                  <b>email:{student.email}</b> 
                </li>
                <li className="list-group-item">
                  <b>status:{student.status}</b> 
                </li>
              </ul>
            </div>
          </div>
          <Link className="btn btn-primary my-2" to={"/"}>
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}