import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home';
import UserLogin from './pages/UserLogin';
import UserSignup from './pages/UserSignup';
import CaptainSingup from './pages/CaptainSignup';
import CaptainLogin from './pages/CaptainLogin';

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='login' element={<UserLogin />} />
        <Route path='singup' element={<UserSignup />} />
        <Route path='captain-login' element={<CaptainLogin />} />
        <Route path='captain-signup' element={<CaptainSingup />} />
      </Routes>
    </>
  )
}

export default App
