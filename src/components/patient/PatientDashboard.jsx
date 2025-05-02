// src/components/patient/PatientDashboard.jsx
import React, { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import HealthSummary from './HealthSummary';
import ChronicConditions from './ChronicConditions';
import Medications from './Medications';
import Vitals from './Vitals';
import Appointments from './Appointments';
import Emergency from './Emergency';
import Sidebar from '../shared/Sidebar';
import ContactForm from '../shared/ContactForm';

const PatientDashboard = () => {
  const { user } = useAuth();
  const [activeTab, setActiveTab] = useState('health-summary');
  const [showContactForm, setShowContactForm] = useState(false);

  const patientData = {
    name: user?.name || 'Patient',
    age: 42,
    bloodType: 'A+',
    lastCheckup: '2023-05-15',
    conditions: ['Hypertension', 'Type 2 Diabetes'],
    medications: [
      { name: 'Lisinopril', dosage: '10mg', frequency: 'Once daily' },
      { name: 'Metformin', dosage: '500mg', frequency: 'Twice daily' },
    ],
    vitals: {
      bloodPressure: '120/80',
      heartRate: '72 bpm',
      temperature: '98.6°F',
      weight: '185 lbs',
    },
    appointments: [
      { date: '2023-06-10', time: '10:00 AM', doctor: 'Dr. Smith', reason: 'Follow-up' },
      { date: '2023-07-05', time: '2:30 PM', doctor: 'Dr. Johnson', reason: 'Annual Checkup' },
    ],
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case 'health-summary':
        return <HealthSummary patient={patientData} />;
      case 'conditions':
        return <ChronicConditions conditions={patientData.conditions} />;
      case 'medications':
        return <Medications medications={patientData.medications} />;
      case 'vitals':
        return <Vitals vitals={patientData.vitals} />;
      case 'appointments':
        return <Appointments appointments={patientData.appointments} />;
      case 'emergency':
        return <Emergency />;
      default:
        return <HealthSummary patient={patientData} />;
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar 
        activeTab={activeTab} 
        setActiveTab={setActiveTab} 
        role="patient"
        onContactDoctor={() => setShowContactForm(true)}
      />
      <div className="flex-1 p-8">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h1 className="text-2xl font-bold text-gray-800 mb-6">Welcome, {patientData.name}</h1>
          {renderTabContent()}
        </div>
      </div>
      {showContactForm && (
        <ContactForm onClose={() => setShowContactForm(false)} />
      )}
    </div>
  );
};

export default PatientDashboard;