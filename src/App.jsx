import React from 'react'
import './App.css'
import { Routes,Route} from 'react-router-dom'
import Register from './apilaravel/register'
import Login from './apilaravel/login'
import Ajouter from './apilaravel/ajout'

function App() {

  return (
    <>
      <Routes>
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/ajout" element={<Ajouter/>} />
      </Routes>
    </>
  )
}

export default App
