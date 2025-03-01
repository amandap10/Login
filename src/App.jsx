import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import "./App.css"; // Importando o CSS global

import Home from './Pages/Home.jsx';
import Login from './Components/Login/Login'

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
