import React, { useState, useEffect } from 'react';
import '../css/MyProperty.css';

export default function MyProperty({ property, updateProperty, deleteProperty }) {
  const [isEditing, setIsEditing] = useState(false);
  const [updatedProperty, setUpdatedProperty] = useState(property);
  const [newImages, setNewImages] = useState([]); // Додані фото

  useEffect(() => {
    setUpdatedProperty(property); // Оновлюємо стан при зміні property
  }, [property]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUpdatedProperty(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    setNewImages(files);
  };

  const handleSave = () => {
    const formData = new FormData();
    formData.append("title", updatedProperty.title);
    formData.append("description", updatedProperty.description);
    formData.append("city", updatedProperty.city);
    formData.append("rooms", updatedProperty.rooms);
    formData.append("price", updatedProperty.price);

    // Додаємо фото
    newImages.forEach((image) => {
      formData.append("images", image);
    });

    updateProperty(property.id, formData);
    setIsEditing(false);
  };

  return (
    <div className="property-card">
      <div className="property-image">
        {updatedProperty.images && updatedProperty.images.length > 0 ? (
          <img src={`https://localhost:7168/${updatedProperty.images[0]}`} alt="Property" />
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
              name="city"
              value={updatedProperty.city}
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

            {/* Поле для вибору фото */}
            <input type="file" multiple onChange={handleImageChange} />

            <button className="btn save-btn" onClick={handleSave}>Save</button>
            <button className="btn cancel-btn" onClick={() => setIsEditing(false)}>Cancel</button>
          </>
        ) : (
          <>
            <h2>{updatedProperty.title}</h2>
            <p>{updatedProperty.description}</p>
            <p>{updatedProperty.city}</p>
            <p>{updatedProperty.rooms} rooms</p>
            <p>{updatedProperty.price}$</p>
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
