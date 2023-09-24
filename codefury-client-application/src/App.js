import { Routes, Route, Navigate } from 'react-router-dom'
import Authentication from './Pages/AuthenticationPage/Authentication'
import AppContext from '../src/contexts/AppContext';
import { useState } from 'react';
import MainPage from './Pages/MainPage/MainPage';
import OnlineHarrasment from './Pages/OnlineHarrasmentPage/OnlineHarassment';
import Dashboard from './Pages/Dashboard/Dashboard';
import AboutTeam from './Pages/AboutTeamPage/AboutTeam';
import ChatBot from './Pages/ChatBotPage/ChatBot';
import LiveMeditation from './Pages/MeditationPages/LiveMeditation';
import Therapist from './Pages/TherapistPage/Therapist';

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
          {
            !isLoggedIn && 
            <Route path='/Auth' element={<Authentication/>} />
          }
          {
            isLoggedIn && 
            <Route path='/online-harassment' element={<OnlineHarrasment/>}/>
          }
          {
            isLoggedIn && 
            <Route path='/dashboard' element={<Dashboard/>}/>
          }
          <Route path='/about-team' element={<AboutTeam/>}/>
          <Route path='/chat-Bot' element={<ChatBot/>}/>
          <Route path='/live-meditation' element={<LiveMeditation/>}/>
          <Route path='/therapist' element={<Therapist/>}/>

          <Route path="*" element={<Navigate to="/" replace />} />

        </Routes>

      </div>
    </AppContext.Provider>
  );
}

export default App;
