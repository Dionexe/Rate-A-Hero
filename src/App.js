import React from 'react';
import { Main } from './Main';
//import { Layout }  from './components/Layout';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Marvel } from './Marvel';
import './App.css'; 
//

function App() {
  return (
    <Router>
     <Routes>
       <Route path='/'element={<Main/>}/>
       <Route path='/:id' element={<Marvel/>}/>
     </Routes>
    </Router>
  )
}

export default App;
