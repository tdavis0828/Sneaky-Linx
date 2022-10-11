import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Main from './pages/Main';
import Landing from './pages/Landing';
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';
import Dashboard from './pages/Dashboard';
import Search from './pages/Search';
import Inbox from './pages/Inbox';
import Notifications from './pages/Notifications';
import Profile from './pages/Profile';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />}>
        <Route index element={<Landing />} />
        <Route path="sign-up" element={<SignUp />} />
        <Route path="sign-in" element={<SignIn />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="search" element={<Search />} />
        <Route path="inbox" element={<Inbox />} />
        <Route path="notifications" element={<Notifications />} />
        <Route path="profile" element={<Profile />} />
      </Route>
    </Routes>
  );
}

export default App;
