// src/components/patient/Emergency.jsx
import React from 'react';

const Emergency = () => {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Emergency Contacts</h2>
      <div className="bg-red-50 border-l-4 border-red-400 p-4 mb-6">
        <div className="flex">
          <div className="flex-shrink-0">
            <svg className="h-5 w-5 text-red-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
            </svg>
          </div>
          <div className="ml-3">
            <p className="text-sm text-red-700">
              In case of emergency, call <span className="font-bold">911</span> or your local emergency number immediately.
            </p>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="font-medium text-lg mb-2">Emergency Contacts</h3>
          <ul className="space-y-2">
            <li>
              <strong>Primary Contact:</strong> John Doe (Spouse) - 555-123-4567
            </li>
            <li>
              <strong>Secondary Contact:</strong> Jane Smith (Sibling) - 555-987-6543
            </li>
            <li>
              <strong>Primary Physician:</strong> Dr. Johnson - 555-456-7890
            </li>
          </ul>
        </div>
        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="font-medium text-lg mb-2">Nearest Hospitals</h3>
          <ul className="space-y-2">
            <li>
              <strong>City General Hospital</strong>
              <p>123 Main St, Anytown - 555-111-2222 (5 miles)</p>
            </li>
            <li>
              <strong>Regional Medical Center</strong>
              <p>456 Oak Ave, Anytown - 555-333-4444 (8 miles)</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Emergency;