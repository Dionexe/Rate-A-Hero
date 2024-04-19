import React from 'react';
import { Main } from './Main';
// import './index.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Marvel } from './Marvel';

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
