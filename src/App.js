import './App.css';
import { Routes, Route } from 'react-router-dom'
import Signup from './Components/Signup';
import OnlineHarrasment from './Components/OnlineHarrasment';
import ErrorPage from './Components/ErrorPage';
import Dashboard from './Pages/Dashboard/Dashboard';
import AppContext from './contexts/AppContext';
import { useState } from 'react';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [user, setUser] = useState(null)

  const globaldata = {
    isLoggedIn, setIsLoggedIn,
    user, setUser
  };
  return (
    <AppContext.Provider value={globaldata}>
      <div className="App">
        <Routes>
          <Route path="/" />
          <Route path='/authentication' element={<Signup />} />
          <Route path='/online-harrasment' element={<OnlineHarrasment />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path='*' element={<ErrorPage />} />
        </Routes>

      </div>
    </AppContext.Provider>
  );
}

export default App;
