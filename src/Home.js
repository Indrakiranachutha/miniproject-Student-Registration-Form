// src/pages/Home.js
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useTheme } from '../ThemeContext';

export default function Home() {
  const [students, setStudents] = useState([]);
  const { isDarkMode } = useTheme();

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = () => {
    fetch('http://localhost:8084/getStudent')
      .then(res => res.json())
      .then(data => setStudents(data))
      .catch(error => console.error('Error fetching students:', error));
  };

  const handleDel = async (id) => {
    try {
      const response = await fetch(`http://localhost:8084/delstu/${id}`, {
        method: 'DELETE'
      });

      if (response.ok) {
        alert(`Student with Roll No ${id} deleted successfully.`);
        loadUsers();
      } else {
        alert('Failed to delete student.');
      }
    } catch (error) {
      console.error('Error deleting student:', error);
      alert('An error occurred while deleting the student.');
    }
  };

  return (
    <div className="container">
      <div className="py-4">
        <table className={`table border shadow ${isDarkMode ? 'table-dark' : ''}`}>
          <thead>
            <tr>
              <th scope="col">Sno</th>
              <th scope="col">Roll No</th>
              <th scope="col">Name</th>
              <th scope="col">DOB</th>
              <th scope="col">Phno</th>
              <th scope="col">Gender</th>
              <th scope="col">Address</th>
              <th scope="col">Email</th>
              <th scope="col">Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student, index) => (
              <tr key={student.id}>
                <th scope="row">{index + 1}</th>
                <td>{student.rollno}</td>
                <td>{student.studentName}</td>
                <td>{student.dob}</td>
                <td>{student.phno}</td>
                <td>{student.gender}</td>
                <td>{student.address}</td>
                <td>{student.email}</td>
                <td>{student.status}</td>
                <td>
                  <Link className="btn btn-primary mx-2" to='/viewStu' state={student}>View</Link>
                  <Link className="btn btn-outline-primary mx-2" to='/editStu' state={student}>Edit</Link>
                  <button className="btn btn-danger mx-2" onClick={() => handleDel(student.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}