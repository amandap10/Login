import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


import Home from "../page/Home";
import Login from "../page/Login";
import Register from "../page/Register";

function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path='/home' element={<Home />}/>
        <Route path="/" element={<Login />} />
        <Route path='/register' element={<Register /> } />
      </Routes>
    </Router>
  );
}

export default AppRoutes;