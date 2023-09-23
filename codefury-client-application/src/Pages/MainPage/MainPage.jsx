import React, { useState } from 'react';
import NavBar from '../../Components/NavBar';
import { Button, Card, CardContent } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import './MainPage.css';

function MainPage() {
  const causes = [
    'Genetic predisposition and family history',
    'Traumatic life experiences',
    'Chronic medical conditions',
    'Imbalance in brain chemistry',
    'Stress and overwhelming life situations'
  ];

  const [currentCauseIndex, setCurrentCauseIndex] = useState(0);

  const prevCause = () => {
    setCurrentCauseIndex((prevIndex) => (prevIndex === 0 ? causes.length - 1 : prevIndex - 1));
  };

  const nextCause = () => {
    setCurrentCauseIndex((prevIndex) => (prevIndex === causes.length - 1 ? 0 : prevIndex + 1));
  };
  return (
    <div className="main">
      <NavBar />
      <div className='header'>
        <h1>"Like a phoenix, we rise from the ashes of adversity,"</h1>
        <h1>"reborn and resilient, embracing our scars as badges of courage."</h1>
      </div>
      <div className='button-div'>
        <Button variant="contained" id="signupbtn">
          <RouterLink to="/live-meditation" style={{ textDecoration: 'none', color: 'white' }}>
            Live Meditation
          </RouterLink>
        </Button>
      </div>
      <div className='features'>


        <div className='carousel'>
          <h2>Causes of Mental Health Issues</h2>
          <Card>
            <CardContent>
              <p>{causes[currentCauseIndex]}</p>
            </CardContent>
          </Card>
          <div className='carousel-buttons'>
            <Button onClick={prevCause} variant="outlined" color="primary">
              Previous
            </Button>
            <Button onClick={nextCause} variant="outlined" color="primary">
              Next
            </Button>
          </div>
          <div className='testimonials'>
            <h2>What Our Users Say</h2>
            {/* Testimonial cards */}
          </div>
          <div className='footer'>
            <p>&copy; 2023 Live Meditation. All rights reserved.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default MainPage;

