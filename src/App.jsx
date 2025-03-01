import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import "./App.css"; // Importando o CSS global

import Home from './page/Home.jsx'
import Login from './page/Login.jsx'

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/home' element={<Home />}/>
        <Route path="/" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
