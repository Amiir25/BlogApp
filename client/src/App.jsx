import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Login from './pages/Login'

const App = () => {
  return (
    <>
    <Routes>
      <Route path='/' element={<div>Home</div>}/>
      <Route path='/register' element={<>Register</>}/>
      <Route path='/login' element={<Login/>}/>
    </Routes>
    </>
  )
}

export default App
