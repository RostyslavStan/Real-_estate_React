import React, { useState } from 'react';
import '../css/MyProperty.css';

export default function MyProperty({ property, updateProperty, deleteProperty }) {
  const [isEditing, setIsEditing] = useState(false);
  const [updatedProperty, setUpdatedProperty] = useState(property);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUpdatedProperty(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSave = () => {
    updateProperty(updatedProperty);
    setIsEditing(false);
  };

  return (
    <div className="property-card">
      <div className="property-image">
        {property.images && property.images.length > 0 ? (
          <img src={`https://localhost:7168/${property.images[0]}`} alt="Property" />
        ) : (
          <p className="no-images">Зображення відсутнє</p>
        )}
      </div>
      <div className="property-details">
        {isEditing ? (
          <>
            <input
              type="text"
              name="title"
              value={updatedProperty.title}
              onChange={handleChange}
            />
            <textarea
              name="description"
              value={updatedProperty.description}
              onChange={handleChange}
            />
            <input
              type="text"
              name="City"
              value={updatedProperty.City}
              onChange={handleChange}
            />
            <input
              type="number"
              name="rooms"
              value={updatedProperty.rooms}
              onChange={handleChange}
            />
            <input
              type="number"
              name="price"
              value={updatedProperty.price}
              onChange={handleChange}
            />
            <button className="btn save-btn" onClick={handleSave}>Save</button>
            <button className="btn cancel-btn" onClick={() => setIsEditing(false)}>Cancel</button>
          </>
        ) : (
          <>
            <h2>{property.title}</h2>
            <p>{property.description}</p>
            <p>{property.City}</p>
            <p>{property.rooms} rooms</p>
            <p>{property.price}$</p>
            <button className="btn edit-btn" onClick={() => setIsEditing(true)}>
              Edit
            </button>
          </>
        )}
      </div>
      <div className="property-actions">
        <button className="btn delete-btn" onClick={() => deleteProperty(property.id)}>
          Delete
        </button>
      </div>
    </div>
  );
}
