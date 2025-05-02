// src/components/patient/Vitals.jsx
import React, { useState } from 'react';

const Vitals = ({ vitals: initialVitals }) => {
  const [vitals, setVitals] = useState(initialVitals);
  const [isEditing, setIsEditing] = useState(false);
  const [editValues, setEditValues] = useState(initialVitals);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditValues({
      ...editValues,
      [name]: value,
    });
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    setVitals(editValues);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setEditValues(vitals);
    setIsEditing(false);
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">Vital Signs</h2>
        {!isEditing ? (
          <button
            onClick={handleEdit}
            className="text-sm bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700"
          >
            Edit
          </button>
        ) : (
          <div className="space-x-2">
            <button
              onClick={handleSave}
              className="text-sm bg-green-600 text-white px-3 py-1 rounded hover:bg-green-700"
            >
              Save
            </button>
            <button
              onClick={handleCancel}
              className="text-sm bg-gray-600 text-white px-3 py-1 rounded hover:bg-gray-700"
            >
              Cancel
            </button>
          </div>
        )}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="font-medium text-gray-800 mb-3">Blood Pressure</h3>
          {isEditing ? (
            <input
              type="text"
              name="bloodPressure"
              value={editValues.bloodPressure}
              onChange={handleInputChange}
              className="w-full border border-gray-300 rounded px-3 py-2"
            />
          ) : (
            <p className="text-lg">{vitals.bloodPressure}</p>
          )}
        </div>
        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="font-medium text-gray-800 mb-3">Heart Rate</h3>
          {isEditing ? (
            <input
              type="text"
              name="heartRate"
              value={editValues.heartRate}
              onChange={handleInputChange}
              className="w-full border border-gray-300 rounded px-3 py-2"
            />
          ) : (
            <p className="text-lg">{vitals.heartRate}</p>
          )}
        </div>
        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="font-medium text-gray-800 mb-3">Temperature</h3>
          {isEditing ? (
            <input
              type="text"
              name="temperature"
              value={editValues.temperature}
              onChange={handleInputChange}
              className="w-full border border-gray-300 rounded px-3 py-2"
            />
          ) : (
            <p className="text-lg">{vitals.temperature}</p>
          )}
        </div>
        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="font-medium text-gray-800 mb-3">Weight</h3>
          {isEditing ? (
            <input
              type="text"
              name="weight"
              value={editValues.weight}
              onChange={handleInputChange}
              className="w-full border border-gray-300 rounded px-3 py-2"
            />
          ) : (
            <p className="text-lg">{vitals.weight}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Vitals;