import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import StudentList from './components/StudentList';
import StudentDetails from './components/StudentDetails';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<StudentList />} />
        <Route path="/student/:id" element={<StudentDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
