import React from 'react';
import { useAuth } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const Sidebar = ({ activeTab, setActiveTab, role, onContactDoctor }) => {
  const { logout } = useAuth();
  const navigate = useNavigate(); // Initialize navigate

  const patientTabs = [
    { id: 'health-summary', name: 'Health Summary' },
    { id: 'conditions', name: 'Chronic Conditions' },
    { id: 'medications', name: 'Medications' },
    { id: 'vitals', name: 'Vitals' },
    { id: 'appointments', name: 'Appointments' },
    { id: 'emergency', name: 'Emergency' },
  ];

  const doctorTabs = [
    { id: 'patient-list', name: 'Patient List' },
    { id: 'patient-details', name: 'Patient Details' },
  ];

  const tabs = role === 'patient' ? patientTabs : doctorTabs;

  // Function to handle logout and redirect
  const handleLogout = () => {
    logout();            // clears auth state
    navigate('/Login');  // redirects to the login page
  };

  return (
    <div className="w-64 bg-blue-800 text-white">
      <div className="p-4">
        <h2 className="text-xl font-bold">{role === 'patient' ? 'Patient Portal' : 'Doctor Portal'}</h2>
      </div>
      <nav className="mt-6">
        <ul className="space-y-2">
          {tabs.map((tab) => (
            <li key={tab.id}>
              <button
                onClick={() => setActiveTab(tab.id)}
                className={`w-full text-left px-4 py-2 ${activeTab === tab.id ? 'bg-blue-700' : 'hover:bg-blue-600'}`}
              >
                {tab.name}
              </button>
            </li>
          ))}
          {role === 'patient' && (
            <li>
              <button
                onClick={onContactDoctor}
                className="w-full text-left px-4 py-2 hover:bg-blue-600"
              >
                Contact Doctor
              </button>
            </li>
          )}
          <li>
            <button
              onClick={handleLogout}  // Updated to call handleLogout
              className="w-full text-left px-4 py-2 hover:bg-blue-600"
            >
              Logout
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
