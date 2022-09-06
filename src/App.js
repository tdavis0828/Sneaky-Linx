import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Main from './pages/Main';
import Landing from './pages/Landing';
import SignUp from './pages/SignUp';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />}>
        <Route index element={<Landing />} />
        <Route path="signup" element={<SignUp />} />
      </Route>
    </Routes>
  );
}

export default App;
