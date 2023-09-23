import { Routes, Route } from 'react-router-dom'
import Authentication from './Pages/AuthenticationPage/Authentication'
import AppContext from '../src/contexts/AppContext';
import { useState } from 'react';
import MainPage from './Pages/MainPage/MainPage';

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
          <Route path="/" element={<MainPage/>}/>
          <Route path='/authentication' element={<Authentication/>} />
          {/* <Route path='/online-harrasment' element={<OnlineHarrasment />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path='*' element={<ErrorPage />} /> */}
        </Routes>

      </div>
    </AppContext.Provider>
  );
}

export default App;
