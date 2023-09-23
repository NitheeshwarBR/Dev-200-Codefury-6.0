import React,{useState,useEffect} from 'react';
import NavBar from '../../Components/NavBar';
import { Button } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import './MainPage.css';
import NormalCard from '../../Components/NormalCards';
import meditation from '../../Images/liveMeditation.jpeg'
import therapists from '../../Images/therapists.jpeg'
import OnlineHarassment from '../../Images/onlineHarassment.png'
import chatBOt from '../../Images/chatbot.jpg'
import ImageCards from '../../Components/ImageCards'
const quotes=[
  {
    title:"Embrace struggle from it, resilience blooms like a lotus in adversity's pond; Just as a phoenix rises anew from ashes; we rise stronger from life's trials wearing scars as proof; of our tenacity and courage."
  },
  {
    title:"Hope, a beacon in the darkest abyss, guides us back to the realm of light; Though a mere flicker it illuminates the path to recovery; Nurture that spark, for even the smallest flame ignites a roaring fire of determination."
  },
  {
    title:"Each scar, a testament to battles fought and won. They're not marks of weakness but enduring symbols of strength. Embrace your scars; seen and unseen, for they tell the story of your resilience and triumphs."
  },
  {
    title:"Strength isn't absence of pain it's enduring and growing through it. Rise after each fall; find purpose in struggles, and let your journey inspire others, Strength shines brightest in ; the darkest moments, lighting the way forward."
  },
]
const causes = [
  {
    title: 'Genetic Predisposition and Family History',
    description: 'Mental health issues can be influenced by genetic factors and a family history of similar conditions.'
  },
  {
    title: 'Traumatic Life Experiences',
    description: 'Experiencing trauma or significant life events can impact mental well-being, often leading to mental health challenges.'
  },
  {
    title: 'Chronic Medical Conditions',
    description: 'Certain chronic medical conditions can affect mental health, either due to the condition itself or the challenges it presents.'
  },
  {
    title: 'Imbalance in Brain Chemistry',
    description: 'Chemical imbalances in the brain, such as variations in neurotransmitters, can contribute to mental health disorders.'
  },
  {
    title: 'Stress and Overwhelming Life Situations',
    description: 'High levels of stress or ongoing overwhelming life circumstances can strain mental health and lead to various mental health issues.'
  }
];
const features = [
  {
    image: meditation ,
    title: 'Live Meditation Session',
    description: 'Join real-time meditation sessions guided by experienced instructors, promoting relaxation and mindfulness.'
  },
  {
    image: chatBOt,
    title: 'An Interactive ChatBot',
    description: 'Engage in meaningful conversations with our AI-powered ChatBot, designed to provide support and information regarding mental health.'
  },
  {
    image: OnlineHarassment ,
    title: 'Online Harassment Portal',
    description: 'Access a platform to report online harassment incidents, seek help, and find resources to address and combat cyberbullying.'
  },
  {
    image: therapists ,
    title: 'Nearby Therapists',
    description: 'Find and connect with therapists in your local area to help address mental health concerns and challenges.'
  },
];

function MainPage() {
  const [quoteIndex, setQuoteIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setQuoteIndex(prevIndex => (prevIndex + 1) % quotes.length);
    }, 3000);

    return () => clearInterval(intervalId);
  }, []);
  const quote = quotes[quoteIndex].title;
  const [firstPart, secondPart,thirdPart] = quote.split(';');
  return (
    <div className="main">
      <NavBar />
      <div className='header'>
        <div>
          <h1>{firstPart}</h1>
          <h1>{secondPart}</h1>
          <h1>{thirdPart}</h1>
        </div>
      </div>
      <div className='button-div'>
        <Button variant="contained" id="signupbtn">
          <RouterLink to="/live-meditation" style={{ textDecoration: 'none', color: 'white' }}>
            Live Meditation
          </RouterLink>
        </Button>
      </div>
      <div className='features'>
        <div className="issue-header">
          <h2>Causes of Mental Health Issues</h2>
        </div>

        <div className='causes'>
          {causes.map((cause, index) => (
            <NormalCard key={index} cause={cause} />
          ))}
          
        </div>
        <hr />
        <div className="issue-header">
          <h2>Our Features</h2>
        </div>
        <div className='actual-features'>

          {features.map((feature, index) => (
            <ImageCards key={index} feature={feature} />
          ))}
        </div>

      </div>

      <div className='footer'>
        <p>&copy; 2023 Live Meditation. All rights reserved.</p>
      </div>
    </div>
  );
}

export default MainPage;
