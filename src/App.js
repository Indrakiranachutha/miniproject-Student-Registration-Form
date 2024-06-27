// src/App.js
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./Navbar";
import Home from "./Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import EditStudent from "./EditStudent";
import ViewStudent from "./ViewStudent";
import StudentForm from "./StudentForm";
import { ThemeProvider, useTheme } from './ThemeContext';

function AppContent() {
  const { isDarkMode } = useTheme();

  return (
    <div className={`App ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/adduser" element={<StudentForm />} />
          <Route exact path="/editStu" element={<EditStudent />} />
          <Route exact path="/viewStu/" element={<ViewStudent />} />
        </Routes>
      </Router>
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

export default App;