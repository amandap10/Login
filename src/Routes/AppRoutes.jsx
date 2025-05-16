import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


import Dashboard from "../page/Dashboard";
import Login from "../page/Login";
import Register from "../page/Register";

function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path='/dashboard' element={<Dashboard />}/>
        <Route path='/' element={<Login />} />
        <Route path='/register' element={<Register /> } />
      </Routes>
    </Router>
  );
}

export default AppRoutes;