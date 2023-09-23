import logo from './logo.svg';
import './App.css';
import {Routes ,Route} from 'react-router-dom'
import Signup from './Components/Signup';
import OnlineHarrasment from './Components/OnlineHarrasment';
import ErrorPage from './Components/ErrorPage';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" />
        <Route path='/authentication' element={<Signup/>}/>
        <Route path='/online-harrasment' element={<OnlineHarrasment/>}/>
        <Route path='*' element={<ErrorPage/>}/>
      </Routes>
      
    </div>
  );
}

export default App;