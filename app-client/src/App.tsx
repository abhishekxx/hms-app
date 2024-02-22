import {  } from 'react'
import { Navigate, Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Layout from './layout/Layout'


function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout></Layout>} />
        <Route path="/search" element={<>Search Page</>} />
        <Route path="*" element={<Navigate to="" />} />
      </Routes>
    </Router>
  )
}

export default App
