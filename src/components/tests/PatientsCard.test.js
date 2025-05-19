import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import PatientCard from '../PatientCard';

test('renders patient card with correct information', () => {
  const patient = {
    id: 1,
    name: 'John Doe',
    age: 70,
    condition: "Alzheimer's",
    lastScan: '2024-12-01'
  };

  const { getByText } = render(
    <BrowserRouter>
      <PatientCard patient={patient} />
    </BrowserRouter>
  );

  expect(getByText('John Doe')).toBeInTheDocument();
  expect(getByText('Age: 70')).toBeInTheDocument();
  expect(getByText("Condition: Alzheimer's")).toBeInTheDocument();
  expect(getByText('Last Scan: 2024-12-01')).toBeInTheDocument();
});
