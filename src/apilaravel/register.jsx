import React, { useState } from 'react';

function Register() {
    const [formData , setFormData] = useState({
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
    });
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
      };
      const handleSubmit = async (e) => {
        e.preventDefault();
    
        const response = await fetch('http://localhost:8000/api/register', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
          });
    
          if (response.status === 422) {
            setFormData({
                name: '',
                email: '',
                password: '',
                password_confirmation:''
            });
    
          } 
       
    };

    return (
        <div>
            <h2>Inscription</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Nom"
                />
                <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email"
                />
                <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="Mot de passe"
                />
                <input
                    type="password"
                    name="password_confirmation"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="password_confirmation"
                />
                <button type="submit">S'inscrire</button>
            </form>
        </div>
    );
}

export default Register;
