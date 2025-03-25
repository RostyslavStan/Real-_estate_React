import { useState } from 'react';
import axios from 'axios';
import PropertyForm from '../components/PropertyForm';
import "../css/PropertyForm.css";

export default function AddProperty() {
  const token = localStorage.getItem('token') 

  const [property, setProperty] = useState(
  {
    title: '',
    description: '',
    city: '',
    price: '',
    rooms: '',
    images: [],
  }
);

  const handleChange = (e) => {
    const {name, value} = e.target
    setProperty({...property, [name]: value});
  };

  const handleFileChange = (e) => {
    setProperty({ ...property, images: [...e.target.files] });
  };
  
  async function createProperty(event) {
    event.preventDefault();
    
    const formData = new FormData();
    
    formData.append("title", property.title);
    formData.append("description", property.description);
    formData.append("city", property.city);
    formData.append("price", property.price);
    formData.append("rooms", property.rooms);
    
    if (property.images.length > 0) {
      for (let file of property.images) {
        formData.append("images", file); 
      }
    }
  
      const response = await axios.post(
        'https://localhost:7168/Properties/Create',
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data', 
            Authorization: `Bearer ${token}`
          }
        }
      );
  
      setProperty({
        title: '',
        description: '',
        city: '',
        price: '',
        rooms: '',
        images: [],
      });
  }
  

  return (
    <PropertyForm
      property={property}
      createProperty={createProperty}
      handleChange={handleChange}
      handleFileChange={handleFileChange}
    />
  );
}