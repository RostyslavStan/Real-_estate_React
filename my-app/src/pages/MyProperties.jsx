import { useEffect, useState } from 'react';
import axios from 'axios';
import MyProperty from '../components/MyProperty';
import "../css/MyProperty.css";

export default function MyProperties() {
  const token = localStorage.getItem('token')
  const [properties, setProperties] = useState([]);

  async function fetchProperties() {
    const response = await axios.get('https://localhost:7168/Properties/myProperties', {
      headers: {Authorization: `Bearer ${token}`}
  });
    setProperties(response.data);
  }

  useEffect(() => {
    const fetchData = async () => {
      await fetchProperties();
    };
    fetchData();
  }, []);

  async function deleteProperty(id) {
    const response = await axios.delete(`https://localhost:7168/Properties/${id}`, {
      headers: {Authorization: `Bearer ${token}`}  
      });
    if (response.status === 200) {
      setProperties(properties.filter(p => p.id !== id));
    }
  }

  async function updateProperty(property) {
    const response = await axios.put('https://localhost:7168/Properties', property, {
      headers: {Authorization: `Bearer ${token}`}
        });
        if(response.status === 200)
        {
          alert('Ok')
        }
    setProperties(properties.map(p => p.id === property.id ? response.data : p));
  }

  return (
    <>
      {properties.map(property => (
        <MyProperty 
          key={property.id}
          property={property}
          updateProperty={updateProperty}
          deleteProperty={deleteProperty}
        />
      ))}
    </>
  );
}