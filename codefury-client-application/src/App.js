import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Authentication from './Pages/AuthenticationPage/Authentication';
function App() {
  return (
    <div className="App">
     <Routes>
      <Route path='/Auth' element={<Authentication/>}/>
     </Routes>
    </div>
  );
}

export default App;
