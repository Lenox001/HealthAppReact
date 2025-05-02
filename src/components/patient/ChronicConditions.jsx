// src/components/patient/ChronicConditions.jsx
import React, { useState } from 'react';

const ChronicConditions = ({ conditions: initialConditions }) => {
  const [conditions, setConditions] = useState(initialConditions);
  const [newCondition, setNewCondition] = useState('');
  const [isEditing, setIsEditing] = useState(false);
  const [editIndex, setEditIndex] = useState(null);
  const [editValue, setEditValue] = useState('');

  const handleAddCondition = () => {
    if (newCondition.trim()) {
      setConditions([...conditions, newCondition]);
      setNewCondition('');
    }
  };

  const handleDeleteCondition = (index) => {
    setConditions(conditions.filter((_, i) => i !== index));
  };

  const startEditing = (index) => {
    setIsEditing(true);
    setEditIndex(index);
    setEditValue(conditions[index]);
  };

  const saveEdit = () => {
    const updatedConditions = [...conditions];
    updatedConditions[editIndex] = editValue;
    setConditions(updatedConditions);
    setIsEditing(false);
  };

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Chronic Conditions</h2>
      <div className="mb-6">
        <ul className="space-y-2">
          {conditions.map((condition, index) => (
            <li key={index} className="flex items-center justify-between bg-gray-50 p-3 rounded">
              {isEditing && editIndex === index ? (
                <input
                  type="text"
                  value={editValue}
                  onChange={(e) => setEditValue(e.target.value)}
                  className="flex-1 border border-gray-300 rounded px-2 py-1"
                />
              ) : (
                <span>{condition}</span>
              )}
              <div className="flex space-x-2">
                {isEditing && editIndex === index ? (
                  <button
                    onClick={saveEdit}
                    className="text-sm bg-green-500 text-white px-2 py-1 rounded"
                  >
                    Save
                  </button>
                ) : (
                  <button
                    onClick={() => startEditing(index)}
                    className="text-sm bg-blue-500 text-white px-2 py-1 rounded"
                  >
                    Edit
                  </button>
                )}
                <button
                  onClick={() => handleDeleteCondition(index)}
                  className="text-sm bg-red-500 text-white px-2 py-1 rounded"
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex items-center space-x-2">
        <input
          type="text"
          value={newCondition}
          onChange={(e) => setNewCondition(e.target.value)}
          placeholder="Add new condition"
          className="flex-1 border border-gray-300 rounded px-3 py-2"
        />
        <button
          onClick={handleAddCondition}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Add
        </button>
      </div>
    </div>
  );
};

export default ChronicConditions;