// src/components/doctor/DoctorDashboard.jsx
import React, { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import PatientList from './PatientList';
import PatientDetails from './PatientDetails';
import PrescriptionForm from './PrescriptionForm';
import Sidebar from '../shared/Sidebar';

const DoctorDashboard = () => {
  const { user } = useAuth();
  const [activeTab, setActiveTab] = useState('patient-list');
  const [selectedPatient, setSelectedPatient] = useState(null);
  const [showPrescriptionForm, setShowPrescriptionForm] = useState(false);

  // Mock patient data
  const patients = [
    {
      id: '1',
      name: 'John Doe',
      age: 42,
      gender: 'Male',
      lastVisit: '2023-05-20',
      conditions: ['Hypertension', 'Type 2 Diabetes'],
    },
    {
      id: '2',
      name: 'Jane Smith',
      age: 35,
      gender: 'Female',
      lastVisit: '2023-05-18',
      conditions: ['Asthma', 'Allergies'],
    },
    {
      id: '3',
      name: 'Robert Johnson',
      age: 58,
      gender: 'Male',
      lastVisit: '2023-05-15',
      conditions: ['High Cholesterol', 'Arthritis'],
    },
  ];

  const renderTabContent = () => {
    switch (activeTab) {
      case 'patient-list':
        return (
          <PatientList
            patients={patients}
            onSelectPatient={setSelectedPatient}
          />
        );
      case 'patient-details':
        return selectedPatient ? (
          <PatientDetails
            patient={selectedPatient}
            onBack={() => setActiveTab('patient-list')}
            onPrescribe={() => setShowPrescriptionForm(true)}
          />
        ) : (
          <div className="text-center py-10">
            <p>No patient selected</p>
            <button
              onClick={() => setActiveTab('patient-list')}
              className="mt-4 text-blue-600 hover:text-blue-800"
            >
              Back to patient list
            </button>
          </div>
        );
      default:
        return <PatientList patients={patients} onSelectPatient={setSelectedPatient} />;
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar 
        activeTab={activeTab} 
        setActiveTab={setActiveTab} 
        role="doctor"
      />
      <div className="flex-1 p-8">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h1 className="text-2xl font-bold text-gray-800 mb-6">
            Welcome, Dr. {user?.name.split(' ')[1] || 'User'}
          </h1>
          {renderTabContent()}
        </div>
      </div>
      {showPrescriptionForm && selectedPatient && (
        <PrescriptionForm
          patient={selectedPatient}
          onClose={() => setShowPrescriptionForm(false)}
        />
      )}
    </div>
  );
};

export default DoctorDashboard;