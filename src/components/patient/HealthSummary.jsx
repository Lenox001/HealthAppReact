// src/components/patient/HealthSummary.jsx
import React from 'react';

const HealthSummary = ({ patient }) => {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Health Summary</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-blue-50 p-4 rounded-lg">
          <h3 className="font-medium text-blue-800">Personal Information</h3>
          <ul className="mt-2 space-y-1">
            <li>Age: {patient.age}</li>
            <li>Blood Type: {patient.bloodType}</li>
            <li>Last Checkup: {patient.lastCheckup}</li>
          </ul>
        </div>
        <div className="bg-green-50 p-4 rounded-lg">
          <h3 className="font-medium text-green-800">Recent Vitals</h3>
          <ul className="mt-2 space-y-1">
            <li>Blood Pressure: {patient.vitals.bloodPressure}</li>
            <li>Heart Rate: {patient.vitals.heartRate}</li>
            <li>Temperature: {patient.vitals.temperature}</li>
          </ul>
        </div>
        <div className="bg-yellow-50 p-4 rounded-lg">
          <h3 className="font-medium text-yellow-800">Current Conditions</h3>
          <ul className="mt-2 space-y-1">
            {patient.conditions.map((condition, index) => (
              <li key={index}>{condition}</li>
            ))}
          </ul>
        </div>
        <div className="bg-purple-50 p-4 rounded-lg">
          <h3 className="font-medium text-purple-800">Upcoming Appointments</h3>
          <ul className="mt-2 space-y-1">
            {patient.appointments.slice(0, 2).map((appt, index) => (
              <li key={index}>
                {appt.date} at {appt.time} with {appt.doctor}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default HealthSummary;