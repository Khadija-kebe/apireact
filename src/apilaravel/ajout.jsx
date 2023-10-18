import React, { useState } from 'react';

const Ajouter = () => {
  const [formData, setFormData] = useState({
    titre: '',
    contenu: '',
    status: 'public', // Set a default value
    user_id: '1', // Set a default value
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      ...formData,
    };

    fetch('http://localhost:8000/api/ajout', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
    .then(response => {
      if (response.status === 201) {
        alert('Enregistrement réussi');
      } else {
        alert('Erreur lors de l\'enregistrement'); // You should handle errors here
      }
      return response.json(); // Parse the response JSON
    })
    .then(data => {
      console.log(data); // Log the response data
    })
    .catch(error => {
      console.error('Error:', error);
    });
  }

  return (
    <div>
      <h2>Créer un nouvel article</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Titre:</label>
          <input type="text" name="titre" value={formData.titre} onChange={handleInputChange} />
        </div>
        <div>
          <label>Contenu:</label>
          <textarea name="contenu" value={formData.contenu} onChange={handleInputChange} />
        </div>
        <div>
          <label>Status:</label>
          <select name="status" id="" value={formData.status} onChange={handleInputChange}>
            <option value="public">public</option>
            <option value="private">private</option>
          </select>
        </div>
        <div>
          <select name="user_id" id="" value={formData.user_id} onChange={handleInputChange}>
            <option value="1">1</option>
            <option value="2">2</option> {/* Corrected value for the second option */}
          </select>
        </div>
        <button type="submit">Ajouter</button>
      </form>
    </div>
  );
}

export default Ajouter;
