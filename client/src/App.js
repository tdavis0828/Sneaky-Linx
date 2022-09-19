import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Main from './pages/Main';
import Landing from './pages/Landing';
import Dashboard from './pages/Dashboard';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />}>
        <Route index element={<Landing />} />
        <Route path="dashboard" element={<Dashboard />} />
      </Route>
    </Routes>
  );
}

export default App;
