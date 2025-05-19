import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/global.scss';

const PatientsCard = ({ patient }) => (
  <Link to={`/patient/${patient.id}`} className="patient-card">
    <h2>{patient.name}</h2>
    <p>Age: {patient.age}</p>
    <p>Condition: {patient.condition}</p>
    <p>Last Scan: {patient.lastScan}</p>
  </Link>
);

export default PatientsCard;
