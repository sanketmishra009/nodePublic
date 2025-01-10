import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Start from './pages/Start';
import UserLogin from './pages/UserLogin';
import UserSignup from './pages/UserSignup';
import CaptainSingup from './pages/CaptainSignup';
import CaptainLogin from './pages/CaptainLogin';
import Home from './pages/Home';
import './App.css'


const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Start />} />
        <Route path='login' element={<UserLogin />} />
        <Route path='signup' element={<UserSignup />} />
        <Route path='captain-login' element={<CaptainLogin />} />
        <Route path='captain-signup' element={<CaptainSingup />} />
        <Route path='home' element={<Home />} />
      </Routes>
    </>
  )
}

export default App
