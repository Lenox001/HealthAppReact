// src/components/doctor/PatientDetails.jsx
import React from 'react';

const PatientDetails = ({ patient, onBack, onPrescribe }) => {
  // Mock patient details
  const patientDetails = {
    ...patient,
    contact: '555-123-4567',
    email: 'john.doe@example.com',
    address: '123 Main St, Anytown, USA',
    bloodType: 'A+',
    medications: [
      { name: 'Lisinopril', dosage: '10mg', frequency: 'Once daily', prescribedBy: 'Dr. Smith' },
      { name: 'Metformin', dosage: '500mg', frequency: 'Twice daily', prescribedBy: 'Dr. Johnson' },
    ],
    vitals: {
      bloodPressure: '120/80',
      heartRate: '72 bpm',
      temperature: '98.6°F',
      weight: '185 lbs',
      lastUpdated: '2023-05-20',
    },
    appointments: [
      { date: '2023-06-10', time: '10:00 AM', reason: 'Follow-up' },
      { date: '2023-07-05', time: '2:30 PM', reason: 'Annual Checkup' },
    ],
  };

  return (
    <div>
      <div className="flex items-center mb-6">
        <button
          onClick={onBack}
          className="mr-4 text-blue-600 hover:text-blue-800"
        >
          &larr; Back
        </button>
        <h2 className="text-xl font-semibold">Patient Details</h2>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="font-medium text-lg mb-3">Personal Information</h3>
          <ul className="space-y-2">
            <li><strong>Name:</strong> {patientDetails.name}</li>
            <li><strong>Age:</strong> {patientDetails.age}</li>
            <li><strong>Gender:</strong> {patientDetails.gender}</li>
            <li><strong>Contact:</strong> {patientDetails.contact}</li>
            <li><strong>Email:</strong> {patientDetails.email}</li>
            <li><strong>Address:</strong> {patientDetails.address}</li>
            <li><strong>Blood Type:</strong> {patientDetails.bloodType}</li>
          </ul>
        </div>
        
        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="font-medium text-lg mb-3">Medical Conditions</h3>
          <ul className="space-y-2">
            {patientDetails.conditions.map((condition, index) => (
              <li key={index}>{condition}</li>
            ))}
          </ul>
        </div>
        
        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="font-medium text-lg mb-3">Recent Vitals</h3>
          <ul className="space-y-2">
            <li><strong>Blood Pressure:</strong> {patientDetails.vitals.bloodPressure}</li>
            <li><strong>Heart Rate:</strong> {patientDetails.vitals.heartRate}</li>
            <li><strong>Temperature:</strong> {patientDetails.vitals.temperature}</li>
            <li><strong>Weight:</strong> {patientDetails.vitals.weight}</li>
            <li><strong>Last Updated:</strong> {patientDetails.vitals.lastUpdated}</li>
          </ul>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="bg-white p-4 rounded-lg shadow">
          <div className="flex justify-between items-center mb-3">
            <h3 className="font-medium text-lg">Current Medications</h3>
            <button
              onClick={onPrescribe}
              className="text-sm bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700"
            >
              Prescribe New
            </button>
          </div>
          {patientDetails.medications.length === 0 ? (
            <p className="text-gray-500">No current medications</p>
          ) : (
            <table className="min-w-full divide-y divide-gray-200">
              <thead>
                <tr>
                  <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">Medication</th>
                  <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">Dosage</th>
                  <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">Frequency</th>
                  <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">Prescribed By</th>
                </tr>
              </thead>
              <tbody>
                {patientDetails.medications.map((med, index) => (
                  <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                    <td className="px-4 py-2">{med.name}</td>
                    <td className="px-4 py-2">{med.dosage}</td>
                    <td className="px-4 py-2">{med.frequency}</td>
                    <td className="px-4 py-2">{med.prescribedBy}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
        
        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="font-medium text-lg mb-3">Upcoming Appointments</h3>
          {patientDetails.appointments.length === 0 ? (
            <p className="text-gray-500">No upcoming appointments</p>
          ) : (
            <ul className="space-y-3">
              {patientDetails.appointments.map((appt, index) => (
                <li key={index} className="border-b pb-2">
                  <p><strong>Date:</strong> {appt.date} at {appt.time}</p>
                  <p><strong>Reason:</strong> {appt.reason}</p>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default PatientDetails;