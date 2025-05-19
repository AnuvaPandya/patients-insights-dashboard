import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PatientList from "./pages/PatientList";
import PatientDetail from "./pages/PatientDetail";
import "./styles/global.scss";

const App = () => {
  return (
    <Router>
      <div className="app-container">
        <Routes>
          <Route path="/" element={<PatientList />} />
          <Route path="/patient/:id" element={<PatientDetail />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
